const fs = require('fs');
const path = require('path');
var parser = require('xml2json');

const pathToCompiledPages = path.join(__dirname, '../src/_assets/pages');
const pathToCompiledPosts = path.join(__dirname, '../src/_assets/posts');
const ignoredFiles = [
  'gitignore',
  'pages.json',
  'posts.json'
];

fs.readFile(`${pathToCompiledPages}/pages.json`, (err, data) => {
    if(err) console.error(err);

    const json = JSON.parse(data);
    json.Pages.forEach(page => {
        console.log(page.link);
    });
});
