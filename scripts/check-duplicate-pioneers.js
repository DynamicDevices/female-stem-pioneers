#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const pioneersDir = path.join(__dirname, '../js/pioneers/');
const files = fs.readdirSync(pioneersDir).filter(f => f.endsWith('.json') && f !== 'index.json');

const nameCounts = {};
const fileMap = {};

for (const file of files) {
  const filePath = path.join(pioneersDir, file);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const name = data.name;
    if (name) {
      nameCounts[name] = (nameCounts[name] || 0) + 1;
      if (!fileMap[name]) fileMap[name] = [];
      fileMap[name].push(file);
    }
  } catch (e) {
    console.error(`Error parsing ${file}:`, e.message);
    process.exit(2);
  }
}

const duplicates = Object.entries(nameCounts)
  .filter(([_, count]) => count > 1)
  .map(([name]) => ({ name, files: fileMap[name] }));

if (duplicates.length > 0) {
  console.error('❌ Duplicate pioneer names found:');
  duplicates.forEach(d => {
    console.error(`- ${d.name}: ${d.files.join(', ')}`);
  });
  process.exit(1);
} else {
  console.log('✅ No duplicate pioneer names found.');
  process.exit(0);
}
