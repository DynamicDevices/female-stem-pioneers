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

---

*This reference is for AI use only. It is not a contributor guide, but a context file to ensure the assistant can continue, maintain, and enhance the project seamlessly in any new chat session.*