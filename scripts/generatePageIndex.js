const fs = require('fs');
const path = require('path');
const metaParser = require('markdown-yaml-metadata-parser');
const pathToPages = path.join(__dirname, '../src/assets/pages');
const pathToPosts = path.join(__dirname, '../src/assets/posts');
const pathToPortfolio = path.join(__dirname, '../src/assets/portfolio');
const pathToCompiledPages = path.join(__dirname, '../src/_assets/pages');
const pathToCompiledPosts = path.join(__dirname, '../src/_assets/posts');
const pathToCompiledPortfolio = path.join(__dirname, '../src/_assets/portfolio');
const ignoredFiles = [
  'gitignore',
  'pages.json',
  'posts.json'
];

// create compiled pages directory
fs.mkdirSync(pathToCompiledPages, {
  recursive: true
}, error => {
  if (error) {
    console.error("An error occurred creating the pages directory", error);
  }
});

// create compiled posts directory
fs.mkdirSync(pathToCompiledPosts, {
  recursive: true
}, error => {
  if (error) {
    console.error("An error occurred creating the posts directory", error);
  }
});

// create compiled portfolio directory
fs.mkdirSync(pathToCompiledPortfolio, {
  recursive: true
}, error => {
  if (error) {
    console.error("An error occurred creating the portfolio directory", error);
  }
})

// compile the pages
fs.readdir(pathToPages, (err, files) => {
  if (err) console.error("Error reading pages", err);

  let fileArray = [];

  files.filter(file => !file.includes(ignoredFiles))
    .forEach(file => {
      const contents = fs.readFileSync(path.join(__dirname, `../src/assets/pages/${file}`), 'utf8');
      const parsed = metaParser(contents);

      fs.writeFile(`${pathToCompiledPages}/${file}`, parsed.content, 'utf8', err => {
        if (err) {
          console.error("Error writing file contents", error);
        }
      })

      fileArray.push({
        filename: file,
        inMenu: parsed.metadata.inMenu,
        link: file.replace('.md', ''),
        title: parsed.metadata.title,
        menuTitle: parsed.metadata.menuTitle ? parsed.metadata.menuTitle : parsed.metadata.title,
        icon: parsed.metadata.icon
      });
    });

  const data = {
    Pages: fileArray
  }

  fs.writeFile(`${pathToCompiledPages}/pages.json`, JSON.stringify(data), 'utf8', err => {
    if (err) console.log(err);
  });
});


// compile the posts
fs.readdir(pathToPosts, (err, files) => {
  if (err) console.error("Error reading posts", err);

  let fileArray = [];

  files.filter(file => !file.includes(ignoredFiles))
    .forEach(file => {
      const contents = fs.readFileSync(path.join(__dirname, `../src/assets/posts/${file}`), 'utf8');
      const parsed = metaParser(contents);

      fs.writeFile(`${pathToCompiledPosts}/${file}`, parsed.content, 'utf8', err => {
        if (err) {
          console.error("Error writing file contents", error);
        }
      });

      fileArray.push({
        filename: file,
        link: file.replace('.md', ''),
        title: parsed.metadata.title,
        date: parsed.metadata.date,
        image: parsed.metadata.image,
        categories: parsed.metadata.categories,
        tags: parsed.metadata.tags
      });
    });

  const data = {
    Posts: fileArray
  }

  fs.writeFile(`${pathToCompiledPosts}/posts.json`, JSON.stringify(data), 'utf8', err => {
    if (err) console.log(err);
  });
});


// compile the portfolio
fs.readdir(pathToPortfolio, (err, files) => {
  if (err) console.error("Error reading portfolio", err);

  let fileArray = [];

  files.filter(file => !file.includes(ignoredFiles))
    .forEach(file => {
      const contents = fs.readFileSync(path.join(__dirname, `../src/assets/portfolio/${file}`), 'utf8');
      const parsed = metaParser(contents);

      fileArray.push({
        title: parsed.metadata.title,
        image: parsed.metadata.image,
        type: parsed.metadata.type,
        description: parsed.metadata.description,
        url: parsed.metadata.url
      });
    });

  const data = {
    Portfolio: fileArray
  }

  fs.writeFile(`${pathToCompiledPortfolio}/portfolio.json`, JSON.stringify(data), 'utf8', err => {
    if (err) console.log(err);
  });
});
