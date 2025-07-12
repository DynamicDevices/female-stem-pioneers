const fs = require('fs');

// Read the languages.js file
const content = fs.readFileSync('./js/languages.js', 'utf8');

// Find the start and end of the languages array
const startIndex = content.indexOf('var languages = [') + 'var languages = ['.length;
const endIndex = content.lastIndexOf('];');

// Extract the array content
let arrayContent = content.substring(startIndex, endIndex);
arrayContent = '[' + arrayContent + ']';

// Remove trailing comma before closing ]
arrayContent = arrayContent.replace(/,\s*\]$/, ']');

try {
    // Parse as JSON to get the languages array
    const languages = JSON.parse(arrayContent);
    
    console.log(`Processing ${languages.length} languages...`);
    
    // Fix escaping in all code fields
    languages.forEach((lang, index) => {
        if (lang.code) {
            // First, unescape any over-escaped quotes
            let fixedCode = lang.code.replace(/\\\"/g, '"');
            
            // Then properly escape for JSON
            fixedCode = fixedCode
                .replace(/\n/g, '\\n')  // Escape newlines
                .replace(/"/g, '\\"');   // Escape double quotes
            
            lang.code = fixedCode;
        }
    });
    
    // Rebuild the file content
    const header = content.substring(0, startIndex);
    const footer = content.substring(endIndex);
    
    // Convert back to JSON string with proper formatting
    const languagesJson = JSON.stringify(languages, null, 4);
    
    // Create the fixed file content
    const fixedContent = header + languagesJson + footer;
    
    // Write the fixed file
    fs.writeFileSync('./js/languages.js', fixedContent);
    
    console.log('✅ Successfully fixed JSON escaping in all code fields');
    console.log(`📁 Updated js/languages.js with ${languages.length} languages`);
    
} catch (error) {
    console.error('❌ Error processing languages:', error.message);
    process.exit(1);
} 