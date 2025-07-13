# IMPORTANT: Do Not Corrupt JavaScript Syntax

When editing JavaScript files (especially `js/pioneers/`), ensure valid syntax. Run `npm run check-syntax` after edits.

---

# Project Context (AI Assistant Use)

## Purpose
Static web app showcasing women STEM pioneers with rich metadata, images/fallback icons, and educational content.

## Core Structure
- **Pioneer Data:** Individual JSON files in `js/pioneers/` directory
  - Each pioneer: `js/pioneers/pioneer-name.json`
  - Index: `js/pioneers/index.json` (source of truth for duplicates)
  - Loader: `js/pioneers-loader.js` dynamically loads files
  - Fields: `name`, `photo`, `birthDate`, `deathDate`, `country`, `fields`, `roles`, `quote`, `summary`, `shortDescription`, `achievements`, `awards`, `publications`, `education`, `timeline`, `barriers`, `impact`, `media`, `references`, `mentorship`, `fun_fact`, `career_path`, `student_resources`, `challenges`, `education_details`, `modern_impact`, `personal_info`, `cultural_background`
  - **No duplicate keys.** All fields as arrays/objects. Short, engaging descriptions for students.

- **Images:** Creative Commons/public domain only. Fallback icons via `js/icon-mapping.js` (diverse skin tones).

## UI & Functionality
- **Collapsible Info Cards:** 13+ sections per pioneer with metadata or meaningful fallbacks
- **Accessibility:** Readable, keyboard navigable, mobile-first responsive design

## Rules for Adding/Editing Pioneers
- **Check duplicates** in `js/pioneers/index.json` before adding
- **Create individual JSON files** in `js/pioneers/` directory
- **Update index.json** when adding new pioneers
- **Follow full metadata structure** as in latest entries
- **Provide meaningful fallbacks** (no placeholders)
- **Fact-check information** for lesser-known pioneers
- **Label BC dates** explicitly (e.g., "370 BC")
- **Women/nonbinary STEM pioneers only**
- **Ensure diversity** in skin tones, ages, backgrounds

## Key Files
- `index.html` – Main page
- `css/styles.css` – Styles
- `js/app.js` – App logic
- `js/pioneers-loader.js` – Dynamic pioneer loader
- `js/pioneers/` – Individual pioneer JSON files
- `js/pioneers/index.json` – Index of all pioneers
- `js/icon-mapping.js` – Fallback icon logic
- `images/` – Pioneer images

## Deployment & Testing
- **Static site:** `python3 -m http.server 8001`
- **CI/CD:** GitHub Actions auto-deploys to GitHub Pages
- **UI Tests:** Playwright tests cover homepage, cards, expand/collapse, search, filters, responsive design
- **Validation:** `npm run validate-data`, `npm run check-duplicates`, `npm test`

## Critical Learnings

### Safe File Editing
- **Validate JSON syntax** after editing pioneer files
- **Run `npm run check-duplicates`** after modifications
- **Use precise text replacement** for complex JSON structures
- **Update index.json** when adding pioneers
- **Restore from git** if corruption: `git show <commit-hash>:js/pioneers/pioneer-name.json > js/pioneers/pioneer-name.json`

### Migration Success (v2.0.0+)
- **COMPLETED:** Migrated from monolithic `pioneers.js`/`pioneers2.js` to individual JSON files
- **COMPLETED:** Implemented `js/pioneers-loader.js` for dynamic loading
- **COMPLETED:** Fixed `js/app.js` initialization (was looking for `window.pioneers`, now uses direct initialization)
- **COMPLETED:** Cleaned up old files, updated all references

### App Initialization Pattern
```javascript
// CORRECT: Direct initialization
document.addEventListener("DOMContentLoaded", () => {
  window.pioneersApp = new PioneersApp();
});

// OLD (BROKEN): Was waiting for window.pioneers
document.addEventListener("DOMContentLoaded", () => {
  if (window.pioneers && window.pioneers.length > 0) {
    window.pioneersApp = new PioneersApp();
  }
});
```

### System Benefits
- **Performance:** Individual files load faster than monolithic files
- **Maintainability:** Each pioneer in separate file, safer editing
- **Scalability:** Easy to add new pioneers without affecting existing ones
- **Version Control:** Better git diffs and conflict resolution
- **Memory Usage:** Reduced footprint, loads only needed data

### Validation Results
- **107 pioneers** load successfully from individual JSON files
- **All files return HTTP 200** status
- **Images load correctly** with proper fallback system
- **Search, filtering, sorting** work with new system
- **No console errors** in browser developer tools

## AI Instructions
- **Automate:** Perform all steps without asking unless problem cannot be fixed
- **Summarize progress** after major changes
- **Research and correct** errors/inaccuracies immediately
- **Fill missing content** with best available data or informative fallbacks

---

*This reference is for AI use only. It is not a contributor guide, but a context file to ensure the assistant can continue, maintain, and enhance the project seamlessly in any new chat session.*