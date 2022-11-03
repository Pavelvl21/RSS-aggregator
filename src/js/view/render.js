import renderErrors from './renderErrors.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderProcesses from './renderProcesses.js';
import renderModal from './renderModal.js';
import renderVisitedLinks from './renderVisitedLinks.js';

export default (state, elements, i18nInstance) => (path, value) => {
  switch (path) {
    case 'channels.feeds':
      renderFeeds(elements, value, i18nInstance);
      break;
    case 'channels.posts':
      renderPosts(state, elements, value, i18nInstance);
      break;
    case 'processes.processError':
      renderErrors(elements, value, i18nInstance);
      break;
    case 'processes.processState':
      renderProcesses(elements, value, i18nInstance);
      break;
    case 'ui.modal':
      renderModal(elements, value);
      renderVisitedLinks(value);
      break;
    default:
      break;
  }
};
