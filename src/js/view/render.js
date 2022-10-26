import renderErrors from './renderErrors.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderProcesses from './renderProcesses.js';

export default (elements, i18nInstance) => (path, value) => {
  switch (path) {
    case 'channels.feeds':
      renderFeeds(elements, value, i18nInstance);
      break;
    case 'channels.posts':
      renderPosts(elements, value, i18nInstance);
      break;
    case 'processError':
      renderErrors(elements, value, i18nInstance);
      break;
    case 'processState':
      renderProcesses(elements, value, i18nInstance);
      break;
    default:
      break;
  }
};
