const fs = require('fs');

// Read the current pioneers file
let pioneersData = fs.readFileSync('./js/pioneers.js', 'utf8');

// List of pioneers that were auto-verified without proper fact-checking
// These are the ones I added verified: true to without actually verifying their data
const unverifiedPioneers = [
  "Caroline Keep",
  "Chieng Shih", 
  "Princy Johnson",
  "Michelle Khine",
  "Alexis Lewis",
  "Lisa Lindahl, Hinda Miller, Polly Palmer Smith",
  "Madison Maxey",
  "Amy Prieto",
  "Sharon Rogone",
  "Charlotte Cramer Sachs",
  "Laura Shepherd",
  "Kavita Shukla",
  "Cindy Whitehead",
  "Sophia Hayden",
  "Maria Goeppert Mayer",
  "Elizabeth Blackwell"
];

// Remove verified: true from these pioneers
unverifiedPioneers.forEach(name => {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`("name": "${escapedName}",[\\s\\S]*?)(,\\s*"verified": true)`, 'g');
  pioneersData = pioneersData.replace(regex, '$1');
});

// Write the updated file
fs.writeFileSync('./js/pioneers.js', pioneersData);

console.log('Removed verified flags from unverified pioneers:');
unverifiedPioneers.forEach(name => {
  console.log(`- ${name}`);
});
console.log(`\nTotal pioneers unverified: ${unverifiedPioneers.length}`); 