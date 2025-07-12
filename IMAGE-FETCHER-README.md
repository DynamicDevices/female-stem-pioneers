# Pioneer Image Fetcher

This script automatically retrieves portrait images for each pioneer in the Female STEM Pioneers dataset. It uses multiple sources to find high-quality, appropriate images for educational use.

## Features

- **Multiple Image Sources**: Wikimedia Commons (primary), Google Custom Search, Unsplash
- **Automatic Quality Filtering**: Filters by image size, format, and quality
- **Duplicate Detection**: Removes duplicate images from different sources
- **Smart Selection**: Prioritizes Wikimedia Commons for historical figures
- **Automatic Integration**: Updates the pioneers.js file with new image URLs
- **Detailed Reporting**: Generates a comprehensive download report

## Quick Start

### Basic Usage (Wikimedia Commons Only)

```bash
node fetch-pioneer-images.js
```

This will search Wikimedia Commons for images of all pioneers and download them to the `images/` directory.

### Advanced Usage (With API Keys)

1. **Set up API keys** (optional but recommended for better results):

```bash
# Google Custom Search API
export GOOGLE_API_KEY="your_google_api_key"
export GOOGLE_CSE_ID="your_custom_search_engine_id"

# Unsplash API
export UNSPLASH_API_KEY="your_unsplash_api_key"
```

2. **Run the script**:

```bash
node fetch-pioneer-images.js
```

## API Setup Instructions

### Google Custom Search API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Custom Search API
4. Create credentials (API Key)
5. Go to [Google Programmable Search Engine](https://programmablesearchengine.google.com/)
6. Create a new search engine
7. Get your Search Engine ID (cx parameter)

### Unsplash API

1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Create an account and register your application
3. Get your Access Key

## Configuration

The script can be configured by modifying the `CONFIG` object in `fetch-pioneer-images.js`:

```javascript
const CONFIG = {
  // API Keys
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || '',
  GOOGLE_CSE_ID: process.env.GOOGLE_CSE_ID || '',
  UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY || '',
  
  // Output settings
  OUTPUT_DIR: './pioneer-images',
  IMAGE_FORMATS: ['jpg', 'jpeg', 'png', 'webp'],
  MIN_IMAGE_SIZE: 200,  // minimum width/height in pixels
  MAX_IMAGE_SIZE: 2000, // maximum width/height in pixels
};
```

## Output

The script creates:

1. **`images/` directory** - Contains downloaded images
2. **`images/download-report.json`** - Detailed report of all downloads
3. **Updated `js/pioneers.js`** - Pioneer data with new image URLs

### File Naming Convention

Images are named using the pioneer's name:
- `ada-lovelace.jpg`
- `marie-curie.jpg`
- `katherine-johnson.jpg`
- etc.

## Adding New Pioneers

To add new pioneers to the dataset:

1. **Add the name to the `PIONEERS` array** in `fetch-pioneer-images.js`:

```javascript
const PIONEERS = [
  "Ada Lovelace",
  "Marie Curie", 
  "Katherine Johnson",
  "Grace Hopper",
  "Rosalind Franklin",
  "Chien-Shiung Wu",
  "New Pioneer Name"  // Add here
];
```

2. **Add the pioneer data** to `js/pioneers.js` (see existing entries for format)

3. **Run the image fetcher**:

```bash
node fetch-pioneer-images.js
```

## Image Sources and Quality

### Wikimedia Commons (Primary)
- **Best for**: Historical figures, public domain images
- **Quality**: High-resolution, well-documented
- **License**: Public domain or Creative Commons
- **No API key required**

### Google Custom Search (Fallback)
- **Best for**: Modern photos, diverse sources
- **Quality**: Variable, filtered by size
- **License**: Various (check individual images)
- **Requires API key**

### Unsplash (Additional)
- **Best for**: High-quality modern portraits
- **Quality**: Professional photography
- **License**: Unsplash license (free to use)
- **Requires API key**

## Error Handling

The script handles various error scenarios:

- **Network timeouts**: 10-second timeout per request
- **API rate limits**: Graceful degradation to other sources
- **Invalid images**: Size and format filtering
- **Missing pioneers**: Continues with remaining pioneers

## Troubleshooting

### Common Issues

1. **No images found for a pioneer**
   - Try different search terms
   - Check if the pioneer name is spelled correctly
   - Verify internet connection

2. **API key errors**
   - Verify API keys are set correctly
   - Check API quotas and limits
   - Ensure API services are enabled

3. **Permission errors**
   - Ensure write permissions for the output directory
   - Check file system permissions

### Debug Mode

Add debug logging by modifying the script:

```javascript
// Add at the top of the script
const DEBUG = true;

// Add debug logging in functions
if (DEBUG) console.log('Debug info:', data);
```

## Legal Considerations

- **Wikimedia Commons**: Public domain or Creative Commons licensed
- **Google Images**: Check individual image licenses
- **Unsplash**: Free to use under Unsplash license
- **Always verify**: Image usage rights for your specific use case

## Contributing

To improve the image fetcher:

1. **Add new image sources** by implementing new search functions
2. **Improve filtering** by enhancing quality assessment
3. **Add new pioneers** to the dataset
4. **Report issues** with specific error messages

## License

This script is part of the Female STEM Pioneers project and follows the same license as the main project. 