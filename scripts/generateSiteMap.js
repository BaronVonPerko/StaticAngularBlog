const fs = require('fs');
const path = require('path');
const builder = require('xmlbuilder');

const pathToCompiledPages = path.join(__dirname, '../src/_assets/pages');
const pathToCompiledPosts = path.join(__dirname, '../src/_assets/posts');
const ignoredFiles = [
    'gitignore',
    'pages.json',
    'posts.json'
];

const baseUrl = 'https://www.chrisperko.net/';

fs.readFile(`${pathToCompiledPages}/pages.json`, (err, data) => {
    if (err) console.error(err);

    let xml = builder.create('root')
        .ele('urlset', { 'xmlns': baseUrl });

    const json = JSON.parse(data);
    json.Pages.forEach(page => {
        xml.ele('url')
            .ele('loc', null, `${baseUrl}${page.link}`);
    });

    xml.end({ pretty: true });

    fs.writeFile('sitemap.xml', xml, 'utf8', err => {
        if (err) console.log(err);
    });
});
