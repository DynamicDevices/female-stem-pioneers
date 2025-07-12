#!/usr/bin/env node

/**
 * Pioneer Image Fetcher
 * 
 * This script retrieves portrait images for each pioneer in the dataset.
 * It uses multiple sources to find high-quality images:
 * 1. Wikimedia Commons API (primary source)
 * 2. Google Custom Search API (fallback)
 * 3. Unsplash API (additional fallback)
 * 
 * Usage: node fetch-pioneer-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const CONFIG = {
  // Google Custom Search API (optional - requires API key)
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || '',
  GOOGLE_CSE_ID: process.env.GOOGLE_CSE_ID || '',
  
  // Unsplash API (optional - requires API key)
  UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY || '',
  
  // Output settings
  OUTPUT_DIR: './images',
  IMAGE_FORMATS: ['jpg', 'jpeg', 'png', 'webp'],
  MIN_IMAGE_SIZE: 200, // minimum width/height in pixels
  MAX_IMAGE_SIZE: 2000, // maximum width/height in pixels
};

// Pioneer names from the dataset
const PIONEERS = ["Ada Lovelace",
  "Marie Curie", 
  "Katherine Johnson",
  "Grace Hopper",
  "Rosalind Franklin",
  "Chien-Shiung Wu",
  "Dorothy Vaughan",
  "Mae Jemison",
];

/**
 * Make HTTP request and return promise
 */
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const requestOptions = {
      ...options,
      headers: {
        'User-Agent': 'Pioneer-Image-Fetcher/1.0',
        ...options.headers
      }
    };

    const req = protocol.request(url, requestOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ statusCode: res.statusCode, data });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(10000, () => req.destroy());
    req.end();
  });
}

/**
 * Search Wikimedia Commons for images
 */
async function searchWikimedia(name) {
  try {
    const searchTerm = encodeURIComponent(`${name} portrait`);
    const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&srnamespace=6&srlimit=10`;
    
    const response = await makeRequest(url);
    const data = JSON.parse(response.data);
    
    if (data.query && data.query.search) {
      const images = data.query.search.map(item => ({
        title: item.title,
        snippet: item.snippet
      }));
      
      // Get image info for the first few results
      const imageTitles = images.slice(0, 5).map(img => img.title);
      const imageInfoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${imageTitles.join('|')}&prop=imageinfo&iiprop=url|size|mime&format=json`;
      
      const infoResponse = await makeRequest(imageInfoUrl);
      const infoData = JSON.parse(infoResponse.data);
      
      const results = [];
      if (infoData.query && infoData.query.pages) {
        for (const pageId in infoData.query.pages) {
          const page = infoData.query.pages[pageId];
          if (page.imageinfo && page.imageinfo[0]) {
            const imgInfo = page.imageinfo[0];
            const width = imgInfo.width || 0;
            const height = imgInfo.height || 0;
            
            // Filter by size and format
            if (width >= CONFIG.MIN_IMAGE_SIZE && 
                height >= CONFIG.MIN_IMAGE_SIZE &&
                width <= CONFIG.MAX_IMAGE_SIZE &&
                height <= CONFIG.MAX_IMAGE_SIZE) {
              
              const format = path.extname(imgInfo.url).toLowerCase().substring(1);
              if (CONFIG.IMAGE_FORMATS.includes(format)) {
                results.push({
                  url: imgInfo.url,
                  width: width,
                  height: height,
                  format: format,
                  source: 'Wikimedia Commons',
                  title: page.title
                });
              }
            }
          }
        }
      }
      
      return results;
    }
  } catch (error) {
    console.error(`Error searching Wikimedia for ${name}:`, error.message);
  }
  
  return [];
}

/**
 * Search Google Custom Search API (requires API key)
 */
async function searchGoogle(name) {
  if (!CONFIG.GOOGLE_API_KEY || !CONFIG.GOOGLE_CSE_ID) {
    return [];
  }
  
  try {
    const searchTerm = encodeURIComponent(`${name} portrait scientist`);
    const url = `https://www.googleapis.com/customsearch/v1?key=${CONFIG.GOOGLE_API_KEY}&cx=${CONFIG.GOOGLE_CSE_ID}&q=${searchTerm}&searchType=image&imgSize=medium&num=10`;
    
    const response = await makeRequest(url);
    const data = JSON.parse(response.data);
    
    if (data.items) {
      return data.items.map(item => ({
        url: item.link,
        width: parseInt(item.image?.width) || 0,
        height: parseInt(item.image?.height) || 0,
        format: path.extname(item.link).toLowerCase().substring(1),
        source: 'Google Custom Search',
        title: item.title
      })).filter(img => 
        img.width >= CONFIG.MIN_IMAGE_SIZE && 
        img.height >= CONFIG.MIN_IMAGE_SIZE &&
        CONFIG.IMAGE_FORMATS.includes(img.format)
      );
    }
  } catch (error) {
    console.error(`Error searching Google for ${name}:`, error.message);
  }
  
  return [];
}

/**
 * Search Unsplash API (requires API key)
 */
async function searchUnsplash(name) {
  if (!CONFIG.UNSPLASH_API_KEY) {
    return [];
  }
  
  try {
    const searchTerm = encodeURIComponent(`${name} portrait`);
    const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=10&orientation=portrait`;
    
    const response = await makeRequest(url, {
      headers: {
        'Authorization': `Client-ID ${CONFIG.UNSPLASH_API_KEY}`
      }
    });
    const data = JSON.parse(response.data);
    
    if (data.results) {
      return data.results.map(item => ({
        url: item.urls.regular,
        width: item.width,
        height: item.height,
        format: 'jpg',
        source: 'Unsplash',
        title: item.description || item.alt_description || name,
        photographer: item.user?.name
      })).filter(img => 
        img.width >= CONFIG.MIN_IMAGE_SIZE && 
        img.height >= CONFIG.MIN_IMAGE_SIZE
      );
    }
  } catch (error) {
    console.error(`Error searching Unsplash for ${name}:`, error.message);
  }
  
  return [];
}

/**
 * Download image and save to file
 */
async function downloadImage(url, filename) {
  try {
    const response = await makeRequest(url);
    const filepath = path.join(CONFIG.OUTPUT_DIR, filename);
    
    fs.writeFileSync(filepath, response.data);
    console.log(`✓ Downloaded: ${filename}`);
    return filepath;
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error.message);
    return null;
  }
}

/**
 * Generate filename for pioneer
 */
function generateFilename(pioneerName, index = 0) {
  const cleanName = pioneerName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
  const suffix = index > 0 ? `-${index}` : '';
  return `${cleanName}${suffix}.jpg`;
}

/**
 * Main function to fetch images for all pioneers
 */
async function fetchPioneerImages() {
  console.log('🚀 Starting Pioneer Image Fetcher...\n');
  
  // Create output directory
  if (!fs.existsSync(CONFIG.OUTPUT_DIR)) {
    fs.mkdirSync(CONFIG.OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${CONFIG.OUTPUT_DIR}\n`);
  }
  
  const results = {};
  
  for (const pioneer of PIONEERS) {
    console.log(`🔍 Searching for images of: ${pioneer}`);
    
    const images = [];
    
    // Try Wikimedia Commons first (best for historical figures)
    console.log('  📚 Searching Wikimedia Commons...');
    const wikimediaImages = await searchWikimedia(pioneer);
    images.push(...wikimediaImages);
    
    // Try Google Custom Search if API key is available
    if (CONFIG.GOOGLE_API_KEY) {
      console.log('  🔍 Searching Google Custom Search...');
      const googleImages = await searchGoogle(pioneer);
      images.push(...googleImages);
    }
    
    // Try Unsplash if API key is available
    if (CONFIG.UNSPLASH_API_KEY) {
      console.log('  📸 Searching Unsplash...');
      const unsplashImages = await searchUnsplash(pioneer);
      images.push(...unsplashImages);
    }
    
    // Remove duplicates based on URL
    const uniqueImages = images.filter((img, index, self) => 
      index === self.findIndex(t => t.url === img.url)
    );
    
    console.log(`  Found ${uniqueImages.length} unique images`);
    
    if (uniqueImages.length > 0) {
      // Sort by quality (prefer Wikimedia Commons, then by size)
      uniqueImages.sort((a, b) => {
        if (a.source === 'Wikimedia Commons' && b.source !== 'Wikimedia Commons') return -1;
        if (b.source === 'Wikimedia Commons' && a.source !== 'Wikimedia Commons') return 1;
        return (b.width * b.height) - (a.width * a.height);
      });
      
      // Download the best image
      const bestImage = uniqueImages[0];
      const filename = generateFilename(pioneer);
      const filepath = await downloadImage(bestImage.url, filename);
      
      if (filepath) {
        results[pioneer] = {
          filename: filename,
          filepath: filepath,
          url: bestImage.url,
          source: bestImage.source,
          width: bestImage.width,
          height: bestImage.height,
          title: bestImage.title
        };
      }
    } else {
      console.log(`  ⚠️  No suitable images found for ${pioneer}`);
    }
    
    console.log('');
  }
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    total_pioneers: PIONEERS.length,
    successful_downloads: Object.keys(results).length,
    results: results,
    config: {
      output_dir: CONFIG.OUTPUT_DIR,
      min_image_size: CONFIG.MIN_IMAGE_SIZE,
      max_image_size: CONFIG.MAX_IMAGE_SIZE,
      image_formats: CONFIG.IMAGE_FORMATS
    }
  };
  
  const reportPath = path.join(CONFIG.OUTPUT_DIR, 'download-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('📊 Download Report:');
  console.log(`  Total pioneers: ${PIONEERS.length}`);
  console.log(`  Successful downloads: ${Object.keys(results).length}`);
  console.log(`  Report saved to: ${reportPath}`);
  
  if (Object.keys(results).length > 0) {
    console.log('\n📋 Downloaded Images:');
    for (const [pioneer, result] of Object.entries(results)) {
      console.log(`  ${pioneer}: ${result.filename} (${result.width}x${result.height})`);
    }
  }
  
  return results;
}

/**
 * Update pioneers.js with new image URLs
 */
function updatePioneersData(results) {
  try {
    const pioneersPath = path.join(__dirname, 'js', 'pioneers.js');
    let pioneersContent = fs.readFileSync(pioneersPath, 'utf8');
    
    for (const [pioneer, result] of Object.entries(results)) {
      // Create relative URL for the downloaded image (for web display)
      const relativeUrl = `./images/${result.filename}`;
      
      // Find and replace the photo URL for this pioneer
      const namePattern = new RegExp(`name:\\s*"${pioneer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?photo:\\s*"[^"]*"`, 'g');
      
      pioneersContent = pioneersContent.replace(namePattern, (match) => {
        return match.replace(/photo:\s*"[^"]*"/, `photo: "${relativeUrl}"`);
      });
    }
    
    fs.writeFileSync(pioneersPath, pioneersContent);
    console.log('\n✅ Updated pioneers.js with new image URLs');
  } catch (error) {
    console.error('❌ Error updating pioneers.js:', error.message);
  }
}

// Run the script
if (require.main === module) {
  fetchPioneerImages()
    .then(results => {
      if (Object.keys(results).length > 0) {
        updatePioneersData(results);
      }
      console.log('\n🎉 Image fetching complete!');
    })
    .catch(error => {
      console.error('❌ Script failed:', error.message);
      process.exit(1);
    });
}

module.exports = {
  fetchPioneerImages,
  searchWikimedia,
  searchGoogle,
  searchUnsplash,
  CONFIG
}; 