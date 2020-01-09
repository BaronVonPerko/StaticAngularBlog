const fs = require('fs');
const path = require('path');
const metaParser = require('markdown-yaml-metadata-parser');

const pathToPages = path.join(__dirname, '../src/assets/pages');
const ignoredFiles = [
    'gitignore',
    'pages.json'
];

fs.readdir(pathToPages, (err, files) => {
    if (err) console.log(err);

    let fileArray = [];

    files.filter(file => !file.includes(ignoredFiles))
        .forEach(file => {
            const contents = fs.readFileSync(path.join(__dirname, `../src/assets/pages/${file}`), 'utf8');
            const meta = metaParser(contents).metadata;

            fileArray.push({ filename: file, inMenu: meta.inMenu, link: file.replace('.md', ''), title: meta.title });
        });

    const data = {
        Pages: fileArray
    }

    fs.writeFile(`${pathToPages}/pages.json`, JSON.stringify(data), 'utf8', err => {
        if (err) console.log(err);
    });
});
