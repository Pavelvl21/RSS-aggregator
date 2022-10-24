import renderErrors from './renderAlerts.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';

export default (elements, i18nInstance) => (path, value) => {
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
};
