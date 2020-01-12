const fs = require('fs');
const path = require('path');
const metaParser = require('markdown-yaml-metadata-parser');
const pathToPages = path.join(__dirname, '../src/assets/pages');
const pathToPosts = path.join(__dirname, '../src/assets/posts');
const pathToCompiledPages = path.join(__dirname, '../src/_assets/pages');
const pathToCompiledPosts = path.join(__dirname, '../src/_assets/posts');
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
    console.error("An error occurred creating the directory", error);
  } else {
    console.log("Directory created successfully!");
  }
});

// create compiled posts directory
fs.mkdirSync(pathToCompiledPosts, {
  recursive: true
}, error => {
  if (error) {
    console.error("An error occurred creating the directory", error);
  } else {
    console.log("Directory created successfully!");
  }
});

// compile the pages
fs.readdir(pathToPages, (err, files) => {
  if (err) console.error("Error ready pages", err);

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
        menuTitle: parsed.metadata.menuTitle ? parsed.metadata.menuTitle : parsed.metadata.title
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
  if (err) console.error("Error ready posts", err);

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
