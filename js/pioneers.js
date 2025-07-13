// Women Pioneers in STEM - Data File
// This file contains profiles of women who have made significant contributions to STEM fields

// Remove duplicates by name
const seen = new Set();
const uniquePioneers = pioneers.filter(p => {
  if (seen.has(p.name)) return false;
  seen.add(p.name);
  return true;
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = uniquePioneers;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
  window.pioneers = uniquePioneers;
} 