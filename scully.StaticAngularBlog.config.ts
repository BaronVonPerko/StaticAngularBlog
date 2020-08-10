import {HandledRoute, registerPlugin, RouteTypes, ScullyConfig} from '@scullyio/scully';

import {Posts} from './src/_assets/posts/posts.json';

function blogPostPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  console.log(Posts);

  const routes = [];

  Posts.forEach(post => {
    routes.push({route: `/blog/post/${post.link}`, type: RouteTypes.json});
  })

  return Promise.resolve(routes);
}

registerPlugin('router', 'blogPosts', blogPostPlugin);

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "StaticAngularBlog",
  outDir: './dist/static',
  routes: {
    '/blog/post/:title': {
      type: 'blogPosts',
    }
  },
};
