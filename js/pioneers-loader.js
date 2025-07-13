// Pioneers Loader - Dynamically loads individual pioneer files
// This replaces the large pioneers.js and pioneers2.js files with a modular system

class PioneersLoader {
  constructor() {
    this.pioneers = [];
    this.loaded = false;
    this.index = null;
  }

  // Load the index file to get the list of all pioneers
  async loadIndex() {
    try {
      const response = await fetch('./js/pioneers/index.json');
      if (!response.ok) {
        throw new Error(`Failed to load index: ${response.status}`);
      }
      this.index = await response.json();
      return this.index;
    } catch (error) {
      console.error('Error loading pioneers index:', error);
      return null;
    }
  }

  // Load a single pioneer file
  async loadPioneer(filename) {
    try {
      const response = await fetch(`./js/pioneers/${filename}`);
      if (!response.ok) {
        throw new Error(`Failed to load ${filename}: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error loading pioneer ${filename}:`, error);
      return null;
    }
  }

  // Load all pioneers
  async loadAllPioneers() {
    if (this.loaded) {
      return this.pioneers;
    }

    const index = await this.loadIndex();
    if (!index) {
      console.error('Could not load pioneers index');
      return [];
    }

    console.log(`Loading ${index.total} pioneers...`);
    
    const pioneerPromises = index.pioneers.map(async (pioneerInfo) => {
      const pioneer = await this.loadPioneer(pioneerInfo.filename);
      if (pioneer) {
        return pioneer;
      } else {
        console.warn(`Failed to load pioneer: ${pioneerInfo.name}`);
        return null;
      }
    });

    const loadedPioneers = await Promise.all(pioneerPromises);
    this.pioneers = loadedPioneers.filter(p => p !== null);
    this.loaded = true;

    console.log(`Successfully loaded ${this.pioneers.length} pioneers`);
    return this.pioneers;
  }

  // Get all pioneers (loads if not already loaded)
  async getAllPioneers() {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    return this.pioneers;
  }

  // Get a specific pioneer by name
  async getPioneerByName(name) {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    return this.pioneers.find(p => p.name === name);
  }

  // Get pioneers by field
  async getPioneersByField(field) {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    return this.pioneers.filter(p => p.fields && p.fields.includes(field));
  }

  // Get pioneers by country
  async getPioneersByCountry(country) {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    return this.pioneers.filter(p => p.country === country);
  }

  // Search pioneers by name (case-insensitive)
  async searchPioneers(searchTerm) {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    const term = searchTerm.toLowerCase();
    return this.pioneers.filter(p => 
      p.name.toLowerCase().includes(term) ||
      (p.fields && p.fields.some(f => f.toLowerCase().includes(term))) ||
      (p.country && p.country.toLowerCase().includes(term))
    );
  }

  // Get total count
  async getTotalCount() {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    return this.pioneers.length;
  }

  // Get verified pioneers only
  async getVerifiedPioneers() {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    return this.pioneers.filter(p => p.verified === true);
  }

  // Get pioneers with images
  async getPioneersWithImages() {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    return this.pioneers.filter(p => p.photo && p.photo.trim() !== '');
  }

  // Get pioneers using fallback icons
  async getPioneersWithFallbackIcons() {
    if (!this.loaded) {
      await this.loadAllPioneers();
    }
    return this.pioneers.filter(p => !p.photo || p.photo.trim() === '');
  }
}

// Create a global instance
const pioneersLoader = new PioneersLoader();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PioneersLoader, pioneersLoader };
}
// Ensure global for browser
if (typeof window !== 'undefined') {
  window.pioneersLoader = pioneersLoader;
} 