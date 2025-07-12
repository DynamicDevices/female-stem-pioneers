
# Female STEM Pioneers – Project Reference

A comprehensive digital resource to inspire girls, young women, and educators by celebrating the achievements and stories of women pioneers in Science, Technology, Engineering, and Mathematics (STEM).

## 🎯 Purpose
- Inspire girls and young women to consider and pursue STEM careers
- Provide accessible, engaging profiles of women who have made significant contributions to STEM
- Serve as a resource for educators to introduce students to diverse role models and STEM career paths
- Showcase the rich history and ongoing contributions of women in STEM fields

## 👩‍🔬 Audience
- **Primary:** Girls and young women (ages 10–20) considering STEM education or careers
- **Secondary:** Educators, mentors, and outreach coordinators seeking classroom or club resources
- **Tertiary:** Anyone interested in learning about women's contributions to STEM

## 🏗️ Project Structure
```
female-stem-pioneers/
├── index.html                      # Main homepage with interactive pioneer display
├── js/
│   ├── pioneers.js                 # Comprehensive pioneer data with rich metadata
│   ├── app.js                      # Main application logic and UI interactions
│   ├── performance.js              # Performance optimizations
│   └── visualizations.js           # Data visualization components
├── css/
│   └── styles.css                  # Modern, responsive styling
├── images/                         # Pioneer portrait images
│   ├── ada-lovelace.jpg
│   ├── marie-curie.jpg
│   ├── katherine-johnson.jpg
│   ├── grace-hopper.jpg
│   ├── chien-shiung-wu.jpg
│   └── download-report.json
├── icons/                          # App icons and images
├── manifest.json                   # PWA manifest
├── sw.js                           # Service worker (PWA)
├── add-pioneer.js                  # Helper script for adding new pioneers
├── CONTRIBUTING.md                 # Contribution guidelines
├── README.md                       # Project overview and mission
├── PROJECT-REFERENCE.md            # (This file) Technical/content reference
└── ...
```

## 📝 Data Structure: Pioneer Profile
Each entry in `js/pioneers.js` follows this comprehensive format:
```js
{
  name: "Ada Lovelace",
  photo: "./images/ada-lovelace.jpg",
  lifespan: "1815–1852",
  country: "United Kingdom",
  fields: ["Mathematics", "Computing"],
  roles: ["Mathematician", "Writer"],
  quote: "That brain of mine is something more than merely mortal; as time will show.",
  summary: "Often regarded as the first computer programmer for her work on Babbage's Analytical Engine.",
  detailed_description: {
    early_life: "Brief description of their early life and background.",
    stem_journey: "How they got into STEM and their educational path.",
    challenges: "Key challenges they faced in their career.",
    achievements: "Their most important achievements and contributions.",
    legacy: "Their lasting impact and influence."
  },
  achievements: ["Achievement 1", "Achievement 2"],
  awards: ["Award 1 (Year)", "Award 2 (Year)"],
  publications: [],
  education: [{ degree: "Degree", field: "Field", institution: "Institution" }],
  timeline: [{ year: 1900, event: "Important event" }],
  barriers: ["Barrier they faced"],
  impact: "Description of their impact on STEM.",
  media: [{ type: "article", title: "Title", url: "https://example.com" }],
  references: [{ title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pioneer" }],
  mentorship: "Description of their mentoring or advocacy work.",
  fun_fact: "An interesting fact about the pioneer.",
  
  // High Priority - New Metadata
  career_path: {
    first_job: "Their first job in STEM",
    career_highlights: ["Highlight 1", "Highlight 2"],
    advice_for_students: "Their advice for students pursuing STEM."
  },
  student_resources: {
    books_for_students: ["Book 1", "Book 2"],
    websites: ["website1.com", "website2.com"],
    programs: ["Program 1", "Program 2"],
    advice: "Their advice for students."
  },
  challenges: {
    academic: ["Academic challenge 1"],
    professional: ["Professional challenge 1"],
    personal: ["Personal challenge 1"],
    how_overcame: "How they overcame challenges."
  },
  education_details: {
    high_school: "High school background",
    college_major: "College major",
    key_courses: ["Course 1", "Course 2"],
    study_tips: "Their study advice."
  },
  modern_impact: {
    current_applications: "How their work is used today",
    companies_using_her_work: ["Company 1", "Company 2"],
    future_implications: "Future implications of their work."
  },
  personal_info: {
    early_interests: ["Interest 1", "Interest 2"],
    family_background: "Family background",
    hobbies: ["Hobby 1", "Hobby 2"],
    personality_traits: ["Trait 1", "Trait 2"]
  },
  cultural_background: {
    heritage: "Cultural heritage",
    cultural_influences: ["Influence 1", "Influence 2"],
    cultural_challenges: ["Challenge 1", "Challenge 2"],
    cultural_contributions: "Their cultural contributions."
  }
}
```

## 🌟 Main Features

### **Interactive Pioneer Display**
- **Search & Filter**: Real-time search by name, field, country, or keyword
- **Sort Options**: By name, field, country, or era
- **Card Layout**: Modern, responsive cards with photos and key information
- **Detailed Views**: Expandable sections with comprehensive information

### **Rich Pioneer Profiles**
- **Comprehensive Data**: 20+ fields per pioneer including detailed descriptions
- **Educational Content**: Student resources, career advice, and study tips
- **Cultural Context**: Heritage, challenges, and contributions
- **Modern Impact**: Current applications and future implications

### **Image Management System**
- **Manual Image Download**: High-quality portrait images downloaded from Wikimedia Commons
- **Quality Control**: Proper file sizes and formats for optimal display
- **Reliable Sources**: Wikimedia Commons for public domain and licensed images
- **Easy Expansion**: Manual download process for adding new pioneer images

### **Technical Features**
- **PWA**: Installable, works offline
- **Responsive Design**: Mobile-friendly interface
- **Accessibility**: Screen reader support and keyboard navigation
- **Performance**: Optimized loading and smooth interactions

## 🧑‍🏫 For Educators

### **Classroom Resources**
- Use profiles as discussion starters or research projects
- Connect STEM topics to real-world impact through these stories
- Encourage students to find and add local or contemporary role models
- Access detailed career paths and educational advice

### **Student Engagement**
- Interactive search and filter functionality
- Rich multimedia content with images and detailed descriptions
- Career guidance and study tips from successful women in STEM
- Cultural context and barrier-breaking stories

## 🤝 Contributing

### **Adding New Pioneers**
1. **Automatic Method**: Use `node add-pioneer.js "Pioneer Name"`
2. **Manual Method**: Add to `js/pioneers.js` following the data structure above
3. **Image Download**: Manually download high-quality portrait images from Wikimedia Commons

### **Content Guidelines**
- Focus on women who made significant contributions to STEM
- Include diverse backgrounds, time periods, and STEM fields
- Provide accurate, well-sourced information
- Include educational and inspirational content

### **Technical Contributions**
- Improve design, accessibility, or features
- Add new image sources or search functionality
- Enhance performance or user experience
- See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines

## 🚀 Deployment & Maintenance

### **Current Deployment**
- Static site, auto-deployed to GitHub Pages
- PWA features for offline use
- Images stored locally in `images/` folder

### **Image Management**
- **Manual Download**: High-quality images from Wikimedia Commons using curl/wget
- **Quality Control**: Proper file sizes and formats for optimal display
- **Source Priority**: Wikimedia Commons for reliable, licensed images
- **Easy Expansion**: Manual download process for adding new pioneer images

### **Data Management**
- Rich metadata structure for comprehensive profiles
- Automatic integration with image system
- Scalable architecture for future expansion
- Detailed documentation and helper scripts

## 📚 License
- **Content**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
- **Code**: MIT or same as content (see LICENSE)
- **Images**: Various licenses (Wikimedia Commons public domain, Unsplash license, etc.)

## 🔧 Technical Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data**: JSON structure in `js/pioneers.js`
- **Images**: Local storage with automatic fetching
- **PWA**: Service worker and manifest
- **Deployment**: GitHub Pages with CI/CD

---

*This file is the technical and content reference for all contributors and AI assistants. Please review before making changes or starting a new chat.*