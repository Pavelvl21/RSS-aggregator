import uniqueId from 'lodash/uniqueId.js';
import axios from 'axios';
import parse from './parse.js';

const filtered = (postsList, currenTitle) => !postsList.some(({ title }) => title === currenTitle);
const cb = (acc, { feedId }) => ({ ...acc, feedId });

const getNewPosts = (watchedState) => (url) => {
  setTimeout(() => axios({
    method: 'get',
    url: `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`,
    timeout: 5000,
  })
    .then((response) => {
      const postsList = watchedState.channels.posts;
      const { feedId } = postsList.reduce(cb, {});
      const { posts } = parse(response);
      const newPosts = posts
        .filter(({ title }) => filtered(postsList, title))
        .map((post) => ({
          postId: uniqueId(),
          feedId,
          feedUrl: url,
          ...post,
        }));
      watchedState.channels.posts.unshift(...newPosts);
    })
    .catch((error) => error)
    .finally(getNewPosts(watchedState)(url)), 5000);
};

export default (watchedState) => {
  const loadedFeeds = [...watchedState.loadedFeeds];
  loadedFeeds.forEach(getNewPosts(watchedState));
};
