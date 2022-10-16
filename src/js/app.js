import i18n from 'i18next';
import ru from './locales/ru.js';

import render from './view/index.js';
import validate from './validator.js';

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
    validationState: null,
  };

  const elements = {
    input: document.querySelector('#url-input'),
    form: document.querySelector('.rss-form'),
  };
  const watchedState = render(state, elements, i18nInstance);

  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { url } = Object.fromEntries(formData);
    validate(url, watchedState)
      .then(watchedState.validationState = 'valid')
      .catch(() => {
        watchedState.validationState = 'invalid';
      });
  };

  elements.form.addEventListener('submit', handle);
};
