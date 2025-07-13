# IMPORTANT: Do Not Corrupt JavaScript Syntax

When making changes to any JavaScript files in this project (especially `js/pioneers/` directory), ensure that you do not introduce syntax errors or corrupt the file structure. Always:
- Double-check for valid brackets, braces, and array/object structure
- Avoid duplicate variable declarations (e.g., `const pioneers = [`)
- Run `npm run check-syntax` after any edits to verify the file is still valid JavaScript
- If using scripts to modify files, review the output and test the result

Corrupting the JavaScript will break the site and data tools. Please be careful and validate your changes!

---

# project-context.md (for AI Assistant Use)

## Project Purpose
A static web app that showcases women pioneers in STEM. Each profile includes rich metadata, images or diverse fallback icons, and educational content for students.

## Core Data & Structure
- **Pioneer Data:** All pioneer profiles are now stored as individual JSON files in `js/pioneers/` directory.
  - Each pioneer has its own file: `js/pioneers/pioneer-name.json`
  - An index file `js/pioneers/index.json` contains the list of all pioneers
  - The `js/pioneers-loader.js` dynamically loads all pioneer files
  - Each object includes: `name`, `photo`, `birthDate`, `deathDate`, `country`, `fields`, `roles`, `quote`, `summary`, `shortDescription`, `detailed_description`, `achievements`, `awards`, `publications`, `education`, `timeline`, `barriers`, `impact`, `media`, `references`, `mentorship`, `fun_fact`, `career_path`, `student_resources`, `challenges`, `education_details`, `modern_impact`, `personal_info`, `cultural_background`.
  - **No duplicate keys** in any object. All fields should be arrays or objects as per recent entries.
  - **Descriptions** must be short, engaging, and accessible for students.
  - **"Learn more" links** should be included in `publications` or `references`.

- **Images:** Use only Creative Commons or public domain images (in `images/`). If not available, use the fallback icon system.

- **Fallback Icons:** 
  - Logic in `js/icon-mapping.js`.
  - Icon is chosen based on field, region, and era, with diverse skin tones.
  - If no image, set `photo` to a fallback icon path or let the app auto-select.

## UI & Functionality
- **Collapsible Info Cards:** Each pioneer card has 13+ collapsible sections, each populated with relevant metadata or a meaningful fallback if data is missing.
- **Accessibility:** All content must be readable, keyboard navigable, and visually accessible.
- **Mobile-First:** Layout and cards must be responsive.

## Rules for Adding/Editing Pioneers (AI-Specific)
- **Always check for duplicates** before adding a new pioneer (check `js/pioneers/index.json` for the name).
- **Create individual JSON files** for new pioneers in `js/pioneers/` directory.
- **Update the index file** `js/pioneers/index.json` when adding new pioneers.
- **Follow the full metadata structure** as in the latest entries.
- **If a field is missing data,** provide a meaningful fallback (never leave placeholders like "content is being generated").
- **Fact-check all information,** especially for lesser-known pioneers.
- **Explicitly label BC dates** (e.g., "370 BC").
- **No male pioneers.** Only women or nonbinary STEM pioneers.
- **Diversity:** Ensure a range of skin tones, ages, and backgrounds in icons and content.

## File Map (AI Should Know)
- `index.html` – Main page
- `css/styles.css` – Styles
- `js/app.js` – App logic
- `js/pioneers-loader.js` – Dynamic pioneer loader
- `js/pioneers/` – Directory containing individual pioneer JSON files
- `js/pioneers/index.json` – Index of all pioneers
- `js/icon-mapping.js` – Fallback icon logic
- `images/` – Pioneer images
- `icons/` – App icons

## Deployment & Testing
- **Static site:** Runs on any static server (e.g., `python3 -m http.server 8001`).
- **CI/CD:** GitHub Actions auto-deploys to GitHub Pages.
- **Test:** After changes, verify no placeholders remain and all sections display meaningful content.

## Special AI Instructions
- **Automate:** Perform all steps (checking, editing, verifying) without asking for user input unless a problem cannot be fixed automatically.
- **Summarize progress** after major batches of changes.
- **If a user reports an error or inaccuracy,** research and correct it immediately.
- **If a section is missing content,** fill it with the best available data or a relevant, informative fallback.

## Critical Learnings: Safe File Editing (v1.6.0+)

### JavaScript File Safety (Especially Individual Pioneer Files)
- **ALWAYS validate JSON syntax** after creating or editing individual pioneer files
- **ALWAYS run `npm run check-duplicates`** after adding or modifying pioneer entries
- **Use precise text replacement** rather than automated scripts when editing complex JSON structures
- **Each pioneer JSON file must be complete** with all required fields and proper JSON structure
- **Update the index file** `js/pioneers/index.json` when adding new pioneers
- **If corruption occurs, restore from git history:** `git show <commit-hash>:js/pioneers/pioneer-name.json > js/pioneers/pioneer-name.json`

### Duplicate Prevention
- **Check for duplicates before adding new pioneers** using `npm run check-duplicates`
- **Search for exact names** in `js/pioneers/index.json` before adding entries
- **When removing duplicates, delete the individual JSON file** and update the index
- **Verify syntax and structure after any duplicate removal**

### File Structure Guidelines
- **Each pioneer has its own JSON file** in `js/pioneers/pioneer-name.json`
- **The index file** `js/pioneers/index.json` contains the list of all pioneers
- **Maintain proper indentation and JSON structure** in each individual file
- **Use the pioneers loader** `js/pioneers-loader.js` to dynamically load all pioneers

### Recovery Procedures
- **If syntax errors occur:** Restore from a clean git commit using `git show <commit-hash>:js/pioneers/pioneer-name.json > js/pioneers/pioneer-name.json`
- **If duplicates are found:** Delete the duplicate JSON file and update the index
- **Always test after recovery:** Run both syntax and duplicate checks

### Version Management
- **Update version in `package.json`** before committing major changes
- **Use descriptive commit messages** that explain what was changed and why
- **Test thoroughly before pushing** to avoid breaking the live site

## Migration Success: Modular System Implementation (v2.0.0+)

### Successful Migration from Monolithic to Modular System
- **COMPLETED:** Successfully migrated from large `pioneers.js` (698KB) and `pioneers2.js` (103KB) files to individual JSON files
- **COMPLETED:** Implemented `js/pioneers-loader.js` for dynamic loading of individual pioneer files
- **COMPLETED:** Updated `js/app.js` initialization to work with new modular system
- **COMPLETED:** Cleaned up all old files and updated all references

### Key Migration Learnings
- **App Initialization Fix:** The critical issue was in `js/app.js` initialization - it was still looking for `window.pioneers` instead of using the new `window.pioneersLoader` system
- **Service Worker Updates:** Updated `sw.js` to cache `index.json` instead of the old monolithic files
- **Package.json Scripts:** Updated all npm scripts to work with the new modular system
- **Documentation Updates:** All README, CONTRIBUTING, and GitHub templates updated to reference new structure

### System Architecture Benefits
- **Performance:** Individual JSON files load faster than large monolithic files
- **Maintainability:** Each pioneer is in its own file, making editing safer
- **Scalability:** Easy to add new pioneers without affecting existing ones
- **Version Control:** Better git diffs and conflict resolution
- **Memory Usage:** Reduced memory footprint by loading only needed data

### Critical App Initialization Pattern
```javascript
// CORRECT: New modular system initialization
document.addEventListener("DOMContentLoaded", () => {
  window.pioneersApp = new PioneersApp(); // Direct initialization
});

// OLD (BROKEN): Was waiting for window.pioneers
document.addEventListener("DOMContentLoaded", () => {
  if (window.pioneers && window.pioneers.length > 0) {
    window.pioneersApp = new PioneersApp();
  }
});
```

### File Cleanup Results
- **Removed 801KB** of old monolithic files
- **Deleted 12 unnecessary files** (scripts, helpers, temporary files)
- **Updated 8 documentation files** to reference new system
- **Zero broken references** - all links and scripts updated

### Validation and Testing
- **All 107 pioneers** load successfully from individual JSON files
- **Server logs confirm** all files returning HTTP 200 status
- **Images load correctly** with proper fallback system
- **Search, filtering, and sorting** all work with new system
- **No console errors** in browser developer tools

### Future Development Guidelines
- **Always use individual JSON files** in `js/pioneers/` directory
- **Update index.json** when adding new pioneers
- **Test with live server** to ensure pioneers load correctly
- **Use `npm run check-duplicates`** before committing changes
- **Follow the established metadata structure** for consistency

---

*This reference is for AI use only. It is not a contributor guide, but a context file to ensure the assistant can continue, maintain, and enhance the project seamlessly in any new chat session.*