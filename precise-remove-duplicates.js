const fs = require('fs');

// Read the pioneers.js file
const filePath = 'js/pioneers.js';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Starting precise duplicate removal...');

// Split content into lines for precise line-based editing
const lines = content.split('\n');

// Find the line numbers for duplicates
let asimaLines = [];
let janakiLines = [];

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"name": "Asima Chatterjee"')) {
        asimaLines.push(i);
    }
    if (lines[i].includes('"name": "Janaki Ammal"')) {
        janakiLines.push(i);
    }
}

console.log('Found Asima Chatterjee at lines:', asimaLines);
console.log('Found Janaki Ammal at lines:', janakiLines);

// Remove the second occurrence of each (keep the first, remove the second)
if (asimaLines.length > 1) {
    const secondAsimaStart = asimaLines[1];
    // Find the start of the object (look for the opening brace)
    let objStart = secondAsimaStart;
    while (objStart > 0 && !lines[objStart].trim().startsWith('{')) {
        objStart--;
    }
    
    // Find the end of the object (look for the closing brace and comma)
    let objEnd = secondAsimaStart;
    let braceCount = 0;
    let foundStart = false;
    
    for (let i = objStart; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('{')) {
            braceCount++;
            foundStart = true;
        }
        if (line.trim().startsWith('}')) {
            braceCount--;
            if (foundStart && braceCount === 0) {
                objEnd = i;
                break;
            }
        }
    }
    
    console.log(`Removing Asima duplicate from line ${objStart} to ${objEnd}`);
    lines.splice(objStart, objEnd - objStart + 1);
}

if (janakiLines.length > 1) {
    const secondJanakiStart = janakiLines[1];
    // Find the start of the object (look for the opening brace)
    let objStart = secondJanakiStart;
    while (objStart > 0 && !lines[objStart].trim().startsWith('{')) {
        objStart--;
    }
    
    // Find the end of the object (look for the closing brace and comma)
    let objEnd = secondJanakiStart;
    let braceCount = 0;
    let foundStart = false;
    
    for (let i = objStart; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('{')) {
            braceCount++;
            foundStart = true;
        }
        if (line.trim().startsWith('}')) {
            braceCount--;
            if (foundStart && braceCount === 0) {
                objEnd = i;
                break;
            }
        }
    }
    
    console.log(`Removing Janaki duplicate from line ${objStart} to ${objEnd}`);
    lines.splice(objStart, objEnd - objStart + 1);
}

// Reconstruct the file
const newContent = lines.join('\n');

// Write the cleaned content back to the file
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Duplicates removed successfully!');

// Verify the file is still valid JavaScript
try {
    require('vm').runInNewContext(newContent);
    console.log('✅ File is valid JavaScript');
} catch (error) {
    console.log('❌ File has syntax errors:', error.message);
    console.log('Restoring from backup...');
    // Restore from backup if there are errors
    const backupContent = fs.readFileSync('js/pioneers.js.backup', 'utf8');
    fs.writeFileSync(filePath, backupContent, 'utf8');
} 