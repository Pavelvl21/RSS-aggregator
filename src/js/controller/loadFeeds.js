/* eslint-disable no-param-reassign */
import uniqueId from 'lodash/uniqueId.js';
import axios from 'axios';
import parse from './utils/parse.js';
import updatePosts from './utils/updatePosts.js';

export default (url, watchedState) => axios({
  method: 'get',
  url: `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`,
  timeout: 8000,
})
  .then((response) => {
    const { feed, posts } = parse(response);
    const feeds = { id: uniqueId(), ...feed };
    const postsList = posts.map((post) => ({
      postId: uniqueId(),
      feedId: feeds.id,
      feedUrl: url,
      ...post,
    }));
    postsList.reverse();

    watchedState.channels.feeds.push(feeds);
    watchedState.channels.posts.unshift(...postsList);
    watchedState.processState = 'loaded';
    watchedState.loadedFeeds.add(url);

    updatePosts(watchedState);
  })

  .catch((error) => {
    watchedState.processState = error.name;
  });
