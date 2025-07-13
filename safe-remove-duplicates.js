const fs = require('fs');

// Read the pioneers.js file
const filePath = 'js/pioneers.js';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Starting safe duplicate removal...');

// Find the exact positions of duplicate entries
const asima1Start = content.indexOf('"name": "Asima Chatterjee",', 0);
const asima2Start = content.indexOf('"name": "Asima Chatterjee",', asima1Start + 1);

const janaki1Start = content.indexOf('"name": "Janaki Ammal",', 0);
const janaki2Start = content.indexOf('"name": "Janaki Ammal",', janaki1Start + 1);

console.log('Found duplicate entries:');
console.log('Asima 1:', asima1Start);
console.log('Asima 2:', asima2Start);
console.log('Janaki 1:', janaki1Start);
console.log('Janaki 2:', janaki2Start);

// Find the start of each object (the opening brace)
const asima2ObjStart = content.lastIndexOf('  {', asima2Start);
const janaki2ObjStart = content.lastIndexOf('  {', janaki2Start);

// Find the end of each object (the closing brace and comma)
let asima2ObjEnd = content.indexOf('  },', asima2ObjStart);
// Find the complete object end
while (asima2ObjEnd !== -1) {
    const nextChar = content.charAt(asima2ObjEnd + 4);
    if (nextChar === '\n' || nextChar === ' ') {
        break;
    }
    asima2ObjEnd = content.indexOf('  },', asima2ObjEnd + 4);
}
asima2ObjEnd += 4; // Include the comma

let janaki2ObjEnd = content.indexOf('  },', janaki2ObjStart);
// Find the complete object end
while (janaki2ObjEnd !== -1) {
    const nextChar = content.charAt(janaki2ObjEnd + 4);
    if (nextChar === '\n' || nextChar === ' ') {
        break;
    }
    janaki2ObjEnd = content.indexOf('  },', janaki2ObjEnd + 4);
}
janaki2ObjEnd += 4; // Include the comma

console.log('Object boundaries:');
console.log('Asima 2 object:', asima2ObjStart, 'to', asima2ObjEnd);
console.log('Janaki 2 object:', janaki2ObjStart, 'to', janaki2ObjEnd);

// Remove the second Asima Chatterjee entry
if (asima2ObjStart !== -1 && asima2ObjEnd !== -1) {
    const beforeAsima2 = content.substring(0, asima2ObjStart);
    const afterAsima2 = content.substring(asima2ObjEnd);
    content = beforeAsima2 + afterAsima2;
    console.log('Removed second Asima Chatterjee entry');
}

// Remove the second Janaki Ammal entry
if (janaki2ObjStart !== -1 && janaki2ObjEnd !== -1) {
    const beforeJanaki2 = content.substring(0, janaki2ObjStart);
    const afterJanaki2 = content.substring(janaki2ObjEnd);
    content = beforeJanaki2 + afterJanaki2;
    console.log('Removed second Janaki Ammal entry');
}

// Write the cleaned content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Duplicates removed successfully!');

// Verify the file is still valid JavaScript
try {
    require('vm').runInNewContext(content);
    console.log('✅ File is valid JavaScript');
} catch (error) {
    console.log('❌ File has syntax errors:', error.message);
} 