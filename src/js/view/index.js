import onChange from 'on-change';
import renderErrors from './renderErrors.js';

const render = (state, elements, i18nInstance) => {
  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'validationState':
        renderErrors(elements, value, i18nInstance);
        break;
      default:
        break;
    }
  });
  return watchedState;
};
export default render;
