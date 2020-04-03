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


// create the sitemap directory
const baseSitemapDir = 'src/_assets/sitemaps';
fs.mkdirSync(baseSitemapDir, {
    recursive: true
}, error => {
    if (error) {
        console.error("An error occurred creating the directory", error);
    } else {
        console.log("Directory created successfully!");
    }
});


const baseUrl = 'https://www.chrisperko.net/';

const date = new Date().toISOString();

// create the index sitemap
let indexSitemap = builder.create('root')
    .ele('sitemapindex', { 'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9' })
    .ele('sitemap')
    .ele('loc', null, 'https://chrisperko.net/post-sitemap.xml').up()
    .ele('lastmod', null, date).up().up()
    .ele('sitemap')
    .ele('loc', null, 'https://chrisperko.net/page-sitemap.xml').up()
    .ele('lastmod', null, date).up().up()
    .ele('sitemap')
    .ele('loc', null, 'https://chrisperko.net/tag-sitemap.xml').up()
    .ele('lastmod', null, date)
    .end({ pretty: true });

fs.writeFile(`${baseSitemapDir}/sitemap.xml`, indexSitemap, 'utf8', err => {
    if (err) console.log(err);
});

fs.readFile(`${pathToCompiledPages}/pages.json`, (err, data) => {
    if (err) console.error(err);

    let postSitemap = builder.create('root')
        .ele('urlset', { 'xmlns': baseUrl });

    const json = JSON.parse(data);
    json.Pages.forEach(page => {
        postSitemap.ele('url')
            .ele('loc', null, `${baseUrl}${page.link}`);
    });

    postSitemap.end({ pretty: true });

    fs.writeFile(`${baseSitemapDir}/post-sitemap.xml`, postSitemap, 'utf8', err => {
        if (err) console.log(err);
    });
});

// example tag url http://localhost:4100/blog/tag/devexpress
