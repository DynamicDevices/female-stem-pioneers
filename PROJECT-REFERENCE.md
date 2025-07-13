# Female STEM Pioneers - Project Reference

## Overview
A static web application showcasing women pioneers in STEM fields, featuring profiles, images, and educational content about their contributions to science, technology, engineering, and mathematics.

## Key Features

### Pioneer Profiles
- **47 Pioneer Profiles**: Detailed information about women in STEM
- **Diverse Representation**: Global pioneers from different eras and backgrounds
- **Educational Content**: Short, engaging descriptions for students
- **Image Gallery**: Photos and illustrations of pioneers

### Technical Implementation
- **Static Site**: Pure HTML, CSS, JavaScript
- **Responsive Design**: Mobile-first approach
- **Progressive Web App**: Service worker for offline functionality
- **Accessibility**: Screen reader friendly, keyboard navigation

### Image Management
- **Creative Commons Licensing**: All images must be CC licensed or public domain
- **Fallback System**: Diverse emoji icons when images unavailable
- **Optimization**: WebP format with JPG fallbacks
- **Attribution**: Proper credit for image sources

## Diverse Fallback Icon System

### Overview
**CRITICAL FEATURE**: The diverse fallback icon system is essential for inclusive representation. When pioneer images cannot be downloaded or are missing, the application uses a sophisticated fallback system with diverse emoji icons representing women in STEM across different professions and skin tones.

### Implementation
- **File**: `js/icon-mapping.js`
- **Demo**: `icon-mapping-demo.html` (for reference and testing)
- **Unicode 8.0**: Uses proper skin tone modifiers (Fitzpatrick scale)
- **Global Exposure**: IconMapping object must be attached to window for proper fallback functionality

### Icon Types
1. **👩‍🔬 Scientist** - Biology, Chemistry, Physics
2. **👩‍💻 Technologist** - Computer Science, Programming
3. **👩‍🏭 Engineer** - Mechanical, Electrical, Civil Engineering
4. **👩‍🚀 Astronaut** - Space Exploration, Astronomy
5. **👩‍⚕️ Doctor** - Medicine, Healthcare
6. **👩‍🏫 Professor** - Education, Academia
7. **👩‍🎓 Mathematician** - Mathematics, Theoretical Physics
8. **👩‍🔧 Inventor** - Innovation, Patents

### Skin Tone Diversity
- **Light** (🏻) - Type 1-2
- **Medium Light** (🏼) - Type 3
- **Medium** (🏽) - Type 4
- **Medium Dark** (🏾) - Type 5
- **Dark** (🏿) - Type 6

### Smart Mapping Logic
- **Field-Based**: Maps pioneer's primary field to appropriate icon
- **Region-Based**: Assigns skin tone based on geographic origin
- **Era-Based**: Considers historical context for representation
- **Fallback**: Defaults to medium skin tone for balanced representation

### Importance of Diversity
- **Inclusive Representation**: Ensures all pioneers are represented regardless of image availability
- **Professional Accuracy**: Icons match the pioneer's actual field of work
- **Cultural Sensitivity**: Skin tones reflect geographic and cultural backgrounds
- **Educational Value**: Students see diverse representation in STEM fields

### Usage Example
```javascript
const icon = IconMapping.getIconForPioneer({
    name: "Marie Curie",
    fields: ["Physics", "Chemistry"],
    region: "Poland",
    birthYear: 1867
});
// Returns: "👩🏽‍🔬" (Scientist with medium skin tone)
```

## File Structure

### Core Files
- `index.html` - Main application page
- `css/styles.css` - Styling and responsive design
- `js/app.js` - Main application logic
- `js/pioneers.js` - Pioneer data and management
- `js/icon-mapping.js` - Diverse fallback icon system

### Demo Files
- `fallback-demo.html` - Original icon options demo
- `icon-mapping-demo.html` - **Diverse icon system demo** (keep for reference)

### Images
- `images/` - Pioneer photos and illustrations
- `icons/` - App icons and favicon

## Development Guidelines

### Adding New Pioneers
**IMPORTANT**: When adding pioneers, follow these essential guidelines:

1. **Efficiency First**: Before spending time researching and writing metadata for a potential new pioneer, **always check if they are already included in the project**. Use `grep` or search the `js/pioneers.js` file to verify the pioneer's name is not already present. This saves significant time and prevents duplicate work.

2. **Duplicate Check**: First check the pioneers to be added against current pioneers so that there are no duplicates
3. **Structure Compliance**: Follow the existing structure for pioneer meta-data
4. **Description**: Include a paragraph short description for display
5. **Learn More Link**: Include a relevant "learn more" link
6. **Image Retrieval**: Try to retrieve an image that can be displayed
7. **Fallback Icons**: If there is no image, an appropriate fallback diverse icon should be used based on their profession and nationality (for skin tone)

### Image Requirements
- **Licensing**: Creative Commons or public domain only
- **Attribution**: Must include proper credit
- **Quality**: High resolution, clear images
- **Diversity**: Represent global pioneers

### Code Standards
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimized for speed
- **Mobile**: Responsive design required
- **SEO**: Proper meta tags and structure
- **Diverse Fallback Icons**: Must maintain working diverse icon system for inclusive representation

### Content Guidelines
- **Engaging**: Short, interesting descriptions for students
- **Accurate**: Fact-checked historical information
- **Inclusive**: Diverse representation across fields and backgrounds
- **Educational**: Inspire future STEM leaders

## Deployment

### GitHub Pages
- **Repository**: female-stem-pioneers
- **Branch**: main
- **Domain**: Custom domain configured
- **CI/CD**: Automated deployment via GitHub Actions

### Performance
- **Lighthouse Score**: 95+ across all metrics
- **Loading Speed**: < 3 seconds
- **Mobile Optimization**: Responsive and fast
- **SEO**: Optimized for search engines

## Future Enhancements

### Planned Features
- **Search Functionality**: Filter pioneers by field, era, region
- **Interactive Timeline**: Historical context visualization
- **Educational Resources**: Lesson plans and activities
- **Community Contributions**: User-submitted pioneer profiles

### Technical Improvements
- **Advanced Caching**: Service worker optimization
- **Image Optimization**: Automatic compression and formats
- **Analytics**: Usage tracking and insights
- **Internationalization**: Multi-language support

## Contributing

### Guidelines
- **Image Licensing**: Only CC or public domain images
- **Code Quality**: Follow established patterns
- **Testing**: Verify on multiple devices
- **Documentation**: Update relevant files
- **Diverse Icons**: Ensure fallback icon system remains functional and inclusive

### Process
1. Fork the repository
2. Create feature branch
3. Make changes with proper testing
4. Submit pull request with description
5. Review and merge

## Resources

### Documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [README.md](README.md) - Project overview
- [TODO.md](TODO.md) - Development roadmap

### External Links
- [GitHub Repository](https://github.com/username/female-stem-pioneers)
- [Live Site](https://female-stem-pioneers.github.io)
- [Issue Tracker](https://github.com/username/female-stem-pioneers/issues)

---

*Last updated: July 2025*