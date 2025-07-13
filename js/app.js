// Female STEM Pioneers - Interactive App
// Handles search, filtering, sorting, and display of pioneer cards

// DEBUG: Check if the pioneers loader is available
console.log('window.pioneersLoader:', window.pioneersLoader);

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
    this.pioneers = [];
    this.filteredPioneers = [];
    this.searchTerm = "";
    this.sortBy = "name";
    this.fieldFilter = "";
    this.loaded = false;

    console.log("PioneersApp initialized - loading pioneers...");

    this.init();
  }

  async init() {
    this.setupEventListeners();
    this.setupModal();
    
    // Load pioneers asynchronously
    try {
      await this.loadPioneers();
      this.updateStats();
      this.renderPioneers();
    } catch (error) {
      console.error('Failed to load pioneers:', error);
      this.showErrorMessage('Failed to load pioneer data. Please refresh the page.');
    }
  }

  async loadPioneers() {
    if (this.loaded) {
      return;
    }

    // Show loading indicator
    this.showLoadingIndicator();

    try {
      // Use the pioneers loader if available, otherwise fall back to window.pioneers
      if (window.pioneersLoader) {
        this.pioneers = await window.pioneersLoader.getAllPioneers();
      } else if (window.pioneers) {
        this.pioneers = window.pioneers;
      } else {
        throw new Error('No pioneers data available');
      }

      this.filteredPioneers = [...this.pioneers];
      this.loaded = true;
      
      console.log(`Loaded ${this.pioneers.length} pioneers`);
      
      // Hide loading indicator
      this.hideLoadingIndicator();
    } catch (error) {
      this.hideLoadingIndicator();
      throw error;
    }
  }

  showLoadingIndicator() {
    const container = document.getElementById('pioneersContainer');
    if (container) {
      container.innerHTML = '<div class="loading">Loading pioneers...</div>';
    }
  }

  hideLoadingIndicator() {
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
      loadingElement.remove();
    }
  }

  showErrorMessage(message) {
    const container = document.getElementById('pioneersContainer');
    if (container) {
      container.innerHTML = `<div class="error-message">${message}</div>`;
    }
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
    const fieldsBadges = (pioneer.fields || [])
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

    // Generate fallback icon for this pioneer
    const fallbackIcon = this.getFallbackIcon(pioneer);

    card.innerHTML = `
      <div class="pioneer-card-header vertical-header">
        <div class="pioneer-image">
          <img data-src="${pioneer.photo}" alt="Portrait of ${pioneer.name}" 
               class="lazy-image"
               src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMzUiIGZpbGw9IiNlNWU3ZWIiIHN0cm9rZT0iI2NjY2NjYyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+"
               onerror="setFallbackIcon(this, '${fallbackIcon}')"
               onload="this.classList.add('loaded'); this.style.filter='none'; this.style.opacity='1';"
               onclick="window.pioneersApp.openImageModal('${pioneer.photo}', '${pioneer.name}', '${pioneer.birthDate}', '${pioneer.deathDate}', '${pioneer.country}')"
               style="cursor: pointer; filter: grayscale(100%) opacity(0.5); width: 120px; height: 120px;">
        </div>
        <div class="pioneer-header-info" style="align-items: center; text-align: center;">
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
        <div class="pioneer-short-description" style="${pioneer.shortDescription ? 'display: block;' : 'display: none;'}">
          <h4>About ${pioneer.name}</h4>
          <p>${pioneer.shortDescription || ''}</p>
        </div>
        
        ${pioneer.quote && pioneer.quote.trim() !== "" ? `
        <div class="pioneer-quote">
          <h4>Quote</h4>
          <blockquote>
            "${pioneer.quote}"
          </blockquote>
        </div>
        ` : ''}
      </div>

      <div class="pioneer-actions">
        <button class="expand-btn" onclick="window.pioneersApp.toggleExpandableContent(this, ${JSON.stringify(pioneer).replace(/"/g, '&quot;')})">
          <span class="expand-text">Learn More</span>
          <span class="expand-icon">▼</span>
        </button>
      </div>

      <div class="expandable-content">
        ${this.createCollapsibleSection("🏠 Early Life & Journey", this.createEarlyLifeContent(pioneer), index, 0)}
        ${this.createCollapsibleSection("🚀 STEM Journey", this.createStemJourneyContent(pioneer), index, 1)}
        ${this.createCollapsibleSection("⚡ Challenges Overcome", this.createChallengesContent(pioneer), index, 2)}
        ${this.createCollapsibleSection("🎓 Education Path", this.createEducationContent(pioneer), index, 3)}
        ${this.createCollapsibleSection("💼 Career Highlights", this.createCareerContent(pioneer), index, 4)}
        ${this.createCollapsibleSection("📚 Student Resources", this.createStudentResourcesContent(pioneer), index, 5)}
        ${this.createCollapsibleSection("🌍 Cultural Background", this.createCulturalContent(pioneer), index, 6)}
        ${this.createCollapsibleSection("🔬 Modern Impact", this.createModernImpactContent(pioneer), index, 7)}
        ${this.createCollapsibleSection("📖 Publications", this.createPublicationsContent(pioneer), index, 8)}
        ${this.createCollapsibleSection("🏆 Awards & Recognition", this.createAwardsContent(pioneer), index, 9)}
        ${this.createCollapsibleSection("⏰ Timeline", this.createTimelineContent(pioneer), index, 10)}
        ${this.createCollapsibleSection("💡 Fun Facts", this.createFunFactsContent(pioneer), index, 11)}
        ${this.createCollapsibleSection("🔗 More Resources", this.createResourcesContent(pioneer), index, 12)}
      </div>
    `;

    return card;
  }

  createActionButtons(_pioneer) {
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

  toggleExpandableContent(button, _pioneer) {
    const card = button.closest('.pioneer-card');
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

  // Helper method to create collapsible sections
  createCollapsibleSection(title, content, cardIndex, sectionIndex) {
    const sectionId = `section-${cardIndex}-${sectionIndex}`;
    return `
      <div class="collapsible-section" id="${sectionId}">
        <button class="section-toggle" data-section-id="${sectionId}" onclick="window.pioneersApp.toggleSectionById('${sectionId}')">
          <span class="section-title">${title}</span>
          <span class="toggle-icon">▼</span>
        </button>
        <div class="section-content" style="display: none;">
          ${content}
        </div>
      </div>
    `;
  }

  // New toggle method using unique section ID
  toggleSectionById(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const content = section.querySelector('.section-content');
    const button = section.querySelector('.section-toggle');
    const icon = button.querySelector('.toggle-icon');
    if (content.style.display === 'none') {
      content.style.display = 'block';
      icon.textContent = '▲';
      button.classList.add('expanded');
    } else {
      content.style.display = 'none';
      icon.textContent = '▼';
      button.classList.remove('expanded');
    }
  }

  // Content creation methods
  createEarlyLifeContent(pioneer) {
    const earlyLife = pioneer.detailed_description?.early_life;
    const personalInfo = pioneer.personal_info;
    const birthDate = pioneer.birthDate;
    const country = pioneer.country;
    
    let content = '';
    
    // Always include basic birth information
    if (birthDate && country) {
      content += `<p><strong>Born:</strong> ${birthDate} in ${country}</p>`;
    }
    
    if (earlyLife) {
      content += `<p><strong>Early Life:</strong> ${earlyLife}</p>`;
    }
    
    if (personalInfo) {
      if (personalInfo.early_interests && personalInfo.early_interests.length > 0) {
        content += `<p><strong>Early Interests:</strong> ${personalInfo.early_interests.join(', ')}</p>`;
      }
      if (personalInfo.family_background) {
        content += `<p><strong>Family Background:</strong> ${personalInfo.family_background}</p>`;
      }
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      content = `<p>Born in ${country || 'her home country'}, ${pioneer.name} showed early promise in ${pioneer.fields.join(' and ')}.</p>`;
    }
    
    return content;
  }

  createStemJourneyContent(pioneer) {
    const stemJourney = pioneer.detailed_description?.stem_journey;
    const achievements = pioneer.achievements;
    const summary = pioneer.summary;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (stemJourney) {
      content += `<p><strong>STEM Journey:</strong> ${stemJourney}</p>`;
    }
    
    if (achievements && achievements.length > 0) {
      content += `<p><strong>Major Achievements:</strong></p><ul>`;
      achievements.forEach(achievement => {
        content += `<li>${achievement}</li>`;
      });
      content += `</ul>`;
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      if (summary) {
        content = `<p><strong>Career Summary:</strong> ${summary}</p>`;
      } else {
        content = `<p>${pioneer.name} made significant contributions to ${fields.join(' and ')}, breaking barriers for women in STEM fields.</p>`;
      }
    }
    
    return content;
  }

  createChallengesContent(pioneer) {
    const challenges = pioneer.detailed_description?.challenges;
    const barriers = pioneer.barriers;
    const challengesDetails = pioneer.challenges;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (challenges) {
      content += `<p><strong>Challenges:</strong> ${challenges}</p>`;
    }
    
    if (barriers && barriers.length > 0) {
      content += `<p><strong>Barriers Faced:</strong></p><ul>`;
      barriers.forEach(barrier => {
        content += `<li>${barrier}</li>`;
      });
      content += `</ul>`;
    }
    
    if (challengesDetails) {
      if (challengesDetails.academic && challengesDetails.academic.length > 0) {
        content += `<p><strong>Academic Challenges:</strong></p><ul>`;
        challengesDetails.academic.forEach(challenge => {
          content += `<li>${challenge}</li>`;
        });
        content += `</ul>`;
      }
      
      if (challengesDetails.professional && challengesDetails.professional.length > 0) {
        content += `<p><strong>Professional Challenges:</strong></p><ul>`;
        challengesDetails.professional.forEach(challenge => {
          content += `<li>${challenge}</li>`;
        });
        content += `</ul>`;
      }
      
      if (challengesDetails.how_overcame) {
        content += `<p><strong>How She Overcame:</strong> ${challengesDetails.how_overcame}</p>`;
      }
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      content = `<p>As a woman in ${fields.join(' and ')}, ${pioneer.name} faced the common challenges of her time, including limited educational opportunities and professional barriers. Her determination and talent helped her overcome these obstacles.</p>`;
    }
    
    return content;
  }

  createEducationContent(pioneer) {
    const education = pioneer.education;
    const educationDetails = pioneer.education_details;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (education && education.length > 0) {
      content += `<p><strong>Education:</strong></p><ul>`;
      education.forEach(edu => {
        content += `<li>${edu.degree} in ${edu.field} from ${edu.institution}</li>`;
      });
      content += `</ul>`;
    }
    
    if (educationDetails) {
      if (educationDetails.high_school) {
        content += `<p><strong>High School:</strong> ${educationDetails.high_school}</p>`;
      }
      if (educationDetails.college_major) {
        content += `<p><strong>College Major:</strong> ${educationDetails.college_major}</p>`;
      }
      if (educationDetails.key_courses && educationDetails.key_courses.length > 0) {
        content += `<p><strong>Key Courses:</strong> ${educationDetails.key_courses.join(', ')}</p>`;
      }
      if (educationDetails.study_tips) {
        content += `<p><strong>Study Tips:</strong> ${educationDetails.study_tips}</p>`;
      }
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      content = `<p>${pioneer.name} pursued education in ${fields.join(' and ')}, likely facing the educational barriers that many women of her time encountered. Her achievements demonstrate the importance of persistence in pursuing STEM education.</p>`;
    }
    
    return content;
  }

  createCareerContent(pioneer) {
    const careerPath = pioneer.career_path;
    const timeline = pioneer.timeline;
    const achievements = pioneer.achievements;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (careerPath) {
      if (careerPath.first_job) {
        content += `<p><strong>First Job:</strong> ${careerPath.first_job}</p>`;
      }
      if (careerPath.career_highlights && careerPath.career_highlights.length > 0) {
        content += `<p><strong>Career Highlights:</strong></p><ul>`;
        careerPath.career_highlights.forEach(highlight => {
          content += `<li>${highlight}</li>`;
        });
        content += `</ul>`;
      }
      if (careerPath.advice_for_students) {
        content += `<p><strong>Career Advice:</strong> ${careerPath.advice_for_students}</p>`;
      }
    }
    
    if (timeline && timeline.length > 0) {
      content += `<p><strong>Key Timeline:</strong></p>`;
      content += timeline.map(item => `
        <div class="timeline-item">
          <span class="timeline-year">${item.year}</span>
          <span class="timeline-event">${item.event}</span>
        </div>
      `).join("");
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      if (achievements && achievements.length > 0) {
        content = `<p><strong>Key Achievements:</strong></p><ul>`;
        achievements.forEach(achievement => {
          content += `<li>${achievement}</li>`;
        });
        content += `</ul>`;
      } else {
        content = `<p>${pioneer.name} built a distinguished career in ${fields.join(' and ')}, making significant contributions to her field and inspiring future generations of women in STEM.</p>`;
      }
    }
    
    return content;
  }

  createStudentResourcesContent(pioneer) {
    const studentResources = pioneer.student_resources;
    const mentorship = pioneer.mentorship;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (studentResources) {
      if (studentResources.books_for_students && studentResources.books_for_students.length > 0) {
        content += `<p><strong>📚 Books for Students:</strong></p><ul>`;
        studentResources.books_for_students.forEach(book => {
          content += `<li>${book}</li>`;
        });
        content += `</ul>`;
      }
      
      if (studentResources.websites && studentResources.websites.length > 0) {
        content += `<p><strong>🌐 Websites:</strong></p><ul>`;
        studentResources.websites.forEach(site => {
          content += `<li><a href="https://${site}" target="_blank" rel="noopener">${site}</a></li>`;
        });
        content += `</ul>`;
      }
      
      if (studentResources.programs && studentResources.programs.length > 0) {
        content += `<p><strong>🎓 Programs:</strong></p><ul>`;
        studentResources.programs.forEach(program => {
          content += `<li>${program}</li>`;
        });
        content += `</ul>`;
      }
      
      if (studentResources.advice) {
        content += `<p><strong>💡 Advice:</strong> ${studentResources.advice}</p>`;
      }
    }
    
    if (mentorship) {
      content += `<p><strong>🤝 Mentorship:</strong> ${mentorship}</p>`;
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      content = `<p><strong>💡 For Students:</strong> Explore ${fields.join(' and ')} through online courses, books, and mentorship programs. ${pioneer.name}'s story shows that persistence and curiosity can overcome any obstacle.</p>`;
    }
    
    return content;
  }

  createCulturalContent(pioneer) {
    const culturalBackground = pioneer.cultural_background;
    const personalInfo = pioneer.personal_info;
    const country = pioneer.country;
    
    let content = '';
    
    if (culturalBackground) {
      if (culturalBackground.heritage) {
        content += `<p><strong>Heritage:</strong> ${culturalBackground.heritage}</p>`;
      }
      if (culturalBackground.cultural_influences && culturalBackground.cultural_influences.length > 0) {
        content += `<p><strong>Cultural Influences:</strong> ${culturalBackground.cultural_influences.join(', ')}</p>`;
      }
      if (culturalBackground.cultural_challenges && culturalBackground.cultural_challenges.length > 0) {
        content += `<p><strong>Cultural Challenges:</strong></p><ul>`;
        culturalBackground.cultural_challenges.forEach(challenge => {
          content += `<li>${challenge}</li>`;
        });
        content += `</ul>`;
      }
      if (culturalBackground.cultural_contributions) {
        content += `<p><strong>Cultural Contributions:</strong> ${culturalBackground.cultural_contributions}</p>`;
      }
    }
    
    if (personalInfo) {
      if (personalInfo.personality_traits && personalInfo.personality_traits.length > 0) {
        content += `<p><strong>Personality Traits:</strong> ${personalInfo.personality_traits.join(', ')}</p>`;
      }
      if (personalInfo.hobbies && personalInfo.hobbies.length > 0) {
        content += `<p><strong>Hobbies:</strong> ${personalInfo.hobbies.join(', ')}</p>`;
      }
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      content = `<p>${pioneer.name} came from ${country || 'her home country'}, bringing unique cultural perspectives to her work in STEM. Her background influenced her approach to science and her contributions to her field.</p>`;
    }
    
    return content;
  }

  createModernImpactContent(pioneer) {
    const modernImpact = pioneer.modern_impact;
    const impact = pioneer.impact;
    const legacy = pioneer.detailed_description?.legacy;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (modernImpact) {
      if (modernImpact.current_applications) {
        content += `<p><strong>Current Applications:</strong> ${modernImpact.current_applications}</p>`;
      }
      if (modernImpact.companies_using_her_work && modernImpact.companies_using_her_work.length > 0) {
        content += `<p><strong>Companies Using Her Work:</strong></p><ul>`;
        modernImpact.companies_using_her_work.forEach(company => {
          content += `<li>${company}</li>`;
        });
        content += `</ul>`;
      }
      if (modernImpact.future_implications) {
        content += `<p><strong>Future Implications:</strong> ${modernImpact.future_implications}</p>`;
      }
    }
    
    if (impact) {
      content += `<p><strong>Impact:</strong> ${impact}</p>`;
    }
    
    if (legacy) {
      content += `<p><strong>Legacy:</strong> ${legacy}</p>`;
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      content = `<p>${pioneer.name}'s work in ${fields.join(' and ')} continues to influence modern science and technology. Her contributions paved the way for future generations of women in STEM and demonstrate the lasting impact of her research and discoveries.</p>`;
    }
    
    return content;
  }

  createPublicationsContent(pioneer) {
    const publications = pioneer.publications;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (publications && publications.length > 0) {
      content = '<ul>';
      publications.forEach(pub => {
        content += `<li>`;
        if (pub.title) {
          content += `<strong>${pub.title}</strong>`;
        }
        if (pub.year) {
          content += ` (${pub.year})`;
        }
        if (pub.url) {
          content += ` <a href="${pub.url}" target="_blank" rel="noopener">[Link]</a>`;
        }
        content += `</li>`;
      });
      content += '</ul>';
    } else {
      // If we have no detailed content, provide a basic description
      content = `<p>${pioneer.name} contributed to the field of ${fields.join(' and ')} through her research and discoveries. While specific publications may not be listed, her work has had a lasting impact on her field.</p>`;
    }
    
    return content;
  }

  createAwardsContent(pioneer) {
    const awards = pioneer.awards;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (awards && awards.length > 0) {
      content = '<ul>';
      awards.forEach(award => {
        content += `<li>${award}</li>`;
      });
      content += '</ul>';
    } else {
      // If we have no detailed content, provide a basic description
      content = `<p>${pioneer.name}'s contributions to ${fields.join(' and ')} have been recognized through her lasting impact on the field. Her work continues to inspire and influence future generations of scientists and researchers.</p>`;
    }
    
    return content;
  }

  createFunFactsContent(pioneer) {
    const funFact = pioneer.fun_fact;
    const personalInfo = pioneer.personal_info;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (funFact) {
      content += `<p><strong>Fun Fact:</strong> ${funFact}</p>`;
    }
    
    if (personalInfo && personalInfo.early_interests && personalInfo.early_interests.length > 0) {
      content += `<p><strong>Early Interests:</strong> ${personalInfo.early_interests.join(', ')}</p>`;
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      content = `<p><strong>Did You Know?</strong> ${pioneer.name} was a trailblazer in ${fields.join(' and ')}, showing that women can excel in any STEM field with determination and passion.</p>`;
    }
    
    return content;
  }

  createResourcesContent(pioneer) {
    const references = pioneer.references;
    const media = pioneer.media;
    const fields = pioneer.fields;
    
    let content = '';
    
    if (references && references.length > 0) {
      content += `<p><strong>References:</strong></p><div class="reference-links">`;
      references.forEach(ref => {
        content += `<a href="${ref.url}" target="_blank" rel="noopener" class="reference-link">
          <span>${ref.title || 'Learn More'}</span>
          <span class="link-icon">↗</span>
        </a>`;
      });
      content += `</div>`;
    }
    
    if (media && media.length > 0) {
      content += `<p><strong>Media:</strong></p><div class="reference-links">`;
      media.forEach(item => {
        content += `<a href="${item.url}" target="_blank" rel="noopener" class="reference-link">
          <span>${item.title || 'Learn More'}</span>
          <span class="link-icon">↗</span>
        </a>`;
      });
      content += `</div>`;
    }
    
    // If we have no detailed content, provide a basic description
    if (!content.trim()) {
      content = `<p><strong>Learn More:</strong> Explore ${pioneer.name}'s contributions to ${fields.join(' and ')} through books, documentaries, and online resources. Her story continues to inspire students and researchers worldwide.</p>`;
    }
    
    return content;
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
