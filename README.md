# Female STEM Pioneers

A celebration of women pioneers in Science, Technology, Engineering, and Mathematics (STEM) - inspiring the next generation of female innovators.

## About This Project

This project showcases remarkable women who have made groundbreaking contributions to STEM fields. Our mission is to inspire girls and young women considering STEM careers, while providing valuable resources for educators.

## 🌐 Mission

To inspire, educate, and empower by highlighting the contributions of women who have shaped the world through their work in STEM fields.

## ✨ Features

- **Comprehensive Pioneer Profiles**: Rich biographies with detailed metadata including career paths, educational advice, and cultural context
- **Interactive Search & Filter**: Find pioneers by name, field, country, era, or keywords
- **Data Visualizations**: Interactive D3.js charts showing pioneers by field, country, era, and a historical timeline
- **Study Path Suggestions**: Each pioneer card includes "Follow in Her Footsteps" section with specific study recommendations
- **Educational Resources**: Student resources, career guidance, and study tips from successful women in STEM
- **Cultural Context**: Heritage, challenges, and contributions that shaped their journeys
- **Modern Impact**: Current applications and future implications of their work
- **Performance Optimized**: Lazy loading images, enhanced service worker caching, and smooth animations
- **Responsive Design**: Works beautifully on all devices
- **Progressive Web App**: Can be installed and used offline

## 🏗️ Technical Overview

- **Static Web App**: Built with HTML, CSS, and JavaScript. No backend required.
- **Data-Driven**: All pioneer profiles are stored in a comprehensive JavaScript data file (`js/pioneers.js`).
- **Interactive Visualizations**: D3.js charts and timeline for data exploration
- **Performance Optimized**: Lazy loading, service worker caching, and optimized assets
- **Accessible & Responsive**: Works on all devices and is accessible to all users.
- **Image Management**: High-quality portrait images with lazy loading and fallbacks
- **Modern CSS**: Flexbox layouts, CSS Grid, and smooth animations

## 🤝 Contributing

We welcome contributions! You can:
- Add a new profile for a woman pioneer in STEM
- Suggest corrections or additional information for existing profiles
- Improve the design, accessibility, or features of the site

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📝 Data Structure Example

Each pioneer profile includes comprehensive metadata (see `js/pioneers.js`):

```js
{
  name: "Ada Lovelace",
  photo: "./images/ada-lovelace.jpg",
  lifespan: "1815–1852",
  country: "United Kingdom",
  fields: ["Mathematics", "Computing"],
  quote: "That brain of mine is something more than merely mortal; as time will show.",
  summary: "Often regarded as the first computer programmer for her work on Babbage's Analytical Engine.",
  shortDescription: "Ada Lovelace is often called the world's first computer programmer...",
  achievements: ["First computer programmer", "Worked on Charles Babbage's Analytical Engine"],
  career_path: {
    first_job: "Mathematical assistant to Charles Babbage",
    advice_for_students: "Follow your curiosity and don't let anyone tell you what you can't do."
  },
  student_resources: {
    books_for_students: ["Ada's Algorithm: How Lord Byron's Daughter Launched the Digital Age"],
    websites: ["code.org", "girlswhocode.com"],
    advice: "Start with what excites you most - whether it's math, science, or building things."
  }
}
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages after every successful update.

## 📚 License

Content is released under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

---

*Celebrating the women who changed STEM—and the world!*