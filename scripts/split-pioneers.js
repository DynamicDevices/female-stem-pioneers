const fs = require('fs');
const path = require('path');

// Function to sanitize filename
function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Function to extract pioneers from a file
function extractPioneers(filePath, arrayName) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find the array start
    const arrayStart = content.indexOf(`const ${arrayName} = [`);
    if (arrayStart === -1) {
      console.error(`Could not find array ${arrayName} in ${filePath}`);
      return [];
    }
    
    // Find the array end
    const arrayEnd = content.indexOf('];', arrayStart);
    if (arrayEnd === -1) {
      console.error(`Could not find array end in ${filePath}`);
      return [];
    }
    
    // Extract the array content
    const arrayContent = content.substring(arrayStart + `const ${arrayName} = [`.length, arrayEnd);
    
    // Split into individual objects
    const pioneers = [];
    let braceCount = 0;
    let startIndex = -1;
    let inString = false;
    let escapeNext = false;
    
    for (let i = 0; i < arrayContent.length; i++) {
      const char = arrayContent[i];
      
      if (escapeNext) {
        escapeNext = false;
        continue;
      }
      
      if (char === '\\') {
        escapeNext = true;
        continue;
      }
      
      if (char === '"' && !escapeNext) {
        inString = !inString;
        continue;
      }
      
      if (!inString) {
        if (char === '{') {
          if (braceCount === 0) {
            startIndex = i;
          }
          braceCount++;
        } else if (char === '}') {
          braceCount--;
          if (braceCount === 0 && startIndex !== -1) {
            const pioneerJson = arrayContent.substring(startIndex, i + 1);
            try {
              const pioneer = JSON.parse(pioneerJson);
              pioneers.push(pioneer);
            } catch (e) {
              console.error(`Failed to parse pioneer JSON: ${e.message}`);
            }
            startIndex = -1;
          }
        }
      }
    }
    
    return pioneers;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

// Function to save individual pioneer files
function savePioneerFiles(pioneers, outputDir) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const savedFiles = [];
  
  for (const pioneer of pioneers) {
    const filename = sanitizeFilename(pioneer.name) + '.json';
    const filepath = path.join(outputDir, filename);
    
    try {
      fs.writeFileSync(filepath, JSON.stringify(pioneer, null, 2));
      savedFiles.push({
        name: pioneer.name,
        filename: filename
      });
      console.log(`Saved: ${filename}`);
    } catch (error) {
      console.error(`Failed to save ${filename}:`, error.message);
    }
  }
  
  return savedFiles;
}

// Function to create an index file
function createIndexFile(savedFiles, outputDir) {
  const indexContent = {
    total: savedFiles.length,
    pioneers: savedFiles.map(file => ({
      name: file.name,
      filename: file.filename
    }))
  };
  
  const indexPath = path.join(outputDir, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(indexContent, null, 2));
  console.log(`Created index file: ${indexPath}`);
}

// Main execution
console.log('Starting pioneer file split...');

// Extract pioneers from both files
const pioneers1 = extractPioneers('js/pioneers.js', 'pioneers');
const pioneers2 = extractPioneers('js/pioneers2.js', 'pioneers2');

console.log(`Found ${pioneers1.length} pioneers in pioneers.js`);
console.log(`Found ${pioneers2.length} pioneers in pioneers2.js`);

// Combine all pioneers
const allPioneers = [...pioneers1, ...pioneers2];
console.log(`Total pioneers: ${allPioneers.length}`);

// Check for duplicates
const names = allPioneers.map(p => p.name);
const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
if (duplicates.length > 0) {
  console.warn('Found duplicate names:', [...new Set(duplicates)]);
}

// Save individual files
const outputDir = 'js/pioneers';
const savedFiles = savePioneerFiles(allPioneers, outputDir);

// Create index file
createIndexFile(savedFiles, outputDir);

console.log(`\nSplit complete! Created ${savedFiles.length} individual pioneer files in ${outputDir}/`);
console.log('You can now delete the original pioneers.js and pioneers2.js files if desired.'); 