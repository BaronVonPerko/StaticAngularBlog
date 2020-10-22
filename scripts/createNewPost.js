const fs = require('fs');
const path = require('path');
const welcome = require('cli-welcome');
const pkg = require('./../package.json');

const filename = process.argv[2];

const date = new Date();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const dateSt = `${date.getFullYear()}-${month}-${day}`;

const filePath = path.join(__dirname, `../src/assets/posts/${dateSt}-${filename}.md`);

welcome({
  title: 'StaticAngularBlog',
  tagLine: 'Create New Post',
  version: pkg.version
});

const meta = `---
date: ${dateSt}
title: 
image: 
categories:
tags:
---`;

fs.writeFile(filePath, meta, 'utf8', err => {
  if (err) {
    console.error("An error occurred", err);
  }
});
