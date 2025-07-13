const fs = require('fs');
const path = require('path');

// Function to sanitize filename
function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Function to add a new pioneer to the system
function addPioneer(pioneerData) {
  const pioneersDir = 'js/pioneers';
  const indexFile = path.join(pioneersDir, 'index.json');
  
  // Ensure pioneers directory exists
  if (!fs.existsSync(pioneersDir)) {
    fs.mkdirSync(pioneersDir, { recursive: true });
  }
  
  // Create filename for the pioneer
  const filename = sanitizeFilename(pioneerData.name) + '.json';
  const pioneerFile = path.join(pioneersDir, filename);
  
  // Check if pioneer already exists
  if (fs.existsSync(pioneerFile)) {
    console.error(`Pioneer ${pioneerData.name} already exists in ${filename}`);
    return false;
  }
  
  // Write pioneer file
  try {
    fs.writeFileSync(pioneerFile, JSON.stringify(pioneerData, null, 2));
    console.log(`Created pioneer file: ${filename}`);
  } catch (error) {
    console.error(`Failed to create pioneer file: ${error.message}`);
    return false;
  }
  
  // Update index file
  try {
    let index = { total: 0, pioneers: [] };
    if (fs.existsSync(indexFile)) {
      index = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
    }
    
    // Add new pioneer to index
    index.pioneers.push({
      name: pioneerData.name,
      filename: filename
    });
    index.total = index.pioneers.length;
    
    // Write updated index
    fs.writeFileSync(indexFile, JSON.stringify(index, null, 2));
    console.log(`Updated index file with ${pioneerData.name}`);
    
    return true;
  } catch (error) {
    console.error(`Failed to update index: ${error.message}`);
    // Clean up the pioneer file if index update failed
    if (fs.existsSync(pioneerFile)) {
      fs.unlinkSync(pioneerFile);
    }
    return false;
  }
}

// Function to remove a pioneer from the system
function removePioneer(pioneerName) {
  const pioneersDir = 'js/pioneers';
  const indexFile = path.join(pioneersDir, 'index.json');
  
  if (!fs.existsSync(indexFile)) {
    console.error('Index file not found');
    return false;
  }
  
  try {
    const index = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
    const pioneerEntry = index.pioneers.find(p => p.name === pioneerName);
    
    if (!pioneerEntry) {
      console.error(`Pioneer ${pioneerName} not found in index`);
      return false;
    }
    
    // Remove pioneer file
    const pioneerFile = path.join(pioneersDir, pioneerEntry.filename);
    if (fs.existsSync(pioneerFile)) {
      fs.unlinkSync(pioneerFile);
      console.log(`Removed pioneer file: ${pioneerEntry.filename}`);
    }
    
    // Update index
    index.pioneers = index.pioneers.filter(p => p.name !== pioneerName);
    index.total = index.pioneers.length;
    
    fs.writeFileSync(indexFile, JSON.stringify(index, null, 2));
    console.log(`Removed ${pioneerName} from index`);
    
    return true;
  } catch (error) {
    console.error(`Failed to remove pioneer: ${error.message}`);
    return false;
  }
}

// Function to list all pioneers
function listPioneers() {
  const indexFile = 'js/pioneers/index.json';
  
  if (!fs.existsSync(indexFile)) {
    console.log('No pioneers found');
    return;
  }
  
  try {
    const index = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
    console.log(`Total pioneers: ${index.total}`);
    console.log('\nPioneers:');
    index.pioneers.forEach((pioneer, i) => {
      console.log(`${i + 1}. ${pioneer.name} (${pioneer.filename})`);
    });
  } catch (error) {
    console.error(`Failed to read index: ${error.message}`);
  }
}

// Example usage
if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'add':
      if (process.argv.length < 4) {
        console.log('Usage: node add-pioneer-to-new-system.js add <pioneer-name>');
        process.exit(1);
      }
      const pioneerName = process.argv[3];
      console.log(`Adding pioneer: ${pioneerName}`);
      // You would need to provide the full pioneer data here
      break;
      
    case 'remove':
      if (process.argv.length < 4) {
        console.log('Usage: node add-pioneer-to-new-system.js remove <pioneer-name>');
        process.exit(1);
      }
      const nameToRemove = process.argv[3];
      removePioneer(nameToRemove);
      break;
      
    case 'list':
      listPioneers();
      break;
      
    default:
      console.log('Usage:');
      console.log('  node add-pioneer-to-new-system.js list');
      console.log('  node add-pioneer-to-new-system.js remove <pioneer-name>');
      console.log('  node add-pioneer-to-new-system.js add <pioneer-name>');
  }
}

module.exports = { addPioneer, removePioneer, listPioneers, sanitizeFilename }; 