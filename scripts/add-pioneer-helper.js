#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

// Read current pioneers
const pioneersFile = path.join(__dirname, '../js/pioneers.js');
const pioneersContent = fs.readFileSync(pioneersFile, 'utf8');

// Extract existing names for duplicate checking
const nameRegex = /"name":\s*"([^"]+)"/g;
const existingNames = [];
let match;
while ((match = nameRegex.exec(pioneersContent)) !== null) {
    existingNames.push(match[1]);
}

console.log(`Current pioneers: ${existingNames.length}`);
console.log('Checking for duplicates...\n');

// Function to check if name already exists
function isDuplicate(name) {
    return existingNames.some(existing => 
        existing.toLowerCase() === name.toLowerCase() ||
        existing.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(existing.toLowerCase())
    );
}

// Function to generate AI research prompt
function generateResearchPrompt(name, birthYear, deathYear, country, fields) {
    return `Research ${name} (${birthYear}-${deathYear || 'present'}) from ${country}, a pioneer in ${fields.join(' and ')}. 

Please provide the following information in JSON format:

{
  "quote": "A memorable quote from ${name}",
  "summary": "One sentence summary of major contributions",
  "shortDescription": "2-3 engaging sentences for students about their work and impact",
  "detailed_description": {
    "early_life": "2-3 sentences about their childhood, family, and early interests",
    "stem_journey": "2-3 sentences about how they got into their field",
    "challenges": "2-3 sentences about obstacles they faced as a woman in STEM",
    "achievements": "2-3 sentences about their major discoveries or contributions",
    "legacy": "2-3 sentences about their lasting impact and influence"
  },
  "achievements": [
    "3-5 specific achievements or discoveries"
  ],
  "awards": [
    "Notable awards, honors, or recognitions"
  ],
  "education": [
    {
      "degree": "Degree type",
      "field": "Field of study",
      "institution": "Institution name"
    }
  ],
  "timeline": [
    {
      "year": 1900,
      "event": "Major career event or discovery"
    }
  ],
  "barriers": [
    "2-3 specific barriers or challenges faced"
  ],
  "impact": "One sentence about their impact on their field and women in STEM",
  "mentorship": "One sentence about how they supported other women or served as a role model",
  "fun_fact": "One interesting fact that students would find engaging",
  "career_path": {
    "first_job": "Their first professional position",
    "career_highlights": [
      "2-3 major career milestones"
    ],
    "advice_for_students": "One sentence of advice for students interested in STEM"
  },
  "student_resources": {
    "books_for_students": [
      "1-2 books about them suitable for students"
    ],
    "websites": [
      "2-3 educational websites about them or their field"
    ],
    "programs": [
      "1-2 STEM programs or initiatives"
    ],
    "advice": "One sentence of study advice for students"
  },
  "challenges": {
    "academic": [
      "1-2 academic challenges they faced"
    ],
    "professional": [
      "1-2 professional challenges they faced"
    ],
    "personal": [
      "1-2 personal challenges they overcame"
    ],
    "how_overcame": "One sentence about how they overcame challenges"
  },
  "education_details": {
    "high_school": "One sentence about their high school experience",
    "college_major": "Their college major or field of study",
    "key_courses": [
      "2-3 key courses or subjects they studied"
    ],
    "study_tips": "One sentence of study advice based on their experience"
  },
  "modern_impact": {
    "current_applications": "One sentence about how their work is used today",
    "companies_using_her_work": [
      "1-2 types of companies or institutions using their work"
    ],
    "future_implications": "One sentence about future applications of their work"
  },
  "personal_info": {
    "early_interests": [
      "2-3 interests they had as a child or young person"
    ],
    "family_background": "One sentence about their family background",
    "hobbies": [
      "1-2 hobbies or interests outside of work"
    ],
    "personality_traits": [
      "2-3 personality traits that defined them"
    ]
  },
  "cultural_background": {
    "heritage": "One sentence about their cultural heritage",
    "cultural_influences": [
      "1-2 cultural influences on their work"
    ],
    "cultural_challenges": [
      "1-2 cultural barriers they faced"
    ],
    "cultural_contributions": "One sentence about their cultural contributions"
  }
}

Focus on factual information that would be engaging for students. Make the content inspiring and educational.`;
}

// Function to generate pioneer template with AI-researched content
function generatePioneerTemplate(name, birthYear, deathYear, country, fields, aiData) {
    const nameForUrl = name.replace(/\s+/g, '_');
    const nameForUrlLower = name.toLowerCase().replace(/\s+/g, '-');
    
    return `  {
    "name": "${name}",
    "photo": "./images/placeholder-woman.svg",
    "birthDate": "${birthYear}",
    "deathDate": "${deathYear || ''}",
    "country": "${country}",
    "fields": [
      ${fields.map(f => `"${f}"`).join(',\n      ')}
    ],
    "roles": [
      "Scientist"
    ],
    "quote": "${aiData.quote || `"Inspirational quote from ${name}"`}",
    "summary": "${aiData.summary || `Brief summary of ${name}'s major contributions`}",
    "shortDescription": "${aiData.shortDescription || `${name} was a pioneering ${fields[0].toLowerCase()} who made groundbreaking discoveries in ${fields.join(' and ').toLowerCase()}. Her work revolutionized our understanding of ${fields[0].toLowerCase()} and opened new possibilities for future generations. Despite facing challenges as a woman in STEM, she persevered and became a role model for students everywhere. Her innovative approach and determination continue to inspire young scientists today.`}",
    "detailed_description": {
      "early_life": "${aiData.detailed_description?.early_life || `Born in ${birthYear}, ${name} showed exceptional talent and curiosity from an early age. Growing up in ${country}, she faced both opportunities and challenges that shaped her scientific journey.`}",
      "stem_journey": "${aiData.detailed_description?.stem_journey || `${name}'s path into ${fields[0].toLowerCase()} began with a passion for understanding how things work. She pursued education and research opportunities, often breaking barriers for women in her field.`}",
      "challenges": "${aiData.detailed_description?.challenges || `As a woman in ${fields[0].toLowerCase()}, ${name} faced gender discrimination and limited opportunities. She overcame societal expectations and proved that women could excel in STEM fields.`}",
      "achievements": "${aiData.detailed_description?.achievements || `${name} made significant contributions to ${fields.join(' and ').toLowerCase()}, including groundbreaking discoveries and innovations that advanced our understanding of these fields.`}",
      "legacy": "${aiData.detailed_description?.legacy || `${name}'s work continues to influence modern ${fields[0].toLowerCase()} and inspires new generations of scientists. Her determination and achievements opened doors for women in STEM.`}"
    },
    "achievements": [
      ${(aiData.achievements || ["Major achievement 1", "Major achievement 2", "Major achievement 3"]).map(a => `"${a}"`).join(',\n      ')}
    ],
    "awards": [
      ${(aiData.awards || ["Notable award or recognition"]).map(a => `"${a}"`).join(',\n      ')}
    ],
    "publications": [
      {
        "title": "Learn more about ${name}",
        "url": "https://en.wikipedia.org/wiki/${nameForUrl}"
      }
    ],
    "education": [
      ${(aiData.education || [{
        "degree": "Degree type",
        "field": fields[0],
        "institution": "Institution name"
      }]).map(edu => `{
        "degree": "${edu.degree}",
        "field": "${edu.field}",
        "institution": "${edu.institution}"
      }`).join(',\n      ')}
    ],
    "timeline": [
      ${(aiData.timeline || [
        { year: parseInt(birthYear) + 20, event: "Early career milestone" },
        { year: parseInt(birthYear) + 30, event: "Major discovery or achievement" }
      ]).map(t => `{
        "year": ${t.year},
        "event": "${t.event}"
      }`).join(',\n      ')}
    ],
    "barriers": [
      ${(aiData.barriers || ["Gender discrimination in STEM fields", "Limited opportunities for women in science"]).map(b => `"${b}"`).join(',\n      ')}
    ],
    "impact": "${aiData.impact || `${name}'s work transformed our understanding of ${fields[0].toLowerCase()} and inspired countless women to pursue careers in STEM.`}",
    "media": [
      {
        "type": "article",
        "title": "${name}: Pioneer in ${fields[0]}",
        "url": "https://www.biography.com/scientist/${nameForUrlLower}"
      }
    ],
    "references": [
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/${nameForUrl}"
      },
      {
        "title": "Biography.com",
        "url": "https://www.biography.com/scientist/${nameForUrlLower}"
      }
    ],
    "mentorship": "${aiData.mentorship || `${name} supported and encouraged other women in STEM, serving as a mentor and role model for future generations.`}",
    "fun_fact": "${aiData.fun_fact || `Interesting fact about ${name} that students would find engaging`}",
    "career_path": {
      "first_job": "${aiData.career_path?.first_job || "First professional position"}",
      "career_highlights": [
        ${(aiData.career_path?.career_highlights || ["Career highlight 1", "Career highlight 2"]).map(h => `"${h}"`).join(',\n        ')}
      ],
      "advice_for_students": "${aiData.career_path?.advice_for_students || `Follow your curiosity and don't let anyone tell you what you can't do. Your gender doesn't determine your abilities in STEM fields.`}"
    },
    "student_resources": {
      "books_for_students": [
        ${(aiData.student_resources?.books_for_students || [`Book about ${name} for students`]).map(b => `"${b}"`).join(',\n        ')}
      ],
      "websites": [
        ${(aiData.student_resources?.websites || ["Educational website 1", "STEM resource website"]).map(w => `"${w}"`).join(',\n        ')}
      ],
      "programs": [
        ${(aiData.student_resources?.programs || ["STEM summer programs", "Women in science initiatives"]).map(p => `"${p}"`).join(',\n        ')}
      ],
      "advice": "${aiData.student_resources?.advice || `Start with what excites you most and pursue it with passion. Science needs diverse perspectives and your unique viewpoint matters.`}"
    },
    "challenges": {
      "academic": [
        ${(aiData.challenges?.academic || ["Limited educational opportunities for women"]).map(c => `"${c}"`).join(',\n        ')}
      ],
      "professional": [
        ${(aiData.challenges?.professional || ["Gender discrimination in the workplace"]).map(c => `"${c}"`).join(',\n        ')}
      ],
      "personal": [
        ${(aiData.challenges?.personal || ["Balancing career and personal life"]).map(c => `"${c}"`).join(',\n        ')}
      ],
      "how_overcame": "${aiData.challenges?.how_overcame || `Focused on her research and built supportive networks with other scientists`}"
    },
    "education_details": {
      "high_school": "${aiData.education_details?.high_school || `High school background in ${fields[0].toLowerCase()}`}",
      "college_major": "${aiData.education_details?.college_major || fields[0]}",
      "key_courses": [
        ${(aiData.education_details?.key_courses || [fields[0], "Mathematics", "Research Methods"]).map(c => `"${c}"`).join(',\n        ')}
      ],
      "study_tips": "${aiData.education_details?.study_tips || `Connect theoretical concepts to real-world applications and never stop asking questions`}"
    },
    "modern_impact": {
      "current_applications": "${aiData.modern_impact?.current_applications || `Her discoveries continue to influence modern ${fields[0].toLowerCase()} research and applications`}",
      "companies_using_her_work": [
        ${(aiData.modern_impact?.companies_using_her_work || ["Research institutions", "Technology companies"]).map(c => `"${c}"`).join(',\n        ')}
      ],
      "future_implications": "${aiData.modern_impact?.future_implications || `Her work provides foundation for future innovations in ${fields[0].toLowerCase()}`}"
    },
    "personal_info": {
      "early_interests": [
        ${(aiData.personal_info?.early_interests || [fields[0], "Science", "Mathematics"]).map(i => `"${i}"`).join(',\n        ')}
      ],
      "family_background": "${aiData.personal_info?.family_background || `Family background and early influences`}",
      "hobbies": [
        ${(aiData.personal_info?.hobbies || ["Scientific reading", "Research"]).map(h => `"${h}"`).join(',\n        ')}
      ],
      "personality_traits": [
        ${(aiData.personal_info?.personality_traits || ["Curious", "Determined", "Innovative", "Persistent"]).map(t => `"${t}"`).join(',\n        ')}
      ]
    },
    "cultural_background": {
      "heritage": "${aiData.cultural_background?.heritage || `Cultural heritage and background`}",
      "cultural_influences": [
        ${(aiData.cultural_background?.cultural_influences || ["Cultural influence 1"]).map(i => `"${i}"`).join(',\n        ')}
      ],
      "cultural_challenges": [
        ${(aiData.cultural_background?.cultural_challenges || ["Cultural barrier 1"]).map(c => `"${c}"`).join(',\n        ')}
      ],
      "cultural_contributions": "${aiData.cultural_background?.cultural_contributions || `Brought unique cultural perspective to ${fields[0].toLowerCase()} research and innovation`}"
    }
  }`;
}

// Function to add pioneer to file
function addPioneer(name, birthYear, deathYear, country, fields) {
    if (isDuplicate(name)) {
        console.log(`❌ "${name}" already exists in the list!`);
        return false;
    }

    console.log(`✅ "${name}" is unique - generating AI research prompt...`);
    
    const researchPrompt = generateResearchPrompt(name, birthYear, deathYear, country, fields);
    
    console.log('\n🔍 AI RESEARCH PROMPT:');
    console.log('='.repeat(50));
    console.log(researchPrompt);
    console.log('='.repeat(50));
    
    console.log('\n📝 INSTRUCTIONS:');
    console.log('1. Copy the research prompt above');
    console.log('2. Use an AI assistant (like ChatGPT, Claude, or Gemini) to research this pioneer');
    console.log('3. Ask the AI to provide the information in the exact JSON format shown');
    console.log('4. Copy the AI response and save it as a JSON file');
    console.log('5. Run this script again with the --ai-data flag:');
    console.log(`   node add-pioneer-helper.js "${name}" "${birthYear}" "${deathYear}" "${country}" "${fields.join(',')}" --ai-data ai-research.json`);
    
    return true;
}

// Function to add pioneer with AI data
function addPioneerWithAIData(name, birthYear, deathYear, country, fields, aiDataFile) {
    if (isDuplicate(name)) {
        console.log(`❌ "${name}" already exists in the list!`);
        return false;
    }

    console.log(`✅ "${name}" is unique - adding with AI research data...`);
    
    let aiData = {};
    try {
        const aiDataContent = fs.readFileSync(aiDataFile, 'utf8');
        aiData = JSON.parse(aiDataContent);
        console.log('✅ Successfully loaded AI research data');
    } catch (error) {
        console.log('❌ Error loading AI data file:', error.message);
        return false;
    }
    
    const newPioneer = generatePioneerTemplate(name, birthYear, deathYear, country, fields, aiData);
    
    // Find the insertion point (before the closing bracket)
    const insertionPoint = pioneersContent.lastIndexOf('  }');
    const newContent = pioneersContent.slice(0, insertionPoint) + 
                      ',\n' + newPioneer + 
                      pioneersContent.slice(insertionPoint);
    
    fs.writeFileSync(pioneersFile, newContent);
    console.log(`✅ Successfully added ${name} to pioneers list with AI research!`);
    console.log(`📝 Pioneer profile includes unique, factual content based on AI research`);
    return true;
}

// Function to update an existing pioneer entry with new data
function updatePioneerWithAIData(name, birthYear, deathYear, country, fields, aiDataFile) {
    // Load the pioneers.js file as JS
    let pioneersText = fs.readFileSync(pioneersFile, 'utf8');
    let pioneersArr;
    let arrStart, arrEnd;
    try {
        // Parse the file with acorn
        const ast = acorn.parse(pioneersText, { ecmaVersion: 2020, sourceType: 'script' });
        // Find the VariableDeclaration for 'pioneers'
        let arrNode;
        ast.body.forEach(node => {
            if (node.type === 'VariableDeclaration') {
                node.declarations.forEach(decl => {
                    if (decl.id.name === 'pioneers' && decl.init.type === 'ArrayExpression') {
                        arrNode = decl.init;
                        arrStart = decl.init.start;
                        arrEnd = decl.init.end;
                    }
                });
            }
        });
        if (!arrNode) throw new Error('Could not find pioneers array in AST');
        // Extract the array text
        const pioneersArrText = pioneersText.slice(arrStart, arrEnd);
        // Use eval in a sandboxed way to parse the array (since it's JS, not JSON)
        pioneersArr = eval('(' + pioneersArrText + ')');
    } catch (e) {
        console.log('❌ Could not parse pioneers.js as JS array using acorn:', e.message);
        return false;
    }
    let aiData = {};
    try {
        const aiDataContent = fs.readFileSync(aiDataFile, 'utf8');
        aiData = JSON.parse(aiDataContent);
        console.log('✅ Successfully loaded AI research data');
    } catch (error) {
        console.log('❌ Error loading AI data file:', error.message);
        return false;
    }
    // Find the pioneer by name (case-insensitive, trimmed)
    const idx = pioneersArr.findIndex(p => p.name && p.name.trim().toLowerCase() === name.trim().toLowerCase());
    if (idx === -1) {
        console.log(`❌ Could not find pioneer named "${name}" to update.`);
        return false;
    }
    // Generate new object from AI data
    const newPioneerObj = JSON.parse(generatePioneerTemplate(name, birthYear, deathYear, country, fields, aiData).replace(/^[^{]*({[\s\S]*})[^}]*$/, '$1'));
    pioneersArr[idx] = newPioneerObj;
    // Rebuild the file
    const beforeArr = pioneersText.slice(0, arrStart);
    const afterArr = pioneersText.slice(arrEnd);
    const arrString = JSON.stringify(pioneersArr, null, 2);
    const newFile = beforeArr + arrString + afterArr;
    fs.writeFileSync(pioneersFile, newFile);
    console.log(`✅ Successfully updated ${name} in pioneers list with AI research!`);
    return true;
}

// Command line interface
if (process.argv.length < 6) {
    console.log('Usage: node add-pioneer-helper.js "Name" "BirthYear" "DeathYear" "Country" "Field1,Field2" [--ai-data filename.json]');
    console.log('Example: node add-pioneer-helper.js "Dr. Shirley Jackson" "1946" "" "United States" "Physics,Technology"');
    console.log('');
    console.log('Modes:');
    console.log('1. Generate research prompt: Just provide the basic info');
    console.log('2. Add with AI data: Include --ai-data flag with JSON file');
    console.log('');
    console.log('The script will:');
    console.log('- Generate an AI research prompt for unique, factual content');
    console.log('- Create complete pioneer profiles with detailed sections');
    console.log('- Include engaging descriptions for students');
    process.exit(1);
}

const name = process.argv[2];
const birthYear = process.argv[3];
const deathYear = process.argv[4];
const country = process.argv[5];
const fields = process.argv[6].split(',').map(f => f.trim());

// Check if AI data file is provided
const aiDataIndex = process.argv.indexOf('--ai-data');
if (aiDataIndex !== -1 && process.argv[aiDataIndex + 1]) {
    const aiDataFile = process.argv[aiDataIndex + 1];
    if (isDuplicate(name)) {
        // Update existing pioneer
        updatePioneerWithAIData(name, birthYear, deathYear, country, fields, aiDataFile);
    } else {
        // Add new pioneer
        addPioneerWithAIData(name, birthYear, deathYear, country, fields, aiDataFile);
    }
} else {
    addPioneer(name, birthYear, deathYear, country, fields);
} 