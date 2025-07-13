#!/usr/bin/env node

/**
 * Robust Pioneer Data Validation Script
 *
 * This script loads the pioneers from individual JSON files in js/pioneers/,
 * checks for required fields, and reports errors with line numbers and entry names.
 */

const fs = require('fs');
const path = require('path');

const pioneersDir = path.join(__dirname, '..', 'js', 'pioneers');
const indexPath = path.join(pioneersDir, 'index.json');

const pioneers = [];

try {
  // Read the index file to get the list of pioneers
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  const index = JSON.parse(indexContent);
  
  // Load each pioneer from their individual JSON file
  for (const pioneerEntry of index.pioneers) {
    const pioneerPath = path.join(pioneersDir, pioneerEntry.filename);
    const pioneerContent = fs.readFileSync(pioneerPath, 'utf8');
    const pioneer = JSON.parse(pioneerContent);
    pioneers.push(pioneer);
  }
  
  if (!Array.isArray(pioneers)) throw new Error('Pioneers data is not an array');
} catch (error) {
  console.error('❌ Error loading pioneers data:', error.message);
  process.exit(1);
}

const requiredFields = [
  'name', 'photo', 'birthDate', 'country', 'fields', 'roles', 'summary', 'shortDescription'
];

const errors = [];

pioneers.forEach((pioneer, idx) => {
  requiredFields.forEach(field => {
    // Allow empty string for 'photo' field (fallback icon)
    if (field === 'photo') {
      if (!Object.prototype.hasOwnProperty.call(pioneer, field) || pioneer[field] == null) {
        errors.push(`Pioneer #${idx + 1} (${pioneer.name || 'Unknown'}): Missing required field 'photo'`);
      }
    } else {
      if (!Object.prototype.hasOwnProperty.call(pioneer, field) || pioneer[field] === '' || pioneer[field] == null) {
        errors.push(`Pioneer #${idx + 1} (${pioneer.name || 'Unknown'}): Missing required field '${field}'`);
      }
    }
  });
  // Check for placeholder/invalid content
  if (typeof pioneer.shortDescription === 'string' && pioneer.shortDescription.match(/placeholder|to be added|coming soon|lorem ipsum/i)) {
    errors.push(`Pioneer #${idx + 1} (${pioneer.name}): shortDescription contains placeholder text`);
  }
  if (typeof pioneer.summary === 'string' && pioneer.summary.match(/placeholder|to be added|coming soon|lorem ipsum/i)) {
    errors.push(`Pioneer #${idx + 1} (${pioneer.name}): summary contains placeholder text`);
  }
  // Check image existence
  if (typeof pioneer.photo === 'string' && !pioneer.photo.startsWith('data:')) {
    const imagePath = path.join(__dirname, '..', pioneer.photo.replace('./', ''));
    if (!fs.existsSync(imagePath)) {
      errors.push(`Pioneer #${idx + 1} (${pioneer.name}): Image file not found: ${pioneer.photo}`);
    }
  }
});

if (errors.length > 0) {
  console.log('❌ Validation errors:');
  errors.forEach(e => console.log('  -', e));
  process.exit(1);
} else {
  console.log('✅ All pioneer data is valid!');
} 