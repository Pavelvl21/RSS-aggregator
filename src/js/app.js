import i18n from 'i18next';
import ru from './locales/ru.js';

import render from './view/index.js';
import handleValidationState from './controller/index.js';

export default () => {
  const i18nInstance = i18n.createInstance();
  i18nInstance.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru,
    },
  });

  const state = {
    processState: 's',
    channels: {
      feeds: [],
      posts: [],
    },
    loadedFeeds: new Set(),
  };

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

  const watchedState = render(state, elements, i18nInstance);

  elements.form.addEventListener('submit', handleValidationState(watchedState));
};
