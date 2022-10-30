/* eslint-disable no-param-reassign */

import loadFeeds from './loadFeeds.js';
import validateUrl from './utils/validate.js';

export default (state) => (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const rssLink = Object.fromEntries(formData).url;
  const loadedFeeds = Array.from(state.loadedFeeds);

  validateUrl(rssLink, loadedFeeds)
    .then(({ url }) => {
      state.processes.processState = 'loading';
      loadFeeds(url, state);
    })
    .catch((error) => {
      state.processes.processState = 'filling';
      state.processes.processError = error.message;
    });
};
