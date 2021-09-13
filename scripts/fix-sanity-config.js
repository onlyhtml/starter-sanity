const fs = require('fs');
const CONFIG = 'sanity.json';
const sanityConfig = JSON.parse(fs.readFileSync(CONFIG));
sanityConfig.parts = [];
fs.writeFileSync(CONFIG, JSON.stringify(sanityConfig, undefined, 4));
