# StaticAngularBlog

![CI](https://github.com/BaronVonPerko/StaticAngularBlog/workflows/CI/badge.svg?branch=master)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## What is this?

This is a custom built static website for ChrisPerko.net, my blog and personal website.  It is currenly running Angular v12, and Tailwind v1.9.

## Development Setup

Install dependencies:
```bash
npm install
```

Run the server
```bash
npm start
```

Running the server will run the scripts to generate the page indexes, and resize images used on the portfolio.
If you need to run these individually:

```bash
node ./scripts/generatePageIndex.js
node ./scripts/generatePortfolioImageSizes.js
```

Or to run them all, simply use:

```bash
npm run resources
```

---

Open your browser to the development server:
*localhost:4100*

## Use It
Feel free to use this code however you wish.  Create your own blog, and style it however you like!

