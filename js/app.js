// Female STEM Pioneers - Interactive App
// Handles search, filtering, sorting, and display of pioneer cards

class PioneersApp {
  constructor() {
    this.pioneers = window.pioneers || [];
    this.filteredPioneers = [...this.pioneers];
    this.searchTerm = '';
    this.sortBy = 'name';
    this.fieldFilter = '';
    
    console.log('PioneersApp initialized with', this.pioneers.length, 'pioneers');
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupModal();
    this.updateStats();
    this.renderPioneers();
  }

  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase();
        this.filterAndRender();
      });
    }

    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.filterAndRender();
      });
    }

    // Field filter
    const fieldFilter = document.getElementById('fieldFilter');
    if (fieldFilter) {
      fieldFilter.addEventListener('change', (e) => {
        this.fieldFilter = e.target.value;
        this.filterAndRender();
      });
    }

    // Clear filters button
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', () => {
        this.clearFilters();
      });
    }
  }

  filterAndRender() {
    this.filterPioneers();
    this.sortPioneers();
    this.renderPioneers();
    this.updateStats();
  }

  filterPioneers() {
    this.filteredPioneers = this.pioneers.filter(pioneer => {
      // Search filter
      const searchMatch = !this.searchTerm || 
        pioneer.name.toLowerCase().includes(this.searchTerm) ||
        pioneer.fields.some(field => field.toLowerCase().includes(this.searchTerm)) ||
        pioneer.achievements.some(achievement => achievement.toLowerCase().includes(this.searchTerm)) ||
        pioneer.summary.toLowerCase().includes(this.searchTerm) ||
        pioneer.country.toLowerCase().includes(this.searchTerm);

      // Field filter
      const fieldMatch = !this.fieldFilter || 
        pioneer.fields.includes(this.fieldFilter);

      return searchMatch && fieldMatch;
    });
  }

  sortPioneers() {
    this.filteredPioneers.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'lifespan':
          return this.extractYear(a.lifespan) - this.extractYear(b.lifespan);
        case 'lifespan-desc':
          return this.extractYear(b.lifespan) - this.extractYear(a.lifespan);
        case 'country':
          return a.country.localeCompare(b.country);
        case 'field':
          return a.fields[0].localeCompare(b.fields[0]);
        default:
          return 0;
      }
    });
  }

  extractYear(lifespan) {
    const match = lifespan.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
  }

  renderPioneers() {
    const container = document.getElementById('pioneersContainer');
    const noResults = document.getElementById('noResults');
    
    console.log('Rendering pioneers:', this.filteredPioneers.length);
    
    if (!container) {
      console.error('Pioneers container not found');
      return;
    }

    container.innerHTML = '';

    if (this.filteredPioneers.length === 0) {
      console.log('No pioneers to display');
      if (noResults) noResults.style.display = 'block';
      return;
    }

    if (noResults) noResults.style.display = 'none';

    this.filteredPioneers.forEach((pioneer, index) => {
      const card = this.createPioneerCard(pioneer, index);
      container.appendChild(card);
    });
    
    console.log('Rendered', this.filteredPioneers.length, 'pioneer cards');
  }

  createPioneerCard(pioneer, index) {
    const card = document.createElement('div');
    card.className = 'pioneer-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const fieldsBadges = pioneer.fields.map(field => 
      `<span class="pioneer-field-badge" data-field="${field}">${field}</span>`
    ).join('');

    const achievementsList = pioneer.achievements.slice(0, 3).map(achievement => 
      `<li>${achievement}</li>`
    ).join('');

    const shortDescription = pioneer.shortDescription ? `
      <div class="pioneer-short-description">
        <h4>About ${pioneer.name}:</h4>
        <p>${pioneer.shortDescription}</p>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="pioneer-card-header">
        <div class="pioneer-image">
          <img src="${pioneer.photo}" alt="Portrait of ${pioneer.name}" 
               onerror="this.onerror=null;this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjhmYWZjO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2UyZThmMDtzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNiZykiIHJ4PSIxMCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCwgMTAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9Ii0yMCIgcj0iMjUiIGZpbGw9IiM2NDc0OGIiLz48cGF0aCBkPSJNIC0yNSAtNDUgUSAwIC0xMDAgMjUgLTQ1IiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0gLTIwIC0zMCBRIDAgLTYwIDIwIC0zMCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIC0xNSAtMzUgUSAwIC01MCAxNSAtMzUiIHN0cm9rZT0iIzY0NzQ4YiIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTSAtMTAgLTQwIFEgMCAtNTUgMTAgLTQwIiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPjwvZz48dGV4dCB4PSIxMDAiIHk9IjE5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ3NDhiIj5QaW9uZWVyIFBvcnRyYWl0PC90ZXh0Pjwvc3ZnPg==';" 
               onload="this.classList.add('loaded')"
               onclick="window.pioneersApp.openImageModal('${pioneer.photo}', '${pioneer.name}', '${pioneer.lifespan}', '${pioneer.country}')"
               style="cursor: pointer;">
        </div>
        <div class="pioneer-header-info">
          <h3 class="pioneer-name">${pioneer.name}</h3>
          <p class="pioneer-subtitle">${pioneer.summary}</p>
          <div class="pioneer-meta">
            <span class="pioneer-lifespan">${pioneer.lifespan}</span>
            <span class="pioneer-country">${pioneer.country}</span>
          </div>
          <div class="pioneer-fields">
            ${fieldsBadges}
          </div>
        </div>
      </div>

      <div class="pioneer-content">
        <div class="pioneer-quote">
          <h4>Quote:</h4>
          <blockquote>
            "${pioneer.quote}"
          </blockquote>
        </div>
        
        <div class="pioneer-achievements">
          <h4>Key Achievements:</h4>
          <ul>${achievementsList}</ul>
        </div>

        ${shortDescription}

        <div class="pioneer-fun-fact">
          <h4>Fun Fact:</h4>
          <p>${pioneer.fun_fact}</p>
        </div>

        <div class="pioneer-actions">
          ${this.createActionButtons(pioneer)}
        </div>
      </div>
    `;

    return card;
  }

  createActionButtons(pioneer) {
    const buttons = [];
    
    if (pioneer.references && pioneer.references.length > 0) {
      buttons.push(`
        <a href="${pioneer.references[0].url}" target="_blank" rel="noopener" 
           class="action-btn reference-btn">
          <span>Learn More</span>
        </a>
      `);
    }

    return buttons.join('');
  }

  updateStats() {
    const totalPioneers = document.getElementById('totalPioneers');
    const totalFields = document.getElementById('totalFields');
    const totalCountries = document.getElementById('totalCountries');

    if (totalPioneers) {
      totalPioneers.textContent = this.filteredPioneers.length;
    }

    if (totalFields) {
      const uniqueFields = new Set();
      this.filteredPioneers.forEach(pioneer => {
        pioneer.fields.forEach(field => uniqueFields.add(field));
      });
      totalFields.textContent = uniqueFields.size;
    }

    if (totalCountries) {
      const uniqueCountries = new Set();
      this.filteredPioneers.forEach(pioneer => {
        uniqueCountries.add(pioneer.country);
      });
      totalCountries.textContent = uniqueCountries.size;
    }
  }

  clearFilters() {
    this.searchTerm = '';
    this.sortBy = 'name';
    this.fieldFilter = '';

    // Reset form elements
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const fieldFilter = document.getElementById('fieldFilter');

    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'name';
    if (fieldFilter) fieldFilter.value = '';

    this.filterAndRender();
  }

  setupModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = modal.querySelector('.modal-close');
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
      this.closeImageModal();
    });
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeImageModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        this.closeImageModal();
      }
    });
  }

  openImageModal(imageSrc, pioneerName, lifespan, country) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // Set modal content
    modalImage.src = imageSrc;
    modalImage.alt = `Portrait of ${pioneerName}`;
    modalTitle.textContent = pioneerName;
    modalDescription.textContent = `${lifespan} • ${country}`;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus for accessibility
    modal.focus();
  }

  closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.pioneersApp = new PioneersApp();
}); 