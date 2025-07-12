
# Women Pioneers in STEM – Project Reference

A digital resource to inspire girls, young women, and educators by celebrating the achievements and stories of women pioneers in Science, Technology, Engineering, and Mathematics (STEM).

## 🎯 Purpose
- Inspire girls and young women to consider and pursue STEM careers.
- Provide accessible, engaging profiles of women who have made significant contributions to STEM.
- Serve as a resource for educators to introduce students to diverse role models and STEM career paths.

## 👩‍🔬 Audience
- **Primary:** Girls and young women (ages 10–20) considering STEM education or careers.
- **Secondary:** Educators, mentors, and outreach coordinators seeking classroom or club resources.

## 🏗️ Project Structure
```
├── index.html              # Main homepage (welcome, why STEM, featured pioneers, educator resources)
├── js/
│   └── pioneers.js         # Data: array of women pioneers in STEM
├── css/styles.css          # Styling
├── icons/                  # App icons and images
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (PWA)
├── CONTRIBUTING.md         # Contribution guidelines
├── README.md               # Project overview and mission
├── PROJECT-REFERENCE.md    # (This file) Technical/content reference
└── ...
```

## 📝 Data Structure: Pioneer Profile
Each entry in `js/pioneers.js` should follow this format:
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
- **Required fields:** `name`, `field`, `bio`
- **Optional fields:** `country`, `era`, `achievements`, `image`, `links`

## 🌟 Main Features
- **Homepage:** Welcome, Why STEM, Featured Pioneers, For Educators
- **Pioneer Profiles:** Cards with photo, bio, achievements, and links
- **Search/Filter (future):** By name, field, country, era, or keyword
- **Educator Resources:** Lesson ideas, discussion prompts, and contribution guide
- **PWA:** Installable, works offline
- **Accessible & Responsive:** Mobile-friendly, screen reader support

## 🧑‍🏫 For Educators
- Use profiles as discussion starters, research projects, or inspiration boards
- Encourage students to find and add local or contemporary role models
- Connect STEM topics to real-world impact through these stories
- Share lesson ideas or resources via contributions

## 🤝 Contributing
- Add a new pioneer profile to `js/pioneers.js` (see data structure above)
- Suggest corrections or additional information for existing profiles
- Improve design, accessibility, or features
- See [CONTRIBUTING.md](CONTRIBUTING.md) for details

## 🚀 Deployment
- Static site, auto-deployed to GitHub Pages after CI passes
- PWA features for offline use

## 📚 License
- Content: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
- Code: MIT or same as content (see LICENSE)

---

*This file is the technical and content reference for all contributors and AI assistants. Please review before making changes or starting a new chat.*