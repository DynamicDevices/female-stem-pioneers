const fs = require('fs');
const path = require('path');

console.log('Cleaning up duplicate pioneers...');

const indexFile = 'js/pioneers/index.json';

if (!fs.existsSync(indexFile)) {
  console.error('Index file not found');
  process.exit(1);
}

try {
  const index = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
  const pioneers = index.pioneers;
  
  console.log(`Found ${pioneers.length} pioneers in index`);
  
  // Find duplicates
  const seen = new Set();
  const duplicates = [];
  const uniquePioneers = [];
  
  pioneers.forEach(pioneer => {
    if (seen.has(pioneer.name)) {
      duplicates.push(pioneer);
      console.log(`Duplicate found: ${pioneer.name} (${pioneer.filename})`);
    } else {
      seen.add(pioneer.name);
      uniquePioneers.push(pioneer);
    }
  });
  
  console.log(`\nFound ${duplicates.length} duplicates`);
  
  if (duplicates.length === 0) {
    console.log('No duplicates found!');
    return;
  }
  
  // Remove duplicate files
  duplicates.forEach(duplicate => {
    const filePath = path.join('js/pioneers', duplicate.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Removed duplicate file: ${duplicate.filename}`);
    }
  });
  
  // Update index with unique pioneers only
  const updatedIndex = {
    total: uniquePioneers.length,
    pioneers: uniquePioneers
  };
  
  fs.writeFileSync(indexFile, JSON.stringify(updatedIndex, null, 2));
  console.log(`\nUpdated index with ${uniquePioneers.length} unique pioneers`);
  
  console.log('\nCleanup complete!');
  
} catch (error) {
  console.error('Error during cleanup:', error.message);
} 