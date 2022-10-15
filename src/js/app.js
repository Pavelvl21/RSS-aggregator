import renderState from './view/index.js';
import validate from './validator.js';

export default () => {
  const state = {
    validationState: null,
  };

  const elements = {
    input: document.querySelector('#url-input'),
    form: document.querySelector('.rss-form'),
  };
  const watchedState = renderState(state, elements);

  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { url } = Object.fromEntries(formData);
    validate(url, watchedState)
      .then(watchedState.validationState = 'valid')
      .catch((err) => {
        watchedState.validationState = 'invalid';
        console.log(err.message);
      });
  };

  elements.form.addEventListener('submit', handle);
};
