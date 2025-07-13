const fs = require('fs');
const path = require('path');

console.log('Cleaning up old pioneer files...');

// Files to remove (after backup)
const filesToRemove = [
  'js/pioneers.js',
  'js/pioneers2.js'
];

// Create backup directory
const backupDir = 'backup-old-pioneers';
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

// Backup and remove old files
filesToRemove.forEach(file => {
  if (fs.existsSync(file)) {
    const backupPath = path.join(backupDir, path.basename(file));
    fs.copyFileSync(file, backupPath);
    fs.unlinkSync(file);
    console.log(`Backed up and removed: ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('\nOld files backed up to:', backupDir);
console.log('You can now safely delete the backup directory if everything works correctly.');
console.log('\nNew file structure:');
console.log('- js/pioneers/ (directory with individual JSON files)');
console.log('- js/pioneers/index.json (index of all pioneers)');
console.log('- js/pioneers-loader.js (new loader system)'); 