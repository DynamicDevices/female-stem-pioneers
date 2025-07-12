
# Female STEM Pioneers – Project Reference

A digital resource celebrating women pioneers in STEM to inspire girls and young women. **MVP v1.0.0-mvp completed** - UX foundation solid, ready for content expansion.

## 🎯 Current Status: MVP Complete ✅

### **What's Done:**
- ✅ **12 Pioneer Profiles** with comprehensive data structure
- ✅ **Responsive Design** with modern UI/UX
- ✅ **Search & Filter** functionality
- ✅ **Accessibility** compliant (WCAG standards)
- ✅ **Performance** optimized (Lighthouse 90+)
- ✅ **PWA** features (offline, installable)
- ✅ **Mobile-responsive** design

### **Key Features:**
- Interactive pioneer cards with hover effects
- Quote sections (clean styling, no quotation marks)
- Achievement lists and fun facts
- "Follow in Her Footsteps" study paths
- Professional images with modal viewing
- Search by name, field, country
- Sort by name, lifespan, field, country

## 🏗️ Project Structure
```
female-stem-pioneers/
├── index.html                      # Main homepage
├── js/
│   ├── pioneers.js                 # Pioneer data (12 profiles)
│   └── app.js                      # Main application logic
├── css/
│   └── styles.css                  # Modern responsive styling
├── images/                         # Pioneer portraits
├── icons/                          # App icons
├── manifest.json                   # PWA manifest
├── sw.js                           # Service worker
└── add-pioneer.js                  # Helper for adding pioneers
```

## 📝 Pioneer Data Structure
Each pioneer in `js/pioneers.js` includes:
```js
{
  name: "Ada Lovelace",
  photo: "./images/ada-lovelace.jpg",
  lifespan: "1815–1852",
  country: "United Kingdom",
  fields: ["Mathematics", "Computing"],
  quote: "That brain of mine is something more than merely mortal...",
  summary: "Often regarded as the first computer programmer...",
  achievements: ["Achievement 1", "Achievement 2"],
  fun_fact: "An interesting fact about the pioneer.",
  references: [{ title: "Wikipedia", url: "https://..." }],
  // Additional fields for future expansion...
}
```

## 🚀 Next Steps: Content Expansion

### **Priority 1: Add More Pioneers**
- Target: 50+ pioneer profiles
- Focus on diverse backgrounds, time periods, STEM fields
- Use `add-pioneer.js` helper script
- Download images from Wikimedia Commons

### **Priority 2: Enhanced Content**
- Expand detailed descriptions
- Add more educational resources
- Include career path details
- Add cultural context and challenges

### **Priority 3: Interactive Features**
- Timeline visualization
- Field-specific filtering
- Advanced search options
- Educational activities

## 🛠️ Development Commands
```bash
# Start local server
python3 -m http.server 8001

# Add new pioneer
node add-pioneer.js "Pioneer Name"

# Run tests
npm run ci

# Lighthouse audit
npm run lighthouse
```

## 🎨 Recent UX Improvements
- ✅ Removed quote marks from quote text
- ✅ Made quote styling consistent with other content
- ✅ Improved visibility of date/nationality and bio text
- ✅ Centered "Learn More" button text
- ✅ Optimized for accessibility and performance

## 📊 Current Metrics
- **Pioneers**: 12 profiles
- **Fields**: 8 STEM categories
- **Countries**: 6 represented
- **Performance**: Lighthouse 90+
- **Accessibility**: WCAG compliant

## 🔧 Technical Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data**: JSON in `js/pioneers.js`
- **Images**: Local storage with lazy loading
- **PWA**: Service worker and manifest
- **Deployment**: GitHub Pages

## 📚 License
- **Content**: CC BY 4.0
- **Code**: MIT
- **Images**: Various (Wikimedia Commons, etc.)

---

**Ready for content expansion!** The UX foundation is solid and the architecture supports easy addition of new pioneers and features.