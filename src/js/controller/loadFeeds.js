/* eslint-disable no-param-reassign */
import _ from 'lodash';
import axios from 'axios';
import parse from './utils/parse.js';

export default (url, watchedState) => axios({
  method: 'get',
  url: `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(
    url,
  )}`,
  timeout: 8000,
})
  .then((response) => {
    const { feed, posts } = parse(response);
    const feeds = { id: _.uniqueId(), ...feed };
    const postsList = posts.map((post) => ({
      postIid: _.uniqueId(),
      feedId: feeds.id,
      ...post,
    }));
    postsList.reverse();

    watchedState.channels.feeds.push(feeds);
    watchedState.channels.posts.unshift(...postsList);
    watchedState.processState = 'loaded';
    watchedState.loadedFeeds.add(url);
  })

  .catch((error) => {
    watchedState.processState = error.name;
  });
