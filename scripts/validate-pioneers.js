#!/usr/bin/env node

/**
 * Robust Pioneer Data Validation Script
 *
 * This script loads the pioneers array from js/pioneers.js as a module,
 * checks for required fields, and reports errors with line numbers and entry names.
 */

const fs = require('fs');
const path = require('path');

const pioneersPath = path.join(__dirname, '..', 'js', 'pioneers.js');
let pioneers;

try {
  // Read the file and extract the array content
  const content = fs.readFileSync(pioneersPath, 'utf8');
  const arrayStart = content.indexOf('const pioneers = [');
  const arrayEnd = content.lastIndexOf('];');
  if (arrayStart === -1 || arrayEnd === -1) throw new Error('Could not find pioneers array boundaries');
  const arrayContent = content.substring(arrayStart + 'const pioneers = '.length, arrayEnd + 1); // include opening [ and closing ]
  const tempFile = `module.exports = ${arrayContent}`;
  const tempPath = path.join(__dirname, 'temp-validate-pioneers.js');
  fs.writeFileSync(tempPath, tempFile);
  pioneers = require(tempPath);
  fs.unlinkSync(tempPath);
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
    if (!Object.prototype.hasOwnProperty.call(pioneer, field) || pioneer[field] === '' || pioneer[field] == null) {
      errors.push(`Pioneer #${idx + 1} (${pioneer.name || 'Unknown'}): Missing required field '${field}'`);
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