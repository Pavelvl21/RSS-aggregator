import i18n from 'i18next';
import onChange from 'on-change';
import ru from './locales/ru.js';

import render from './view/render.js';
import handleValidationState from './controller/handleValidationState.js';

export default () => {
  const i18nInstance = i18n.createInstance();
  i18nInstance.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru,
    },
  });

  const elements = {
    input: document.querySelector('#url-input'),
    form: document.querySelector('.rss-form'),
    button: document.querySelector('.btn'),
    feedback: document.querySelector('.feedback'),
    span: document.querySelector('.visually-hidden'),
    channels: {
      feeds: document.querySelector('.feeds'),
      posts: document.querySelector('.posts'),
    },
  };

  const state = onChange({
    processState: 'filling',
    processError: null,
    channels: {
      feeds: [],
      posts: [],
    },
    loadedFeeds: new Set(),
  }, render(elements, i18nInstance));

  elements.form.addEventListener('submit', handleValidationState(state));
};
