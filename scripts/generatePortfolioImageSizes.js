const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

let file;

// read the file
try {
    file = fs.readFileSync(path.join(__dirname, '../src/_assets/portfolio/portfolio.json'));
} catch (e) {
    console.log("Unable to open portfolio json file.", e);
    return;
}

// create resized images directory
fs.mkdirSync(path.join(__dirname, '../src/_assets/images'), {
    recursive: true
  }, error => {
    if (error) {
      console.error("An error occurred creating the images directory", error);
    }
  });

let contents = JSON.parse(file);

contents.Portfolios.forEach(portfolio => {
    let imagePath = path.join(__dirname, `../src/assets/images/${portfolio.image}`);
    
    sharp(imagePath)
        .resize(250)
        .toFile(path.join(__dirname, `../src/_assets/images/${portfolio.image}`));
});