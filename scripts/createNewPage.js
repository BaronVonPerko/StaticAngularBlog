const fs = require('fs');
const path = require('path');

const filename = process.argv[2];

const filePath = path.join(__dirname, `../src/assets/pages/${filename}.md`);

const meta = `---
title:
inMenu: false
menuTitle:
icon:
---`;

fs.writeFile(filePath, meta, 'utf8', err => {
  if (err) {
    console.error("An error occurred", err);
  }
});
