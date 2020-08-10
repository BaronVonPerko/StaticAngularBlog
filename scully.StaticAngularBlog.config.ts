import {HandledRoute, registerPlugin, RouteTypes, ScullyConfig} from '@scullyio/scully';

import {Posts} from "./src/_assets/posts/posts.json";
import {CodeTips} from "./src/_assets/codetips/codetips.json";
import {Pages} from "./src/_assets/pages/pages.json";

function blogPostPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  const routes = [];

  Posts.forEach(post => {
    routes.push({route: `/blog/post/${post.link}`, type: RouteTypes.json});
  })

  return Promise.resolve(routes);
}

registerPlugin('router', 'blogPosts', blogPostPlugin);


function codeTipsPlugin(string, {}): Promise<HandledRoute[]> {
  const routes = [];

  CodeTips.forEach(tip => {
    routes.push({route: `/code-tips/${tip.link}`, type: RouteTypes.json});
  })

  return Promise.resolve(routes);
}

registerPlugin('router', 'codeTips', codeTipsPlugin);

function pagesPlugin(string, {}): Promise<HandledRoute[]> {
  const routes = [];

  Pages.forEach(page => {
    routes.push({route: `/${page.link}`, type: RouteTypes.json});
  })

  return Promise.resolve(routes);
}

registerPlugin('router', 'pages', pagesPlugin);


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "StaticAngularBlog",
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
  },
};
