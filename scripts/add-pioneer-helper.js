#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const AI_JSON_DIR = path.join(__dirname, '../ai-pioneer-json');

// Ensure the AI JSON directory exists
if (!fs.existsSync(AI_JSON_DIR)) {
    fs.mkdirSync(AI_JSON_DIR);
}

function resolveAIJsonPath(aiDataFile) {
    // If the path is absolute or contains a path separator, use as is
    if (aiDataFile.includes('/') || aiDataFile.includes('\\')) {
        return aiDataFile;
    }
    // Otherwise, prepend the ai-pioneer-json directory
    return path.join(AI_JSON_DIR, aiDataFile);
}

// Function to check if a pioneer already exists
function checkDuplicate(name, existingPioneers) {
  return existingPioneers.some(pioneer => 
    pioneer.name.toLowerCase() === name.toLowerCase()
  );
}

// Function to generate AI research prompt
function generateResearchPrompt(pioneerName) {
  return `Research ${pioneerName}, a female STEM pioneer. Provide factual, verified information in this exact JSON format:

{
  "name": "${pioneerName}",
  "photo": "./images/placeholder-woman.svg",
  "birthDate": "YYYY",
  "deathDate": "YYYY" or "",
  "country": "Country",
  "fields": ["Field1", "Field2"],
  "roles": ["Role1", "Role2"],
  "quote": "A verified quote from this person",
  "summary": "One sentence summary",
  "shortDescription": "2-3 engaging sentences for students",
  "detailed_description": {
    "early_life": "2-3 sentences about early life",
    "stem_journey": "2-3 sentences about their STEM path",
    "challenges": "2-3 sentences about challenges faced",
    "achievements": "2-3 sentences about key achievements",
    "legacy": "2-3 sentences about lasting impact"
  },
  "achievements": ["Achievement1", "Achievement2", "Achievement3"],
  "awards": ["Award1", "Award2"],
  "publications": [{"title": "Title", "url": "URL"}],
  "education": [{"degree": "Degree", "field": "Field", "institution": "Institution"}],
  "timeline": [{"year": YYYY, "event": "Event description"}],
  "barriers": ["Barrier1", "Barrier2"],
  "impact": "One sentence about impact",
  "media": [{"type": "article", "title": "Title", "url": "URL"}],
  "references": [{"title": "Wikipedia", "url": "URL"}, {"title": "Biography.com", "url": "URL"}],
  "mentorship": "One sentence about mentorship",
  "fun_fact": "One interesting fact",
  "career_path": {
    "first_job": "First job description",
    "career_highlights": ["Highlight1", "Highlight2"],
    "advice_for_students": "One sentence of advice"
  },
  "student_resources": {
    "books_for_students": ["Book1", "Book2"],
    "websites": ["Site1", "Site2"],
    "programs": ["Program1", "Program2"],
    "advice": "One sentence of advice"
  },
  "challenges": {
    "academic": ["Challenge1"],
    "professional": ["Challenge1"],
    "personal": ["Challenge1"],
    "how_overcame": "One sentence about overcoming challenges"
  },
  "education_details": {
    "high_school": "High school info",
    "college_major": "College major",
    "key_courses": ["Course1", "Course2"],
    "study_tips": "One sentence of study advice"
  },
  "modern_impact": {
    "current_applications": "One sentence about current applications",
    "companies_using_her_work": ["Company1", "Company2"],
    "future_implications": "One sentence about future impact"
  },
  "personal_info": {
    "early_interests": ["Interest1", "Interest2"],
    "family_background": "One sentence about family",
    "hobbies": ["Hobby1", "Hobby2"],
    "personality_traits": ["Trait1", "Trait2"]
  },
  "cultural_background": {
    "heritage": "Heritage description",
    "cultural_influences": ["Influence1", "Influence2"],
    "cultural_challenges": ["Challenge1", "Challenge2"],
    "cultural_contributions": "One sentence about cultural contributions"
  }
}

IMPORTANT: Only include verified, factual information. If you cannot verify a fact, omit it or mark it as uncertain. Do not include unverified quotes or claims.`;
}

// Function to safely add a new pioneer using proper parsing
function addPioneerSafely(pioneerName, aiJsonData = null) {
  const pioneersFilePath = path.join(__dirname, '..', 'js', 'pioneers.js');
  
  try {
    // Read the current pioneers file
    let pioneersContent = fs.readFileSync(pioneersFilePath, 'utf8');
    
    // Extract the pioneers array using regex (more reliable than string manipulation)
    const arrayMatch = pioneersContent.match(/const pioneers = (\[[\s\S]*?\]);/);
    if (!arrayMatch) {
      throw new Error('Could not find pioneers array in file');
    }
    
    // Parse the existing pioneers array
    let pioneersArray;
    try {
      pioneersArray = eval(arrayMatch[1]);
    } catch (parseError) {
      throw new Error(`Failed to parse existing pioneers: ${parseError.message}`);
    }
    
    // Check for duplicates
    if (checkDuplicate(pioneerName, pioneersArray)) {
      console.log(`❌ Pioneer "${pioneerName}" already exists!`);
      return false;
    }
    
    // Create new pioneer object
    let newPioneer;
    if (aiJsonData) {
      try {
        newPioneer = JSON.parse(aiJsonData);
        if (!newPioneer.name || typeof newPioneer.name !== 'string' || !newPioneer.name.trim()) {
          throw new Error('AI JSON data must include a non-empty "name" property.');
        }
      } catch (jsonError) {
        throw new Error(`Invalid JSON data: ${jsonError.message}`);
      }
    } else {
      // Generate template if no AI data provided
      newPioneer = {
        "name": pioneerName,
        "photo": "./images/placeholder-woman.svg",
        "birthDate": "",
        "deathDate": "",
        "country": "",
        "fields": [],
        "roles": [],
        "quote": "",
        "summary": "",
        "shortDescription": "",
        "detailed_description": {
          "early_life": "",
          "stem_journey": "",
          "challenges": "",
          "achievements": "",
          "legacy": ""
        },
        "achievements": [],
        "awards": [],
        "publications": [],
        "education": [],
        "timeline": [],
        "barriers": [],
        "impact": "",
        "media": [],
        "references": [],
        "mentorship": "",
        "fun_fact": "",
        "career_path": {
          "first_job": "",
          "career_highlights": [],
          "advice_for_students": ""
        },
        "student_resources": {
          "books_for_students": [],
          "websites": [],
          "programs": [],
          "advice": ""
        },
        "challenges": {
          "academic": [],
          "professional": [],
          "personal": [],
          "how_overcame": ""
        },
        "education_details": {
          "high_school": "",
          "college_major": "",
          "key_courses": [],
          "study_tips": ""
        },
        "modern_impact": {
          "current_applications": "",
          "companies_using_her_work": [],
          "future_implications": ""
        },
        "personal_info": {
          "early_interests": [],
          "family_background": "",
          "hobbies": [],
          "personality_traits": []
        },
        "cultural_background": {
          "heritage": "",
          "cultural_influences": [],
          "cultural_challenges": [],
          "cultural_contributions": ""
        }
      };
    }
    
    // Add the new pioneer to the array
    pioneersArray.push(newPioneer);
    
    // Create the new file content by replacing the array
    const newArrayString = JSON.stringify(pioneersArray, null, 2);
    const newContent = pioneersContent.replace(
      /const pioneers = (\[[\s\S]*?\]);/,
      `const pioneers = ${newArrayString};`
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(pioneersFilePath, newContent, 'utf8');
    
    console.log(`✅ Successfully added "${pioneerName}" to pioneers!`);
    console.log(`📊 Total pioneers: ${pioneersArray.length}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error adding pioneer: ${error.message}`);
    return false;
  }
}

// Main function
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node add-pioneer-helper.js <pioneer_name> [ai_json_file]');
    console.log('');
    console.log('Examples:');
    console.log('  node add-pioneer-helper.js "Dr. Shirley Jackson"');
    console.log('  node add-pioneer-helper.js "Dr. Shirley Jackson" ai-pioneer-json/shirley-jackson.json');
    console.log('');
    console.log('If no AI JSON file is provided, a template will be generated.');
    return;
  }
  
  const pioneerName = args[0];
  const aiJsonFile = args[1];
  
  let aiJsonData = null;
  
  if (aiJsonFile) {
    try {
      const jsonFilePath = path.join(__dirname, '..', aiJsonFile);
      aiJsonData = fs.readFileSync(jsonFilePath, 'utf8');
      console.log(`�� Using AI data from: ${aiJsonFile}`);
    } catch (error) {
      console.error(`❌ Error reading AI JSON file: ${error.message}`);
      return;
    }
  } else {
    console.log('🔍 No AI JSON file provided. Generating research prompt...');
    console.log('');
    console.log('=== AI RESEARCH PROMPT ===');
    console.log(generateResearchPrompt(pioneerName));
    console.log('=== END PROMPT ===');
    console.log('');
    console.log('💡 Copy this prompt to your AI assistant, then save the response as a JSON file.');
    console.log('📁 Recommended location: ai-pioneer-json/[pioneer-name].json');
    console.log('');
    console.log('⚠️  IMPORTANT: Verify all facts before using AI-generated data!');
    return;
  }
  
  // Add the pioneer
  const success = addPioneerSafely(pioneerName, aiJsonData);
  
  if (success) {
    console.log('');
    console.log('🎉 Pioneer added successfully!');
    console.log('📝 Remember to:');
    console.log('   - Verify all facts and dates');
    console.log('   - Add an appropriate image');
    console.log('   - Test the website to ensure everything works');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  addPioneerSafely,
  checkDuplicate,
  generateResearchPrompt
}; 