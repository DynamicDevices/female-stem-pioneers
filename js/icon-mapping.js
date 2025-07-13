/**
 * Diverse Women in STEM Icon Mapping System
 * Maps pioneer metadata to appropriate emoji icons with skin tone diversity
 * Uses Fitzpatrick scale skin tone modifiers: 🏻 🏼 🏽 🏾 🏿
 */

const IconMapping = {
    // Base emoji icons for different STEM fields (without skin tone)
    baseIcons: {
        scientist: "👩‍🔬",      // Lab coat and microscope
        technologist: "👩‍💻",    // Laptop/computer
        engineer: "👩‍🏭",        // Factory worker/engineer
        astronaut: "👩‍🚀",       // Space suit
        doctor: "👩‍⚕️",         // Health worker/doctor
        professor: "👩‍🏫",       // Teacher/professor
        mathematician: "👩‍🎓",   // Graduate student/scholar
        inventor: "👩‍🔧"         // Mechanic/inventor
    },

    // Pre-combined icons with skin tones (proper Unicode sequences)
    iconsWithSkinTones: {
        scientist: {
            light: "👩🏻‍🔬",
            mediumLight: "👩🏼‍🔬", 
            medium: "👩🏽‍🔬",
            mediumDark: "👩🏾‍🔬",
            dark: "👩🏿‍🔬"
        },
        technologist: {
            light: "👩🏻‍💻",
            mediumLight: "👩🏼‍💻",
            medium: "👩🏽‍💻", 
            mediumDark: "👩🏾‍💻",
            dark: "👩🏿‍💻"
        },
        engineer: {
            light: "👩🏻‍🏭",
            mediumLight: "👩🏼‍🏭",
            medium: "👩🏽‍🏭",
            mediumDark: "👩🏾‍🏭", 
            dark: "👩🏿‍🏭"
        },
        astronaut: {
            light: "👩🏻‍🚀",
            mediumLight: "👩🏼‍🚀",
            medium: "👩🏽‍🚀",
            mediumDark: "👩🏾‍🚀",
            dark: "👩🏿‍🚀"
        },
        doctor: {
            light: "👩🏻‍⚕️",
            mediumLight: "👩🏼‍⚕️",
            medium: "👩🏽‍⚕️",
            mediumDark: "👩🏾‍⚕️",
            dark: "👩🏿‍⚕️"
        },
        professor: {
            light: "👩🏻‍🏫",
            mediumLight: "👩🏼‍🏫",
            medium: "👩🏽‍🏫",
            mediumDark: "👩🏾‍🏫",
            dark: "👩🏿‍🏫"
        },
        mathematician: {
            light: "👩🏻‍🎓",
            mediumLight: "👩🏼‍🎓",
            medium: "👩🏽‍🎓",
            mediumDark: "👩🏾‍🎓",
            dark: "👩🏿‍🎓"
        },
        inventor: {
            light: "👩🏻‍🔧",
            mediumLight: "👩🏼‍🔧",
            medium: "👩🏽‍🔧",
            mediumDark: "👩🏾‍🔧",
            dark: "👩🏿‍🔧"
        }
    },

    // Field mappings to determine appropriate icon
    fieldMappings: {
        // Biology and Life Sciences
        biology: "scientist",
        biochemistry: "scientist",
        molecular_biology: "scientist",
        genetics: "scientist",
        microbiology: "scientist",
        botany: "scientist",
        zoology: "scientist",
        ecology: "scientist",
        environmental_science: "scientist",
        
        // Chemistry
        chemistry: "scientist",
        organic_chemistry: "scientist",
        inorganic_chemistry: "scientist",
        physical_chemistry: "scientist",
        analytical_chemistry: "scientist",
        
        // Physics and Astronomy
        physics: "scientist",
        astrophysics: "astronaut",
        nuclear_physics: "scientist",
        quantum_physics: "scientist",
        theoretical_physics: "scientist",
        experimental_physics: "scientist",
        optics: "scientist",
        acoustics: "scientist",
        mechanics: "scientist",
        thermodynamics: "scientist",
        relativity: "scientist",
        particle_physics: "scientist",
        condensed_matter: "scientist",
        plasma_physics: "scientist",
        astronomy: "astronaut",
        cosmology: "astronaut",
        planetary_science: "astronaut",
        space_exploration: "astronaut",
        satellite_technology: "astronaut",
        
        // Mathematics
        mathematics: "mathematician",
        pure_mathematics: "mathematician",
        applied_mathematics: "mathematician",
        statistics: "mathematician",
        number_theory: "mathematician",
        algebra: "mathematician",
        geometry: "mathematician",
        calculus: "mathematician",
        
        // Computer Science and Technology
        computer_science: "technologist",
        software_engineering: "technologist",
        artificial_intelligence: "technologist",
        machine_learning: "technologist",
        data_science: "technologist",
        cybersecurity: "technologist",
        programming: "technologist",
        algorithms: "technologist",
        computer_vision: "technologist",
        
        // Engineering
        mechanical_engineering: "engineer",
        electrical_engineering: "engineer",
        civil_engineering: "engineer",
        chemical_engineering: "engineer",
        aerospace_engineering: "astronaut",
        biomedical_engineering: "engineer",
        industrial_engineering: "engineer",
        structural_engineering: "engineer",
        environmental_engineering: "engineer",
        
        // Medicine and Healthcare
        medicine: "doctor",
        medical_research: "doctor",
        pharmacology: "doctor",
        neuroscience: "doctor",
        immunology: "doctor",
        epidemiology: "doctor",
        public_health: "doctor",
        nursing: "doctor",
        dentistry: "doctor",
        
        // Education and Academia
        education: "professor",
        teaching: "professor",
        research: "professor",
        academia: "professor",
        university: "professor",
        
        // Innovation and Invention
        invention: "inventor",
        innovation: "inventor",
        patents: "inventor",
        technology_development: "inventor",
        product_development: "inventor"
    },

    // Era-based skin tone distribution (historical representation)
    eraSkinToneMapping: {
        // Ancient to 1800s - more diverse representation
        ancient: "mediumDark",
        medieval: "mediumDark", 
        renaissance: "medium",
        "1700s": "mediumLight",
        "1800s": "mediumLight",
        
        // 1900s - increasing diversity
        "1900s": "medium",
        "1910s": "medium",
        "1920s": "medium",
        "1930s": "medium",
        "1940s": "medium",
        "1950s": "medium",
        "1960s": "medium",
        "1970s": "medium",
        "1980s": "medium",
        "1990s": "medium",
        
        // 2000s onwards - full diversity
        "2000s": "light",
        "2010s": "light",
        "2020s": "light"
    },

    // Geographic region skin tone preferences
    regionSkinToneMapping: {
        // Africa
        africa: "dark",
        nigeria: "dark",
        kenya: "dark",
        south_africa: "dark",
        ghana: "dark",
        ethiopia: "dark",
        
        // Asia
        asia: "medium",
        china: "medium",
        japan: "light",
        india: "mediumDark",
        korea: "light",
        vietnam: "medium",
        thailand: "medium",
        philippines: "medium",
        
        // Middle East
        middle_east: "mediumDark",
        iran: "mediumDark",
        iraq: "mediumDark",
        lebanon: "medium",
        syria: "mediumDark",
        
        // Europe
        europe: "light",
        uk: "light",
        france: "light",
        germany: "light",
        italy: "mediumLight",
        spain: "mediumLight",
        poland: "light",
        russia: "light",
        
        // Americas
        north_america: "mediumLight",
        usa: "mediumLight",
        canada: "mediumLight",
        mexico: "mediumDark",
        
        south_america: "mediumDark",
        brazil: "mediumDark",
        argentina: "mediumLight",
        colombia: "mediumDark",
        peru: "mediumDark",
        
        // Oceania
        australia: "mediumLight",
        new_zealand: "mediumLight"
    },

    /**
     * Get the most appropriate icon for a pioneer based on their metadata
     * @param {Object} pioneer - Pioneer object with metadata
     * @returns {string} - Emoji icon with appropriate skin tone
     */
    getIconForPioneer(pioneer) {
        // Determine the base icon type from field
        const field = this.getPrimaryField(pioneer);
        const iconType = this.fieldMappings[field] || "scientist";
        
        // Determine skin tone based on era and region
        const skinTone = this.getSkinTone(pioneer);
        
        // Return the pre-combined icon with skin tone
        return this.iconsWithSkinTones[iconType][skinTone];
    },

    /**
     * Extract primary field from pioneer metadata
     * @param {Object} pioneer - Pioneer object
     * @returns {string} - Primary field
     */
    getPrimaryField(pioneer) {
        if (!pioneer.fields || pioneer.fields.length === 0) {
            return "scientist"; // Default fallback
        }
        
        // Get the first field and normalize it
        const primaryField = pioneer.fields[0].toLowerCase()
            .replace(/\s+/g, '_')
            .replace(/[^a-z_]/g, '');
            
        return primaryField;
    },

    /**
     * Determine appropriate skin tone based on era and region
     * @param {Object} pioneer - Pioneer object
     * @returns {string} - Skin tone key
     */
    getSkinTone(pioneer) {
        // Check if pioneer has specific region data
        if (pioneer.region) {
            const regionKey = pioneer.region.toLowerCase().replace(/\s+/g, '_');
            if (this.regionSkinToneMapping[regionKey]) {
                return this.regionSkinToneMapping[regionKey];
            }
        }
        
        // Check era-based mapping
        if (pioneer.birthYear) {
            const era = this.getEraFromYear(pioneer.birthYear);
            if (this.eraSkinToneMapping[era]) {
                return this.eraSkinToneMapping[era];
            }
        }
        
        // Default to medium skin tone for balanced representation
        return "medium";
    },

    /**
     * Get era from birth year
     * @param {number} birthYear - Birth year
     * @returns {string} - Era string
     */
    getEraFromYear(birthYear) {
        if (birthYear < 1800) return "1700s";
        if (birthYear < 1900) return "1800s";
        if (birthYear < 2000) return "1900s";
        return "2000s";
    },

    /**
     * Get all available icons with all skin tones for testing
     * @returns {Object} - All icons with all skin tones
     */
    getAllIconsWithSkinTones() {
        return this.iconsWithSkinTones;
    },

    /**
     * Get a random diverse icon for variety
     * @returns {string} - Random icon with random skin tone
     */
    getRandomDiverseIcon() {
        const iconTypes = Object.keys(this.iconsWithSkinTones);
        const skinToneTypes = ["light", "mediumLight", "medium", "mediumDark", "dark"];
        
        const randomIconType = iconTypes[Math.floor(Math.random() * iconTypes.length)];
        const randomSkinTone = skinToneTypes[Math.floor(Math.random() * skinToneTypes.length)];
        
        return this.iconsWithSkinTones[randomIconType][randomSkinTone];
    },

    /**
     * Get base icon without skin tone
     * @param {string} iconType - Type of icon
     * @returns {string} - Base emoji icon
     */
    getBaseIcon(iconType) {
        return this.baseIcons[iconType] || this.baseIcons.scientist;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IconMapping;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.IconMapping = IconMapping;
} 