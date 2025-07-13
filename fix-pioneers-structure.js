const fs = require('fs');

// Read the pioneers.js file
const filePath = 'js/pioneers.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find the problematic section around line 10282
const problematicSection = content.substring(10280, 10300);
console.log('Problematic section:', problematicSection);

// Find the start of the pioneers array
const arrayStart = content.indexOf('const pioneers = [');
if (arrayStart === -1) {
    console.log('Could not find pioneers array start');
    process.exit(1);
}

// Extract everything before the pioneers array
const beforeArray = content.substring(0, arrayStart + 17); // Include "const pioneers = ["

// Find the end of the pioneers array
const arrayEnd = content.lastIndexOf('];');
if (arrayEnd === -1) {
    console.log('Could not find pioneers array end');
    process.exit(1);
}

// Extract everything after the pioneers array
const afterArray = content.substring(arrayEnd);

// Extract the pioneers array content
let arrayContent = content.substring(arrayStart + 17, arrayEnd);

// Fix the malformed section by finding and removing the broken part
// Look for the pattern that's causing the issue
const brokenPattern = /  },\s*{\s*\s*{/;
arrayContent = arrayContent.replace(brokenPattern, '  },\n  {');

// Also fix any other structural issues
arrayContent = arrayContent.replace(/,\s*,\s*/g, ',');
arrayContent = arrayContent.replace(/}\s*,\s*{\s*}/g, '}, {');

// Reconstruct the file
const fixedContent = beforeArray + arrayContent + afterArray;

// Write the fixed content back
fs.writeFileSync(filePath, fixedContent, 'utf8');
console.log('Fixed pioneers.js structure'); 