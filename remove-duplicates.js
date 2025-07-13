const fs = require('fs');

// Read the pioneers.js file
const filePath = 'js/pioneers.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find the duplicate entries
const asimaChatterjee1Start = content.indexOf('"name": "Asima Chatterjee",', 0);
const asimaChatterjee2Start = content.indexOf('"name": "Asima Chatterjee",', asimaChatterjee1Start + 1);

const janakiAmmal1Start = content.indexOf('"name": "Janaki Ammal",', 0);
const janakiAmmal2Start = content.indexOf('"name": "Janaki Ammal",', janakiAmmal1Start + 1);

// Find the end of the second Asima Chatterjee entry (before the next pioneer)
const asimaChatterjee2End = content.indexOf('  },', asimaChatterjee2Start);
const asimaChatterjee2EndComplete = content.indexOf('  },', asimaChatterjee2End + 4);

// Find the end of the second Janaki Ammal entry (before the next pioneer)
const janakiAmmal2End = content.indexOf('  },', janakiAmmal2Start);
const janakiAmmal2EndComplete = content.indexOf('  },', janakiAmmal2End + 4);

console.log('Found duplicate entries:');
console.log('Asima Chatterjee 1:', asimaChatterjee1Start);
console.log('Asima Chatterjee 2:', asimaChatterjee2Start);
console.log('Janaki Ammal 1:', janakiAmmal1Start);
console.log('Janaki Ammal 2:', janakiAmmal2Start);

// Remove the second Asima Chatterjee entry
if (asimaChatterjee2Start !== -1 && asimaChatterjee2EndComplete !== -1) {
    const beforeAsima2 = content.substring(0, asimaChatterjee2Start);
    const afterAsima2 = content.substring(asimaChatterjee2EndComplete + 4);
    content = beforeAsima2 + afterAsima2;
    console.log('Removed second Asima Chatterjee entry');
}

// Remove the second Janaki Ammal entry
if (janakiAmmal2Start !== -1 && janakiAmmal2EndComplete !== -1) {
    const beforeJanaki2 = content.substring(0, janakiAmmal2Start);
    const afterJanaki2 = content.substring(janakiAmmal2EndComplete + 4);
    content = beforeJanaki2 + afterJanaki2;
    console.log('Removed second Janaki Ammal entry');
}

// Write the cleaned content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Duplicates removed successfully!'); 