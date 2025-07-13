const fs = require('fs');
const index = JSON.parse(fs.readFileSync('./js/pioneers/index.json', 'utf8'));
const existingFiles = fs.readdirSync('./js/pioneers').filter(f => f.endsWith('.json') && f !== 'index.json');

console.log('Index claims', index.total, 'pioneers');
console.log('Found', existingFiles.length, 'pioneer files');

const missingFiles = index.pioneers.filter(p => !existingFiles.includes(p.filename));
const extraFiles = existingFiles.filter(f => !index.pioneers.some(p => p.filename === f));

if (missingFiles.length > 0) {
  console.log('\nMissing files:');
  missingFiles.forEach(f => console.log(`- ${f.filename} (for ${f.name})`));
  console.log('\nTotal missing:', missingFiles.length);
} else {
  console.log('\nAll index files exist!');
}

if (extraFiles.length > 0) {
  console.log('\nFiles that exist but aren\'t in index:');
  extraFiles.forEach(f => console.log(`- ${f}`));
  console.log('\nTotal extra:', extraFiles.length);
} else {
  console.log('\nNo extra files found!');
} 