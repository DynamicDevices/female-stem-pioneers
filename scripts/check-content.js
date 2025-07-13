#!/usr/bin/env node

/**
 * Content Quality Check Script
 * 
 * This script checks for placeholder content and ensures content quality standards.
 */

const fs = require('fs');

// Check for placeholder content
const content = fs.readFileSync('js/pioneers.js', 'utf8');
if (content.match(/placeholder(?!-woman\.svg)|to be added|coming soon|lorem ipsum/i)) {
  console.error('❌ Found placeholder content');
  process.exit(1);
}
console.log('✅ No placeholder content found');

// Check description lengths using eval (safe in this context)
try {
  const arrayStart = content.indexOf('const pioneers = [');
  const arrayEnd = content.lastIndexOf('];');
  if (arrayStart === -1 || arrayEnd === -1) {
    console.error('❌ Could not find pioneers array');
    process.exit(1);
  }
  
  const arrayContent = content.substring(arrayStart + 'const pioneers = '.length, arrayEnd + 1);
  const pioneers = eval(arrayContent);
  
  const issues = [];
  pioneers.forEach((p, idx) => {
    if (p.shortDescription && p.shortDescription.length < 50) {
      issues.push(`Pioneer #${idx + 1} (${p.name}): shortDescription too short (${p.shortDescription.length} chars)`);
    }
    if (p.summary && p.summary.length < 20) {
      issues.push(`Pioneer #${idx + 1} (${p.name}): summary too short (${p.summary.length} chars)`);
    }
  });
  
  if (issues.length > 0) {
    console.log('❌ Content quality issues:');
    issues.forEach(issue => console.log('  -', issue));
    process.exit(1);
  }
  
  console.log('✅ All descriptions meet quality standards');
} catch (error) {
  console.error('❌ Error parsing pioneers array:', error.message);
  process.exit(1);
} 