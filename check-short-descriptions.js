const pioneers = require('./js/pioneers.js');

console.log('Checking short description lengths...\n');

let shortDescriptions = [];
let tooShort = [];

pioneers.forEach((pioneer, index) => {
  const wordCount = pioneer.shortDescription.split(' ').length;
  const charCount = pioneer.shortDescription.length;
  
  console.log(`${pioneer.name}: ${wordCount} words, ${charCount} characters`);
  
  if (wordCount < 50) {
    tooShort.push({
      name: pioneer.name,
      current: pioneer.shortDescription,
      wordCount: wordCount,
      charCount: charCount
    });
  }
  
  shortDescriptions.push({
    name: pioneer.name,
    wordCount: wordCount,
    charCount: charCount
  });
});

console.log('\n' + '='.repeat(50));
console.log('SHORT DESCRIPTIONS ANALYSIS:');
console.log('='.repeat(50));

const avgWords = shortDescriptions.reduce((sum, p) => sum + p.wordCount, 0) / shortDescriptions.length;
const avgChars = shortDescriptions.reduce((sum, p) => sum + p.charCount, 0) / shortDescriptions.length;

console.log(`\n📊 STATISTICS:`);
console.log(`Average words: ${avgWords.toFixed(1)}`);
console.log(`Average characters: ${avgChars.toFixed(1)}`);
console.log(`Total pioneers: ${shortDescriptions.length}`);

if (tooShort.length > 0) {
  console.log(`\n⚠️  TOO SHORT (less than 50 words):`);
  tooShort.forEach(p => {
    console.log(`\n${p.name}:`);
    console.log(`  Words: ${p.wordCount}, Characters: ${p.charCount}`);
    console.log(`  Current: "${p.current}"`);
  });
} else {
  console.log(`\n✅ All short descriptions are adequately long!`);
}

// Show the shortest descriptions
const sorted = shortDescriptions.sort((a, b) => a.wordCount - b.wordCount);
console.log(`\n📝 SHORTEST DESCRIPTIONS:`);
sorted.slice(0, 10).forEach((p, i) => {
  console.log(`${i + 1}. ${p.name}: ${p.wordCount} words`);
}); 