import {HandledRoute, registerPlugin, RouteTypes, ScullyConfig, setPluginConfig} from '@scullyio/scully';

import {Posts} from './src/_assets/posts/posts.json';
import {CodeTips} from './src/_assets/codetips/codetips.json';
import {Pages} from './src/_assets/pages/pages.json';
import {getSitemapPlugin} from '@gammastream/scully-plugin-sitemap';

const SitemapPlugin = getSitemapPlugin();

setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://perko.dev/',
  sitemapFilename: 'sitemap.xml',
  merge: false,
  changeFreq: 'monthly',
  routes: {},
});

function blogPostPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  const routes = [];

  Posts.forEach(post => {
    routes.push({route: `/blog/post/${post.link}`, type: RouteTypes.json});
  });

  return Promise.resolve(routes);
}

registerPlugin('router', 'blogPosts', blogPostPlugin);


function codeTipsPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  const routes = [];

  CodeTips.forEach(tip => {
    routes.push({route: `/code-tips/${tip.link}`, type: RouteTypes.json});
  });

  return Promise.resolve(routes);
}

registerPlugin('router', 'codeTips', codeTipsPlugin);

function pagesPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  const routes = [];

  Pages.forEach(page => {
    routes.push({route: `/${page.link}`, type: RouteTypes.json});
  });

  return Promise.resolve(routes);
}

registerPlugin('router', 'pages', pagesPlugin);

function tagsPlugin(string, config = {}): Promise<HandledRoute[]> {
  // get all the unique tags
  const tags = [];
  Posts.forEach(post => {
    if (post.tags) {
      post.tags.split(',').forEach(tag => {
        tag = tag.replace(/\ /g, '-');
        if (tags.indexOf(tag) === -1) {
          tags.push(tag);
        }
      });
    }
  });

  // build the routes
  const routes = [];
  tags.forEach(tag => {
    routes.push({route: `/blog/tag/${tag}`, type: RouteTypes.json});
  });

  return Promise.resolve(routes);
}

registerPlugin('router', 'tags', tagsPlugin);


export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'StaticAngularBlog',
  outDir: './dist/static',
  routes: {
    '/blog/post/:title': {
      type: 'blogPosts',
    },
    '/code-tips/:title': {
      type: 'codeTips',
    },
    '/:page': {
      type: 'pages',
    },
    '/blog/tag/:tag': {
      type: 'tags',
    },
  },
};
