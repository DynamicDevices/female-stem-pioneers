# Female STEM Pioneers

A static web app celebrating women pioneers in STEM fields. Features:

- Gallery of 100+ female STEM pioneers with real images (photo, SVG, or symbolic) used wherever available; placeholders only as a last resort
- Search, filter, and sort by name, field, or era
- Responsive, accessible design with modern UI
- Deduplication: only unique pioneers by name are shown
- Easy to add new pioneers via `add-pioneer.js`
- **Comprehensive field explanations and filter options for all STEM fields represented in the data**
- **Codebase is auto-formatted and linted for consistency and quality**

## Current Metrics

- **Pioneers**: 100+ profiles

## Getting Started

1. Clone the repo
2. Run a static server (e.g. `python3 -m http.server 8000`)
3. Open `http://localhost:8000` in your browser

## Contributing

- Add new pioneers in `js/pioneers.js` or use `add-pioneer.js`
- Images go in the `images/` folder (photo, artistic, or symbolic SVG)
- **Only valid, non-empty images are accepted. Broken or empty images will be removed.**
- See `CONTRIBUTING.md` for details
- Remove any duplicate entries by name for clarity
- **Run linting and formatting tools before submitting changes.**

## Contributing Pioneer Profiles

We welcome contributions of new female STEM pioneers! To add a new pioneer:

1. **Open an Issue or Pull Request** using our templates (see the 'New Pioneer Profile' templates).
2. **Add your pioneer to `js/pioneers.js`** using the provided structure (see `add-pioneer.js` for a template).
3. **Include an image** in the `images/` folder (JPG, PNG, SVG preferred; use a placeholder only if no real image is available).
4. **Provide a short, engaging description** for students.
5. **Run linting and formatting tools before submitting.**

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details and field explanations.

---

## License

Content and code are licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). See LICENSE for details.
