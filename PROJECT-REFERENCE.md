# Female STEM Pioneers Project Reference

This project is a static web app that celebrates and highlights WOMEN pioneers in STEM (Science, Technology, Engineering, and Mathematics) fields. It features:

- A searchable, filterable, and sortable gallery of FEMALE STEM pioneers only
- Individual info cards with biography, achievements, quotes, fun facts, and inspirational resources
- Modern, responsive UI with category badges, section highlights, and accessible design
- Images for each female pioneer (photo, artistic, or symbolic if no photo exists)
- Data-driven: all pioneer info is managed in `js/pioneers.js` (currently 81 unique pioneers)
- Easy to add new FEMALE pioneers via `add-pioneer.js`
- Automatic deduplication: only the first occurrence of each pioneer (by name) is used in the UI
- **All STEM fields in the data have explanations and filter options in the UI.**
- **Codebase is auto-formatted and linted for consistency and quality.**

The project is specifically designed to showcase and celebrate WOMEN'S contributions to STEM fields, suitable for educational, outreach, and inspirational purposes focused on female representation in science and technology.

## Image Management

### Image Requirements

- All pioneer images should be placed in the `images/` directory
- Use `.jpg` or `.png` format for photos, `.svg` for icons/symbols
- Image filenames should match the pioneer's name (e.g., `ada-lovelace.jpg`)
- For pioneers without available photos, use field-specific SVG icons (e.g., chemistry flask for chemists, π symbol for mathematicians)
- If neither a photo nor a field icon is available, a default SVG placeholder is shown
- **Do not add empty or broken image files. These will be removed.**

### Commit Requirements

- **ALWAYS commit new images to git** when adding them to the project
- Images must be committed before the site will display them properly
- Use `git add images/*.jpg images/*.png images/*.svg` to add all image files
- Commit with descriptive messages like "Add pioneer images" or "Add field-specific icons"

### Image Guidelines

- Prefer public domain or properly licensed images
- For historical figures without photos, create meaningful field-specific SVG icons
- Ensure images are appropriately sized and optimized for web use
- Test that images load correctly in the browser after committing

## Data Deduplication

- The dataset automatically removes duplicate pioneers by name at runtime. Only the first occurrence is shown in the UI.
- For clarity and maintainability, remove duplicates from `js/pioneers.js` when possible.

## Code Formatting & Linting

- The codebase uses ESLint and Prettier for consistent formatting and code quality.
- Run `npx eslint . --fix` and `npx prettier --write .` before submitting changes.
- Keep documentation and field explanations up to date with data changes.
