# Changelog - Female STEM Pioneers

All notable changes to this project will be documented in this file.

## [v1.0.0-mvp] - 2025-01-12

### 🎉 MVP Release Complete!

#### Added

- **12 Pioneer Profiles**: Comprehensive profiles with rich metadata
- **Interactive Search & Filter**: Find pioneers by name, field, country, or keywords
- **Study Path Suggestions**: "Follow in Her Footsteps" sections with study recommendations
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Progressive Web App**: Service worker for offline functionality
- **Performance Optimizations**: Lazy loading for images using Intersection Observer API
- **Accessibility Features**: WCAG compliant with screen reader support

#### Changed

- **Quote Styling**: Removed quotation marks for cleaner appearance
- **Quote Consistency**: Made quote styling consistent with other content sections
- **Button Centering**: Perfectly centered "Learn More" button text
- **Text Visibility**: Improved contrast and font weights for date/nationality and bio text
- **Card Layout**: Enhanced pioneer card structure with flexbox

#### Fixed

- **Button Alignment**: Learn More buttons now consistently aligned and centered
- **Text Contrast**: Improved visibility of pioneer metadata
- **Quote Display**: Cleaner quote presentation without decorative elements
- **Performance**: Optimized image loading and reduced initial page load time

#### Technical Improvements

- **Service Worker**: Enhanced caching for better offline experience
- **CSS Architecture**: Better structured styles with improved maintainability
- **JavaScript Modules**: Cleaner code organization and error handling
- **Accessibility**: Improved ARIA labels and keyboard navigation
- **Lighthouse Score**: Achieved 90+ performance score

## [v1.0.0-beta] - 2025-01-11

### Added

- **Enhanced Typography**: Google Fonts integration (Inter and Playfair Display)
- **Field Color-Coding**: Color-coded badges for different STEM fields
- **Hover Effects**: Smooth animations and micro-interactions on pioneer cards
- **SVG Pattern Background**: Subtle STEM-themed pattern in header

### Changed

- **Header Design**: Improved gradient backgrounds and text contrast
- **Card Interactions**: Enhanced hover states and visual feedback
- **Color Scheme**: More consistent and accessible color palette

## [v1.0.0-alpha] - 2025-01-10

### Added

- **Basic Site Structure**: HTML, CSS, and JavaScript foundation
- **Pioneer Profiles**: Comprehensive data structure with rich metadata
- **Search and Filter**: Interactive search by name, field, country, and keywords
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Progressive Web App**: Service worker for offline functionality
- **GitHub Actions CI/CD**: Automated testing and deployment pipeline

## [v1.1.0] - 2025-07-13

### 🚀 Content Expansion & Improvements

#### Added

- 81 unique female STEM pioneer profiles with diverse backgrounds, fields, and eras
- Deduplication logic: only the first occurrence of each pioneer (by name) is shown in the UI
- SVG icon/image fallback for missing photos
- Expanded field filter dropdown to include all unique fields in the dataset
- Fun Fact section now hides if empty

#### Changed

- Updated documentation: README, PROJECT-REFERENCE.md, CONTRIBUTING.md, TODO.md
- Improved instructions for adding new pioneers and images
- Clarified image requirements and deduplication process

#### Fixed

- Removed duplicate entries from dataset for clarity
- Fixed 404 errors for missing images (SVG fallback)
- Improved error handling for missing or undefined dataset

#### Technical Improvements

- Enhanced data structure for pioneer profiles
- Improved UI accessibility and responsiveness
- Updated statistics display for total pioneers, fields, and countries

---

## Version History

- **v1.0.0-mvp** (2025-01-12): 🎉 **MVP Release Complete** - UX foundation solid, ready for content expansion
- **v1.0.0-beta** (2025-01-11): Enhanced design, typography, and interactions
- **v1.0.0-alpha** (2025-01-10): Core functionality and responsive design

---

## Next Steps

The MVP foundation is complete. Next phase focuses on:

- **Content Expansion**: Add more pioneer profiles (target: 50+)
- **Enhanced Features**: Timeline visualizations, advanced filtering
- **Educational Resources**: Interactive activities and downloadable content

---

## Contributing

When contributing to this project, please update this changelog with a brief description of your changes under the appropriate version section.

## Format

This project adheres to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format.
