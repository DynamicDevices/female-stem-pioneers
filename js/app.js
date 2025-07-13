// Female STEM Pioneers - Interactive App
// Handles search, filtering, sorting, and display of pioneer cards

// Add this function at the top-level (global scope), before the PioneersApp class
defineSetFallbackIcon();

function defineSetFallbackIcon() {
  if (typeof window.setFallbackIcon !== 'function') {
    window.setFallbackIcon = function(imgElement, fallbackContent) {
      imgElement.onerror = null;
      const parent = imgElement.parentElement;
      if (!parent) return;
      // Remove the failed image
      parent.removeChild(imgElement);
      // Create the fallback icon element
      let fallbackDiv;
      if (fallbackContent.startsWith('<img')) {
        // If fallbackContent is an <img> tag, inject as HTML
        fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'fallback-icon';
        fallbackDiv.innerHTML = fallbackContent;
      } else {
        // Otherwise, treat as emoji
        fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'fallback-icon';
        fallbackDiv.textContent = fallbackContent;
      }
      parent.appendChild(fallbackDiv);
      console.log('Fallback icon injected:', fallbackDiv.outerHTML);
    };
  }
}

class PioneersApp {
  constructor() {
    this.pioneers = window.pioneers || [];
    this.filteredPioneers = [...this.pioneers];
    this.searchTerm = "";
    this.sortBy = "name";
    this.fieldFilter = "";

    console.log(
      "PioneersApp initialized with",
      this.pioneers.length,
      "pioneers",
    );
    console.log("Window pioneers:", window.pioneers ? window.pioneers.length : "undefined");

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
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchTerm = e.target.value.toLowerCase();
        this.filterAndRender();
      });
    }

    // Sort select
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.sortBy = e.target.value;
        this.filterAndRender();
      });
    }

    // Field filter
    const fieldFilter = document.getElementById("fieldFilter");
    if (fieldFilter) {
      fieldFilter.addEventListener("change", (e) => {
        this.fieldFilter = e.target.value;
        this.filterAndRender();
      });
    }

    // Clear filters button
    const clearFiltersBtn = document.getElementById("clearFiltersBtn");
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", () => {
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
    this.filteredPioneers = this.pioneers.filter((pioneer) => {
      // Search filter - prioritize name matching for short searches
      let searchMatch = !this.searchTerm;

      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        const nameLower = pioneer.name.toLowerCase();

        // For short searches (1-2 characters), only search names
        if (this.searchTerm.length <= 2) {
          // Check if any word in the name starts with the search term
          const nameWords = nameLower.split(" ");
          searchMatch = nameWords.some((word) => word.startsWith(searchLower));
        } else {
          // For longer searches, search more broadly
          searchMatch =
            nameLower.includes(searchLower) ||
            pioneer.fields.some((field) =>
              field.toLowerCase().includes(searchLower),
            ) ||
            pioneer.country.toLowerCase().includes(searchLower);
        }
      }

      // Field filter
      const fieldMatch =
        !this.fieldFilter || pioneer.fields.includes(this.fieldFilter);

      return searchMatch && fieldMatch;
    });
  }

  sortPioneers() {
    this.filteredPioneers.sort((a, b) => {
      switch (this.sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "birthday":
          return this.extractYear(a.birthDate) - this.extractYear(b.birthDate);
        case "birthday-desc":
          return this.extractYear(b.birthDate) - this.extractYear(a.birthDate);
        case "country":
          return a.country.localeCompare(b.country);
        case "field":
          return a.fields[0].localeCompare(b.fields[0]);
        default:
          return 0;
      }
    });
  }

  extractYear(birthDate) {
    const match = birthDate.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
  }

  /**
   * Get appropriate fallback icon for a pioneer using the IconMapping system
   * @param {Object} pioneer - Pioneer object
   * @returns {string} - Fallback icon emoji character
   */
  getFallbackIcon(pioneer) {
    // Prepare metadata for IconMapping
    const meta = {
      fields: pioneer.fields,
      region: pioneer.region || pioneer.country,
      birthYear: pioneer.birthYear || pioneer.birthDate
    };
    if (typeof window !== 'undefined' && window.IconMapping && typeof window.IconMapping.getIconForPioneer === 'function') {
      try {
        const icon = window.IconMapping.getIconForPioneer(meta);
        return icon;
      } catch (error) {
        console.warn('IconMapping failed, using default fallback:', error);
      }
    }
    // Default fallback: use scientist emoji
    return '👩‍🔬';
  }

  createPioneerCard(pioneer, index) {
    const card = document.createElement("div");
    card.className = "pioneer-card";
    card.style.animationDelay = `${index * 0.1}s`;

    // Add field explanations
    const FIELD_EXPLANATIONS = {
      Mathematics: "The study of numbers, quantities, shapes, and patterns.",
      Physics:
        "The science of matter, energy, and the fundamental forces of nature.",
      Chemistry:
        "The study of substances, their properties, and how they interact.",
      Biology: "The science of living organisms and life processes.",
      "Computer Science":
        "The study of computers, algorithms, and information processing.",
      Engineering:
        "The application of science and math to solve real-world problems.",
      Astronomy: "The study of celestial objects, space, and the universe.",
      Medicine:
        "The science and practice of diagnosing, treating, and preventing disease.",
      Computing:
        "The study of computers, programming, and information technology.",
      Aerospace: "The science and engineering of aircraft and spacecraft.",
      Technology:
        "The application of scientific knowledge for practical purposes.",
      Neuroscience: "The study of the nervous system and brain.",
      "Molecular Biology":
        "The study of biological molecules and their interactions.",
      Virology: "The study of viruses and viral diseases.",
      Immunology: "The study of the immune system and immune responses.",
      Geodesy:
        "The science of measuring and understanding the Earth's shape, orientation, and gravity.",
      "Rocket Science":
        "The science of designing and launching rockets and spacecraft.",
      Pharmacology: "The study of drugs and their effects on living organisms.",
      Crystallography: "The study of the arrangement of atoms in solids.",
      Phytomedicine: "The study of medicines derived from plants.",
      "Particle Physics": "The study of fundamental particles and forces.",
      "Environmental Science":
        "The study of the environment and human impact on it.",
      Paleontology: "The study of ancient life through fossils.",
      Geology: "The study of the Earth's structure and history.",
      Genetics: "The study of genes and heredity.",
      Cytogenetics:
        "The branch of genetics that studies the structure and function of cells, especially chromosomes.",
      Microbiology: "The study of microscopic organisms.",
      "Military Science": "The study of military technology and strategy.",
      Philosophy:
        "The study of fundamental questions about existence, knowledge, and values.",
      Primatology:
        "The study of primates including their behavior, biology, and evolution.",
      Anthropology:
        "The study of human societies, cultures, and their development.",
      Robotics:
        "The design, construction, and operation of robots and automated systems.",
      Invention:
        "The creation of new devices, processes, or methods to solve problems.",
      Education:
        "The process of teaching and learning, especially in academic settings.",
      Botany: "The scientific study of plants and their life processes.",
      Exploration:
        "The act of discovering and investigating new territories or knowledge.",
      "Atmospheric Science":
        "The study of Earth's atmosphere and weather patterns.",
      Biochemistry:
        "The chemistry of living organisms and biological processes.",
      Geophysics:
        "The physics of Earth and its environment, including earthquakes and magnetic fields.",
      Seismology: "The study of earthquakes and seismic waves.",
      Astronautics:
        "The science and technology of space travel and exploration.",
      Administration:
        "The management and organization of systems, institutions, or processes.",
    };

    // Render field badges with hover info
    const fieldsBadges = pioneer.fields
      .slice(0, 2)
      .map((field) => {
        const fieldClass = this.getFieldClass(field);
        const explanation =
          FIELD_EXPLANATIONS[field] || "No explanation available.";
        return `<span class="field-badge ${fieldClass}" data-field="${field}" tabindex="0">
        ${field}
        <span class="field-info-box">${explanation}</span>
      </span>`;
      })
      .join("");

    const achievementsList = (pioneer.achievements || [])
      .slice(0, 3)
      .map((achievement) => `<li>${achievement}</li>`)
      .join("");



    // Generate fallback icon for this pioneer
    const fallbackIcon = this.getFallbackIcon(pioneer);

    card.innerHTML = `
      <div class="pioneer-card-header">
        <div class="pioneer-image">
          <img data-src="${pioneer.photo}" alt="Portrait of ${pioneer.name}" 
               class="lazy-image"
               src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMzUiIGZpbGw9IiNlNWU3ZWIiIHN0cm9rZT0iI2NjY2NjYyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+"
               onerror="setFallbackIcon(this, '${fallbackIcon}')"
               onload="this.classList.add('loaded'); this.style.filter='none'; this.style.opacity='1';"
               onclick="window.pioneersApp.openImageModal('${pioneer.photo}', '${pioneer.name}', '${pioneer.birthDate}', '${pioneer.deathDate}', '${pioneer.country}')"
               style="cursor: pointer; filter: grayscale(100%) opacity(0.5); width: 80px; height: 80px;">
        </div>
        <div class="pioneer-header-info">
          <h3 class="pioneer-name">${pioneer.name}</h3>
          <div class="pioneer-field">${fieldsBadges}</div>
          <div class="pioneer-meta">
            <span class="pioneer-birth-date">${pioneer.deathDate ? `${this.formatDateWithEra(pioneer.birthDate)}–${this.formatDateWithEra(pioneer.deathDate)}` : `${this.formatDateWithEra(pioneer.birthDate)}–`}</span>
            <span class="pioneer-country">${pioneer.country}</span>
          </div>
          <p class="pioneer-subtitle">${pioneer.summary}</p>
        </div>
      </div>

      <div class="pioneer-content">
        <div class="pioneer-quote">
          <h4>Quote</h4>
          <blockquote>
            ${pioneer.quote}
          </blockquote>
        </div>
        
        <div class="pioneer-short-description" style="${pioneer.shortDescription ? 'display: block;' : 'display: none;'}">
          <h4>About ${pioneer.name}</h4>
          <p>${pioneer.shortDescription || ''}</p>
        </div>
        
        <div class="pioneer-achievements">
          <h4>Key Achievements</h4>
          <ul>${achievementsList}</ul>
        </div>

        <div class="pioneer-fun-fact" style="${pioneer.fun_fact && pioneer.fun_fact.trim() ? 'display: block;' : 'display: none;'}">
          <h4>Fun Fact</h4>
          <p>${pioneer.fun_fact || ''}</p>
        </div>

        <div class="pioneer-study-path">
          <h4>Follow in Her Footsteps</h4>
          <p>${this.getStudyPath(pioneer)}</p>
        </div>
      </div>

      <div class="pioneer-actions">
        <button class="expand-btn" onclick="window.pioneersApp.toggleExpandableContent(this, ${JSON.stringify(pioneer).replace(/"/g, '&quot;')})">
          <span class="expand-text">Learn More</span>
          <span class="expand-icon">▼</span>
        </button>
      </div>

      <div class="expandable-content">
        <div class="expandable-section">
          <h4>Timeline</h4>
          ${this.createTimelineContent(pioneer)}
        </div>
        
        <div class="expandable-section">
          <h4>Major Achievements</h4>
          <ul>
            ${(pioneer.achievements || []).map(achievement => `<li>${achievement}</li>`).join("")}
          </ul>
        </div>
        
        ${pioneer.education_details ? `
        <div class="expandable-section">
          <h4>Education & Career Path</h4>
          <p><strong>Key Courses:</strong> ${pioneer.education_details.key_courses?.join(", ") || "Not specified"}</p>
          <p><strong>Career Advice:</strong> ${pioneer.career_path?.advice_for_students || "Follow your passion and curiosity"}</p>
        </div>
        ` : ''}
        
        <div class="expandable-section">
          <h4>Legacy</h4>
          <p>${pioneer.legacy || "Her work continues to inspire future generations of scientists and researchers."}</p>
        </div>
        
        ${pioneer.references && pioneer.references.length > 0 ? `
        <div class="expandable-section">
          <h4>More Resources</h4>
          <div class="reference-links">
            ${pioneer.references.map(ref => `
              <a href="${ref.url}" target="_blank" rel="noopener" class="reference-link">
                <span>${ref.title || 'Learn More'}</span>
                <span class="link-icon">↗</span>
              </a>
            `).join("")}
          </div>
        </div>
        ` : ''}
      </div>
    `;

    return card;
  }

  createActionButtons(pioneer) {
    // No action buttons needed - everything goes in the expandable content
    return "";
  }

  updateStats() {
    const totalPioneers = document.getElementById("totalPioneers");
    const displayedPioneers = document.getElementById("displayedPioneers");
    const totalFields = document.getElementById("totalFields");
    const totalCountries = document.getElementById("totalCountries");

    if (totalPioneers) {
      totalPioneers.textContent = this.pioneers.length;
    }

    if (displayedPioneers) {
      displayedPioneers.textContent = this.filteredPioneers.length;
    }

    if (totalFields) {
      const uniqueFields = new Set();
      this.filteredPioneers.forEach((pioneer) => {
        (pioneer.fields || []).forEach((field) => uniqueFields.add(field));
      });
      totalFields.textContent = uniqueFields.size;
    }

    if (totalCountries) {
      const uniqueCountries = new Set();
      this.filteredPioneers.forEach((pioneer) => {
        uniqueCountries.add(pioneer.country);
      });
      totalCountries.textContent = uniqueCountries.size;
    }
  }

  clearFilters() {
    this.searchTerm = "";
    this.sortBy = "name";
    this.fieldFilter = "";

    // Reset form elements
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const fieldFilter = document.getElementById("fieldFilter");

    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "name";
    if (fieldFilter) fieldFilter.value = "";

    this.filterAndRender();
  }

  setupModal() {
    const modal = document.getElementById("imageModal");
    const closeBtn = modal.querySelector(".modal-close");

    // Close modal when clicking the close button
    closeBtn.addEventListener("click", () => {
      this.closeImageModal();
    });

    // Close modal when clicking outside the content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        this.closeImageModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.style.display === "block") {
        this.closeImageModal();
      }
    });
  }

  openImageModal(imageSrc, pioneerName, birthDate, deathDate, country) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    // Set modal content
    modalImage.src = imageSrc;
    modalImage.alt = `Portrait of ${pioneerName}`;
    modalTitle.textContent = pioneerName;
    // Format birth and death dates
    const formattedBirthday = birthDate ? this.formatDateWithEra(birthDate) : '';
    const formattedDeath = deathDate ? this.formatDateWithEra(deathDate) : '';
    let dateString = formattedBirthday;
    if (formattedDeath) {
      dateString += `–${formattedDeath}`;
    } else if (formattedBirthday) {
      dateString += '–';
    }
    modalDescription.textContent = `${dateString} • ${country}`;

    // Show modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    // Focus for accessibility
    modal.focus();
  }

  closeImageModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling
  }



  getFieldClass(field) {
    const fieldMap = {
      Mathematics: "mathematics",
      Physics: "physics",
      Chemistry: "chemistry",
      Biology: "biology",
      "Computer Science": "computer-science",
      Engineering: "engineering",
      Astronomy: "astronomy",
      Medicine: "medicine",
    };
    return fieldMap[field] || "mathematics"; // Default to mathematics if field not found
  }

  setupLazyLoading() {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove("lazy-image");
              observer.unobserve(img);
            }
          });
        },
        {
          rootMargin: "50px 0px",
          threshold: 0.01,
        },
      );

      // Observe all lazy images
      document.querySelectorAll(".lazy-image").forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  renderPioneers() {
    const container = document.getElementById("pioneersContainer");
    const noResults = document.getElementById("noResults");

    console.log("Rendering pioneers:", this.filteredPioneers.length);

    if (!container) {
      console.error("Pioneers container not found");
      return;
    }

    container.innerHTML = "";

    if (this.filteredPioneers.length === 0) {
      console.log("No pioneers to display");
      if (noResults) noResults.style.display = "block";
      return;
    }

    if (noResults) noResults.style.display = "none";

    this.filteredPioneers.forEach((pioneer, index) => {
      const card = this.createPioneerCard(pioneer, index);
      container.appendChild(card);
    });

    // Setup lazy loading after rendering
    this.setupLazyLoading();

    console.log("Rendered", this.filteredPioneers.length, "pioneer cards");
  }

  getStudyPath(pioneer) {
    // Use existing education details if available, otherwise generate based on fields
    if (pioneer.education_details && pioneer.education_details.key_courses) {
      const courses = pioneer.education_details.key_courses.join(", ");
      const advice = pioneer.career_path?.advice_for_students || "";
      return `Study: ${courses}. ${advice}`;
    }

    // Fallback: generate study path based on pioneer's fields
    const fieldStudyPaths = {
      Mathematics:
        "Study calculus, linear algebra, and statistics. Focus on problem-solving and logical thinking.",
      Physics:
        "Study physics, calculus, and laboratory methods. Develop strong mathematical foundations.",
      Chemistry:
        "Study chemistry, physics, and laboratory techniques. Learn to work safely with chemicals.",
      Biology:
        "Study biology, chemistry, and laboratory methods. Develop strong research and observation skills.",
      "Computer Science":
        "Study programming, algorithms, and computer systems. Practice coding regularly.",
      Engineering:
        "Study mathematics, physics, and engineering principles. Develop problem-solving and design skills.",
      Astronomy:
        "Study physics, mathematics, and astronomy. Learn to use telescopes and analyze data.",
      Medicine:
        "Study biology, chemistry, and human anatomy. Develop strong research and patient care skills.",
    };

    const primaryField = (pioneer.fields && pioneer.fields.length > 0) ? pioneer.fields[0] : "Mathematics";
    const studyPath =
      fieldStudyPaths[primaryField] ||
      "Study mathematics and science. Follow your curiosity and passion.";

    return studyPath;
  }

  // Helper to format date with BC/BCE if present
  formatDateWithEra(dateString) {
    if (!dateString) return '';
    if (/\b(bc|bce)\b/i.test(dateString)) {
      // Extract year and append BC
      const year = dateString.match(/\d+/);
      return year ? `${year[0]} BC` : dateString;
    }
    return dateString;
  }

  toggleExpandableContent(button, pioneer) {
    const card = button.closest('.pioneer-card');
    const expandableContent = card.querySelector('.expandable-content');
    const expandText = button.querySelector('.expand-text');
    const expandIcon = button.querySelector('.expand-icon');
    
    if (card.classList.contains('expanded')) {
      // Collapse
      card.classList.remove('expanded');
      expandText.textContent = 'Learn More';
      expandIcon.textContent = '▼';
      button.classList.remove('expanded');
    } else {
      // Expand
      card.classList.add('expanded');
      expandText.textContent = 'Show Less';
      expandIcon.textContent = '▲';
      button.classList.add('expanded');
    }
  }

  createTimelineContent(pioneer) {
    if (pioneer.timeline && pioneer.timeline.length > 0) {
      return pioneer.timeline.map(item => `
        <div class="timeline-item">
          <span class="timeline-year">${item.year}</span>
          <span class="timeline-event">${item.event}</span>
        </div>
      `).join("");
    }
    
    // Fallback timeline based on birth and death dates
    const timeline = [];
    if (pioneer.birthDate) {
      const birthYear = this.extractYear(pioneer.birthDate);
      timeline.push({
        year: birthYear,
        event: `Born in ${pioneer.country}`
      });
    }
    
    if (pioneer.deathDate) {
      const deathYear = this.extractYear(pioneer.deathDate);
      timeline.push({
        year: deathYear,
        event: `Passed away`
      });
    }
    
    return timeline.map(item => `
      <div class="timeline-item">
        <span class="timeline-year">${item.year}</span>
        <span class="timeline-event">${item.event}</span>
      </div>
    `).join("");
  }
}

// Initialize the app when DOM is loaded and pioneers data is available
document.addEventListener("DOMContentLoaded", () => {
  // Wait for pioneers data to be available
  if (window.pioneers && window.pioneers.length > 0) {
    window.pioneersApp = new PioneersApp();
  } else {
    // If pioneers data isn't available yet, wait a bit and try again
    setTimeout(() => {
      if (window.pioneers && window.pioneers.length > 0) {
        window.pioneersApp = new PioneersApp();
      } else {
        console.error("Pioneers data not available");
      }
    }, 100);
  }
});
