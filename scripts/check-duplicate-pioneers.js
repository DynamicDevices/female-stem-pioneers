#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const pioneersPath = path.join(__dirname, '../js/pioneers.js');
const pioneersModule = require(pioneersPath);
const pioneers = Array.isArray(pioneersModule) ? pioneersModule : (pioneersModule.pioneers || pioneersModule);

const nameCounts = {};
for (const p of pioneers) {
  nameCounts[p.name] = (nameCounts[p.name] || 0) + 1;
}

const duplicates = Object.entries(nameCounts).filter(([_, count]) => count > 1).map(([name]) => name);

if (duplicates.length > 0) {
  console.error('❌ Duplicate pioneer names found:', duplicates);
  process.exit(1);
} else {
  console.log('✅ No duplicate pioneer names found.');
  process.exit(0);
} 