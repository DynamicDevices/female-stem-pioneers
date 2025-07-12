#!/usr/bin/env node

/**
 * Add Pioneer Script
 * 
 * This script helps add new pioneers to the dataset and fetch their images.
 * 
 * Usage: node add-pioneer.js "Pioneer Name"
 */

const fs = require('fs');
const path = require('path');

// Note: Images should be manually downloaded from Wikimedia Commons

// Template for new pioneer data
const PIONEER_TEMPLATE = {
  name: "PIONEER_NAME",
  photo: "./images/pioneer-name.jpg",
  lifespan: "YYYY–YYYY",
  country: "Country",
  fields: ["Field1", "Field2"],
  roles: ["Role1", "Role2"],
  quote: "Famous quote from the pioneer.",
  summary: "Brief summary of their contributions.",
  detailed_description: {
    early_life: "Brief description of their early life and background.",
    stem_journey: "How they got into STEM and their educational path.",
    challenges: "Key challenges they faced in their career.",
    achievements: "Their most important achievements and contributions.",
    legacy: "Their lasting impact and influence."
  },
  achievements: [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ],
  awards: [
    "Award 1 (Year)",
    "Award 2 (Year)"
  ],
  publications: [],
  education: [
    { degree: "Degree", field: "Field", institution: "Institution" }
  ],
  timeline: [
    { year: 1900, event: "Important event" }
  ],
  barriers: [
    "Barrier they faced"
  ],
  impact: "Description of their impact on STEM.",
  media: [
    { type: "article", title: "Article Title", url: "https://example.com" }
  ],
  references: [
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pioneer_Name" }
  ],
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
};

/**
 * Generate filename from pioneer name
 */
function generateFilename(name) {
  return name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() + '.jpg';
}

/**
 * Add a new pioneer to the dataset
 */
function addPioneer(pioneerName) {
  const pioneersPath = path.join(__dirname, 'js', 'pioneers.js');
  const pioneersContent = fs.readFileSync(pioneersPath, 'utf8');
  
  // Create new pioneer data
  const newPioneer = JSON.parse(JSON.stringify(PIONEER_TEMPLATE));
  newPioneer.name = pioneerName;
  newPioneer.photo = `./images/${generateFilename(pioneerName)}`;
  
  // Convert to JavaScript object format
  const pioneerString = JSON.stringify(newPioneer, null, 2)
    .replace(/"([^"]+)":/g, '$1:') // Remove quotes from property names
    .replace(/"/g, '"') // Keep quotes around string values
    .replace(/,\s*}/g, '}') // Remove trailing commas
    .replace(/,\s*]/g, ']'); // Remove trailing commas in arrays
  
  // Insert before the closing bracket of the pioneers array
  const insertPoint = pioneersContent.lastIndexOf(']');
  const beforeInsert = pioneersContent.substring(0, insertPoint);
  const afterInsert = pioneersContent.substring(insertPoint);
  
  const updatedContent = beforeInsert + ',\n  ' + pioneerString + '\n' + afterInsert;
  
  fs.writeFileSync(pioneersPath, updatedContent);
  console.log(`✅ Added ${pioneerName} to pioneers.js`);
}

/**
 * Note: Images should be manually downloaded from Wikimedia Commons
 * Example: curl -L "https://upload.wikimedia.org/wikipedia/commons/..." -o images/pioneer-name.jpg
 */
function updatePioneersArray(pioneerName) {
  console.log(`📸 Remember to manually download an image for ${pioneerName} from Wikimedia Commons`);
  console.log(`   Example: curl -L "https://upload.wikimedia.org/wikipedia/commons/..." -o images/${generateFilename(pioneerName)}`);
}

/**
 * Main function
 */
async function main() {
  const pioneerName = process.argv[2];
  
  if (!pioneerName) {
    console.log('Usage: node add-pioneer.js "Pioneer Name"');
    console.log('Example: node add-pioneer.js "Dorothy Vaughan"');
    process.exit(1);
  }
  
  console.log(`🚀 Adding pioneer: ${pioneerName}\n`);
  
  try {
    // Add to pioneers.js
    addPioneer(pioneerName);
    
    // Remind about manual image download
    updatePioneersArray(pioneerName);
    
    console.log(`\n🎉 Successfully added ${pioneerName} to the dataset!`);
    console.log('\nNext steps:');
    console.log('1. Edit js/pioneers.js to fill in the pioneer details');
    console.log('2. Download an image from Wikimedia Commons and save it to images/');
    console.log('3. Test the website to ensure everything works');
    console.log('4. Commit your changes');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  addPioneer,
  updatePioneersArray,
  PIONEER_TEMPLATE
}; 