# Female STEM Pioneers

A static web app celebrating women pioneers in STEM fields. Features:

- **Gallery of 107 female STEM pioneers** with real images (photo, SVG, or symbolic) used wherever available; placeholders only as a last resort
- **Modular JSON system** - Each pioneer has their own file for easy maintenance and scalability
- Search, filter, and sort by name, field, or era
- Responsive, accessible design with modern UI
- Deduplication: only unique pioneers by name are shown
- **Comprehensive field explanations and filter options for all STEM fields represented in the data**
- **Codebase is auto-formatted and linted for consistency and quality**
- **Icon mapping system with diverse skin tone representation** (see `icon-mapping-demo.html`) - **CRITICAL**: Ensures inclusive representation when images are unavailable
- **Modern UI with enhanced tooltips** - Beautiful purple gradient tooltips with rounded design and no scrollbars

## Current Metrics

- **Pioneers**: 107 profiles (and growing!)
- **Fields**: 25+ STEM fields represented
- **Countries**: 30+ countries represented
- **Time Period**: From ancient times to modern day

## Getting Started

1. Clone the repo
2. Run a static server (e.g. `python3 -m http.server 8000`)
3. Open `http://localhost:8000` in your browser

## System Architecture

The project uses a **modular JSON system** for optimal performance and maintainability:

- **Individual Pioneer Files**: Each pioneer has their own JSON file in `js/pioneers/`
- **Dynamic Loading**: `js/pioneers-loader.js` loads all pioneer files asynchronously
- **Index System**: `js/pioneers/index.json` contains the list of all pioneers
- **Performance**: Individual files load faster than large monolithic files
- **Scalability**: Easy to add new pioneers without affecting existing ones

## Icon Mapping System

The project includes an advanced icon mapping system that automatically assigns appropriate emoji icons to pioneers based on their fields and regional background:

- **Field-based mapping**: Computer Science → 👩‍💻 Technologist, Physics → 👩‍🔬 Scientist, etc.
- **Diverse skin tone representation**: Icons reflect the pioneer's regional background
- **Single Unicode characters**: Proper combining sequences for consistent display
- **Demo available**: See `icon-mapping-demo.html` for examples and implementation details

The system ensures inclusive representation across all skin tones and STEM fields. **This feature is critical for maintaining diverse representation when images fail to load or are unavailable.**

## Contributing

- Add new pioneers in `js/pioneers/` directory using individual JSON files
- Images go in the `images/` folder (photo, artistic, or symbolic SVG)
- **Only valid, non-empty images are accepted. Broken or empty images will be removed.**
- **All images must be Creative Commons licensed, public domain, or your own original work.**
- See `CONTRIBUTING.md` for details
- Remove any duplicate entries by name for clarity
- **Run linting and formatting tools before submitting changes.**

## Contributing Pioneer Profiles

We welcome contributions of new female STEM pioneers! To add a new pioneer:

1. **Open an Issue or Pull Request** using our templates (see the 'New Pioneer Profile' templates).
2. **Add your pioneer to `js/pioneers/`** using the provided structure (see existing JSON files for a template).
3. **Include an image** in the `images/` folder (JPG, PNG, SVG preferred). If no real image is available, the diverse icon system will automatically provide appropriate fallback icons.
4. **Provide a short, engaging description** for students.
5. **Ensure images are properly licensed** (Creative Commons, public domain, or your own work).
6. **Run linting and formatting tools before submitting.**

**🖼️ Image Licensing**: All images must be Creative Commons licensed, public domain, or your own original work. We do not accept copyrighted images without proper licensing. If no real image is available, the diverse icon system will provide appropriate fallback representation. See [CONTRIBUTING.md](CONTRIBUTING.md) for full details.

## Development

### Available Scripts
- `npm start` - Start local development server
- `npm run check-duplicates` - Check for duplicate pioneer entries
- `npm run validate-data` - Validate all pioneer JSON files
- `npm run check-images` - Verify all image files exist
- `npm run lint` - Run ESLint on JavaScript files
- `npm run check-syntax` - Check JavaScript syntax

### File Structure
```
js/
├── app.js                 # Main application logic
├── pioneers-loader.js     # Dynamic pioneer loading system
├── icon-mapping.js       # Fallback icon system
└── pioneers/             # Individual pioneer JSON files
    ├── index.json        # List of all pioneers
    ├── ada-lovelace.json # Individual pioneer files
    └── ...
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details and field explanations.

---

## License

Content and code are licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). See LICENSE for details.
