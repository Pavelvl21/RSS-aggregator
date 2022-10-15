import onChange from 'on-change';
import renderError from './renderErrors.js';

const render = (element) => (path, value) => {
  if (path === 'validationState') {
    renderError(element, value);
  }
};

export default (state, element) => onChange(state, render(element));
