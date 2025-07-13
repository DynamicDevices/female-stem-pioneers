# IMPORTANT: Do Not Corrupt JavaScript Syntax

When making changes to any JavaScript files in this project (especially `js/pioneers.js`), ensure that you do not introduce syntax errors or corrupt the file structure. Always:
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
- **Pioneer Data:** All pioneer profiles are in `js/pioneers.js` as JavaScript objects in an array.
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
- **Always check for duplicates** before adding a new pioneer (search `js/pioneers.js` for the name).
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
- `js/pioneers.js` – Pioneer data (edit/add here)
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

### JavaScript File Safety (Especially `js/pioneers.js`)
- **ALWAYS run `npm run check-syntax` after any edits** to verify JavaScript validity
- **ALWAYS run `npm run check-duplicates`** after adding or modifying pioneer entries
- **Use precise text replacement** rather than automated scripts when editing complex JSON structures
- **The file now contains helpful comments** at the top and bottom with editing guidelines
- **Each pioneer object must be complete** with all required fields and proper JSON structure
- **The last object in the array ends with `}` (no trailing comma)**
- **If corruption occurs, restore from git history:** `git show <commit-hash>:js/pioneers.js > js/pioneers.js`

### Duplicate Prevention
- **Check for duplicates before adding new pioneers** using `npm run check-duplicates`
- **Search for exact names** in `js/pioneers.js` before adding entries
- **When removing duplicates, use precise text replacement** with exact boundaries
- **Verify syntax and structure after any duplicate removal**

### File Structure Guidelines
- **The pioneers array starts with `const pioneers = [` and ends with `];`**
- **Each pioneer object starts with `{` and ends with `},` (except the last one)**
- **Maintain proper indentation and JSON structure**
- **The file includes comprehensive comments** explaining the structure and editing guidelines

### Recovery Procedures
- **If syntax errors occur:** Restore from a clean git commit using `git show <commit-hash>:js/pioneers.js > js/pioneers.js`
- **If duplicates are found:** Use precise text replacement to remove specific duplicate entries
- **Always test after recovery:** Run both syntax and duplicate checks

### Version Management
- **Update version in `package.json`** before committing major changes
- **Use descriptive commit messages** that explain what was changed and why
- **Test thoroughly before pushing** to avoid breaking the live site

---

*This reference is for AI use only. It is not a contributor guide, but a context file to ensure the assistant can continue, maintain, and enhance the project seamlessly in any new chat session.*