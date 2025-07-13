const fs = require('fs');

// Read the pioneers.js file
const filePath = 'js/pioneers.js';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Starting simple duplicate removal...');

// Find the second occurrence of each duplicate
const asima1Start = content.indexOf('"name": "Asima Chatterjee",', 0);
const asima2Start = content.indexOf('"name": "Asima Chatterjee",', asima1Start + 1);

const janaki1Start = content.indexOf('"name": "Janaki Ammal",', 0);
const janaki2Start = content.indexOf('"name": "Janaki Ammal",', janaki1Start + 1);

console.log('Found duplicates:');
console.log('Asima 1:', asima1Start);
console.log('Asima 2:', asima2Start);
console.log('Janaki 1:', janaki1Start);
console.log('Janaki 2:', janaki2Start);

// For each duplicate, find the complete object and remove it
// Look for the pattern: }, followed by { followed by "name": "Asima Chatterjee"
const asima2Pattern = content.substring(asima2Start - 10, asima2Start + 50);
console.log('Asima 2 pattern:', asima2Pattern);

// Find the start of the second Asima object (look backwards for the opening brace)
let asima2ObjStart = asima2Start;
while (asima2ObjStart > 0 && content.charAt(asima2ObjStart) !== '{') {
    asima2ObjStart--;
}

// Find the end of the second Asima object (look for the closing brace and comma)
let asima2ObjEnd = asima2Start;
let braceCount = 0;
let foundStart = false;

for (let i = asima2ObjStart; i < content.length; i++) {
    if (content.charAt(i) === '{') {
        braceCount++;
        foundStart = true;
    }
    if (content.charAt(i) === '}') {
        braceCount--;
        if (foundStart && braceCount === 0) {
            // Check if the next character is a comma
            if (content.charAt(i + 1) === ',') {
                asima2ObjEnd = i + 1; // Include the comma
            } else {
                asima2ObjEnd = i;
            }
            break;
        }
    }
}

console.log('Asima 2 object boundaries:', asima2ObjStart, 'to', asima2ObjEnd);

// Remove the second Asima entry
if (asima2ObjStart !== -1 && asima2ObjEnd !== -1) {
    const beforeAsima2 = content.substring(0, asima2ObjStart);
    const afterAsima2 = content.substring(asima2ObjEnd + 1);
    content = beforeAsima2 + afterAsima2;
    console.log('Removed second Asima Chatterjee entry');
}

// Now do the same for Janaki Ammal
const janaki2Pattern = content.substring(janaki2Start - 10, janaki2Start + 50);
console.log('Janaki 2 pattern:', janaki2Pattern);

// Find the start of the second Janaki object
let janaki2ObjStart = janaki2Start;
while (janaki2ObjStart > 0 && content.charAt(janaki2ObjStart) !== '{') {
    janaki2ObjStart--;
}

// Find the end of the second Janaki object
let janaki2ObjEnd = janaki2Start;
braceCount = 0;
foundStart = false;

for (let i = janaki2ObjStart; i < content.length; i++) {
    if (content.charAt(i) === '{') {
        braceCount++;
        foundStart = true;
    }
    if (content.charAt(i) === '}') {
        braceCount--;
        if (foundStart && braceCount === 0) {
            // Check if the next character is a comma
            if (content.charAt(i + 1) === ',') {
                janaki2ObjEnd = i + 1; // Include the comma
            } else {
                janaki2ObjEnd = i;
            }
            break;
        }
    }
}

console.log('Janaki 2 object boundaries:', janaki2ObjStart, 'to', janaki2ObjEnd);

// Remove the second Janaki entry
if (janaki2ObjStart !== -1 && janaki2ObjEnd !== -1) {
    const beforeJanaki2 = content.substring(0, janaki2ObjStart);
    const afterJanaki2 = content.substring(janaki2ObjEnd + 1);
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
    console.log('Error details:', error.stack);
} 