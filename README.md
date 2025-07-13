# Female STEM Pioneers

A static web app celebrating women pioneers in STEM fields. Features:

- Gallery of 100+ female STEM pioneers with real images (photo, SVG, or symbolic) used wherever available; placeholders only as a last resort
- Search, filter, and sort by name, field, or era
- Responsive, accessible design with modern UI
- Deduplication: only unique pioneers by name are shown
- Easy to add new pioneers via `add-pioneer.js`
- **Comprehensive field explanations and filter options for all STEM fields represented in the data**
- **Codebase is auto-formatted and linted for consistency and quality**
- **Icon mapping system with diverse skin tone representation** (see `icon-mapping-demo.html`) - **CRITICAL**: Ensures inclusive representation when images are unavailable

## Current Metrics

- **Pioneers**: 78 profiles (and growing!)

## Getting Started

1. Clone the repo
2. Run a static server (e.g. `python3 -m http.server 8000`)
3. Open `http://localhost:8000` in your browser

## Icon Mapping System

The project includes an advanced icon mapping system that automatically assigns appropriate emoji icons to pioneers based on their fields and regional background:

- **Field-based mapping**: Computer Science → 👩‍💻 Technologist, Physics → 👩‍🔬 Scientist, etc.
- **Diverse skin tone representation**: Icons reflect the pioneer's regional background
- **Single Unicode characters**: Proper combining sequences for consistent display
- **Demo available**: See `icon-mapping-demo.html` for examples and implementation details

The system ensures inclusive representation across all skin tones and STEM fields. **This feature is critical for maintaining diverse representation when images fail to load or are unavailable.**

## Contributing

- Add new pioneers in `js/pioneers.js` or use `add-pioneer.js`
- Images go in the `images/` folder (photo, artistic, or symbolic SVG)
- **Only valid, non-empty images are accepted. Broken or empty images will be removed.**
- **All images must be Creative Commons licensed, public domain, or your own original work.**
- See `CONTRIBUTING.md` for details
- Remove any duplicate entries by name for clarity
- **Run linting and formatting tools before submitting changes.**

## Contributing Pioneer Profiles

We welcome contributions of new female STEM pioneers! To add a new pioneer:

1. **Open an Issue or Pull Request** using our templates (see the 'New Pioneer Profile' templates).
2. **Add your pioneer to `js/pioneers.js`** using the provided structure (see `add-pioneer.js` for a template).
3. **Include an image** in the `images/` folder (JPG, PNG, SVG preferred). If no real image is available, the diverse icon system will automatically provide appropriate fallback icons.
4. **Provide a short, engaging description** for students.
5. **Ensure images are properly licensed** (Creative Commons, public domain, or your own work).
6. **Run linting and formatting tools before submitting.**

**🖼️ Image Licensing**: All images must be Creative Commons licensed, public domain, or your own original work. We do not accept copyrighted images without proper licensing. If no real image is available, the diverse icon system will provide appropriate fallback representation. See [CONTRIBUTING.md](CONTRIBUTING.md) for full details.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details and field explanations.

---

## License

Content and code are licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). See LICENSE for details.
