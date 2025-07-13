const pioneers = require('./js/pioneers.js');

console.log('Checking pioneers data integrity...\n');

let allValid = true;
let missingShortDesc = [];
let missingDetailedDesc = [];
let notVerified = [];

pioneers.forEach((pioneer, index) => {
  console.log(`\n--- ${pioneer.name} ---`);
  
  // Check shortDescription
  if (!pioneer.shortDescription || pioneer.shortDescription.trim() === '') {
    console.log('❌ Missing or empty shortDescription');
    missingShortDesc.push(pioneer.name);
    allValid = false;
  } else {
    console.log('✅ Has shortDescription');
  }
  
  // Check detailed_description
  if (!pioneer.detailed_description || typeof pioneer.detailed_description !== 'object') {
    console.log('❌ Missing or invalid detailed_description');
    missingDetailedDesc.push(pioneer.name);
    allValid = false;
  } else {
    const requiredSections = ['early_life', 'stem_journey', 'challenges', 'achievements', 'legacy'];
    const missingSections = requiredSections.filter(section => 
      !pioneer.detailed_description[section] || pioneer.detailed_description[section].trim() === ''
    );
    
    if (missingSections.length > 0) {
      console.log(`❌ Missing detailed_description sections: ${missingSections.join(', ')}`);
      missingDetailedDesc.push(pioneer.name);
      allValid = false;
    } else {
      console.log('✅ Has complete detailed_description');
    }
  }
  
  // Check verified status
  if (!pioneer.verified) {
    console.log('❌ Not verified');
    notVerified.push(pioneer.name);
    allValid = false;
  } else {
    console.log('✅ Verified');
  }
});

console.log('\n' + '='.repeat(50));
console.log('SUMMARY:');
console.log('='.repeat(50));

if (missingShortDesc.length > 0) {
  console.log(`\n❌ Pioneers missing shortDescription (${missingShortDesc.length}):`);
  missingShortDesc.forEach(name => console.log(`  - ${name}`));
}

if (missingDetailedDesc.length > 0) {
  console.log(`\n❌ Pioneers missing detailed_description (${missingDetailedDesc.length}):`);
  missingDetailedDesc.forEach(name => console.log(`  - ${name}`));
}

if (notVerified.length > 0) {
  console.log(`\n❌ Pioneers not verified (${notVerified.length}):`);
  notVerified.forEach(name => console.log(`  - ${name}`));
}

if (allValid) {
  console.log('\n🎉 ALL PIONEERS PASS VERIFICATION!');
  console.log(`Total pioneers checked: ${pioneers.length}`);
} else {
  console.log('\n⚠️  Some pioneers need attention');
  console.log(`Total pioneers checked: ${pioneers.length}`);
} 