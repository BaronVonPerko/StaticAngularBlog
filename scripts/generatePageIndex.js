const fs = require('fs');
const path = require('path');

const pathToPages = path.join(__dirname, '../src/assets/pages');

fs.readdir(pathToPages, (err, files) => {
    if (err) console.log(err);

    let fileArray = [];

    files.forEach(file => {
        fileArray.push({ filename: file });
    });

    fs.writeFile(`${pathToPages}/pages.json`, JSON.stringify(fileArray), 'utf8', err => {
        if (err) console.log(err);
    });
});
