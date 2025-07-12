# Women Pioneers in STEM 🌟

A digital resource celebrating the achievements and stories of women who have been pioneers in Science, Technology, Engineering, and Mathematics (STEM).

## 🌐 Mission

To inspire, educate, and empower by highlighting the contributions of women who have shaped the world through their work in STEM fields.

## ✨ Features

- **Profiles of Pioneers**: Biographies, achievements, and impact of women in STEM from history to the present day.
- **Search & Filter**: Find pioneers by name, field, country, era, or keywords.
- **Timeline & Visualizations**: Explore the evolution of women's contributions in STEM over time and across disciplines.
- **Educational Resource**: Designed for students, educators, and anyone interested in STEM history and role models.
- **Open & Collaborative**: Community-driven—anyone can suggest new profiles or improvements.

## 🏗️ Technical Overview

- **Static Web App**: Built with HTML, CSS, and JavaScript. No backend required.
- **Data-Driven**: All pioneer profiles are stored in a JavaScript data file (`js/pioneers.js`).
- **Accessible & Responsive**: Works on all devices and is accessible to all users.
- **Progressive Web App**: Can be installed and used offline.

## 🤝 Contributing

We welcome contributions! You can:
- Add a new profile for a woman pioneer in STEM
- Suggest corrections or additional information for existing profiles
- Improve the design, accessibility, or features of the site

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📝 Data Structure Example

Each pioneer profile should follow this format (see `js/pioneers.js`):

```js
{
  name: "Ada Lovelace",
  field: "Mathematics, Computing",
  country: "United Kingdom",
  era: "19th Century",
  achievements: [
    "First computer programmer",
    "Worked on Charles Babbage's Analytical Engine"
  ],
  bio: "Ada Lovelace is often regarded as the first computer programmer for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.",
  image: "images/ada_lovelace.jpg",
  links: [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ada_Lovelace" }
  ]
}
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages after every successful update. See [CI-CD-README.md](CI-CD-README.md) for details.

## 📚 License

Content is released under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

---

*Celebrating the women who changed STEM—and the world!*