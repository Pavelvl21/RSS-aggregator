import i18n from 'i18next';
import onChange from 'on-change';
import ru from './locales/ru.js';

import render from './view/render.js';
import handleProcesses from './controller/handleProcesses.js';
import handlePostsEvents from './controller/handlePostsEvents.js';

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
    button: document.querySelector('[type="submit"]'),
    feedback: document.querySelector('.feedback'),
    span: document.querySelector('.visually-hidden'),
    channels: {
      feeds: document.querySelector('.feeds'),
      posts: document.querySelector('.posts'),
      postsButtons: document.querySelectorAll('[data-bs-toggle="modal"]'),
    },
    modal: {
      title: document.querySelector('.modal-title'),
      body: document.querySelector('.modal-body'),
      footer: document.querySelector('.modal-footer'),
    },
  };

  const state = onChange(
    {
      processes: {
        processState: 'filling',
        processError: null,
      },
      channels: {
        feeds: [],
        posts: [],
      },
      modal: {},
      loadedFeeds: new Set(),
    },
    render(elements, i18nInstance),
  );

  elements.form.addEventListener('submit', handleProcesses(state));
  elements.channels.posts.addEventListener('click', handlePostsEvents(state));
};
