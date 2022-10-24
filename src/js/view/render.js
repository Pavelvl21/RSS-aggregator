import onChange from 'on-change';
import renderErrors from './renderAlerts.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';

const render = (state, elements, i18nInstance) => {
  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'channels.feeds':
        renderFeeds(elements, value, i18nInstance);
        break;
      case 'channels.posts':
        renderPosts(elements, value, i18nInstance);
        break;
      case 'processState':
        renderErrors(elements, value, i18nInstance);
        break;

      default:
        break;
    }
  });
  return watchedState;
};
export default render;
