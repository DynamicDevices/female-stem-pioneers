# Female STEM Pioneers

A celebration of women pioneers in Science, Technology, Engineering, and Mathematics (STEM) - inspiring the next generation of female innovators.

**🎉 MVP v1.0.0-mvp Complete!** - UX foundation solid, ready for content expansion.

## About This Project

This project showcases remarkable women who have made groundbreaking contributions to STEM fields. Our mission is to inspire girls and young women considering STEM careers, while providing valuable resources for educators.

## 🌐 Mission

To inspire, educate, and empower by highlighting the contributions of women who have shaped the world through their work in STEM fields.

## ✨ Current Features

- **12 Pioneer Profiles**: Rich biographies with comprehensive metadata
- **Interactive Search & Filter**: Find pioneers by name, field, country, or keywords
- **Study Path Suggestions**: "Follow in Her Footsteps" sections with specific study recommendations
- **Educational Resources**: Career guidance and study tips from successful women in STEM
- **Responsive Design**: Works beautifully on all devices
- **Progressive Web App**: Can be installed and used offline
- **Performance Optimized**: Lighthouse 90+ score, WCAG compliant

## 🏗️ Technical Overview

- **Static Web App**: Built with HTML, CSS, and JavaScript
- **Data-Driven**: All pioneer profiles stored in `js/pioneers.js`
- **Performance Optimized**: Lazy loading, service worker caching
- **Accessible & Responsive**: Works on all devices
- **Modern CSS**: Flexbox layouts and smooth animations

## 📊 Current Status

- **Pioneers**: 12 profiles with comprehensive data
- **Fields**: 8 STEM categories represented
- **Countries**: 6 countries represented
- **Performance**: Lighthouse 90+
- **Accessibility**: WCAG compliant

## 🚀 Next Steps

### Priority 1: Content Expansion
- Add more pioneer profiles (target: 50+)
- Expand educational resources
- Include more diverse backgrounds and time periods

### Priority 2: Enhanced Features
- Timeline visualizations
- Advanced filtering options
- Interactive educational activities

## 🤝 Contributing

We welcome contributions! You can:
- Add a new profile for a woman pioneer in STEM
- Suggest corrections or additional information for existing profiles
- Improve the design, accessibility, or features of the site

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📝 Data Structure Example

Each pioneer profile includes comprehensive metadata:

```js
{
  name: "Ada Lovelace",
  photo: "./images/ada-lovelace.jpg",
  lifespan: "1815–1852",
  country: "United Kingdom",
  fields: ["Mathematics", "Computing"],
  quote: "That brain of mine is something more than merely mortal...",
  summary: "Often regarded as the first computer programmer...",
  achievements: ["First computer programmer", "Worked on Analytical Engine"],
  fun_fact: "An interesting fact about the pioneer.",
  references: [{ title: "Wikipedia", url: "https://..." }]
}
```

## 🛠️ Development

```bash
# Start local server
python3 -m http.server 8001

# Add new pioneer
node add-pioneer.js "Pioneer Name"

# Run tests
npm run ci
```

## 📚 License

Content is released under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

---

*Celebrating the women who changed STEM—and the world!*