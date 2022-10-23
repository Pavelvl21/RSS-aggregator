export default (elements, error, i18nInstance) => {
  const {
    form,
    input,
    button,
    feedback,
  } = elements;

  switch (error) {
    case 'validationError':
    case 'existError':
    case 'AxiosError':
    case 'rssError':
      input.classList.add('is-invalid');
      input.removeAttribute('readonly', 'true');
      button.classList.remove('disabled');
      button.setAttribute('type', 'input');
      feedback.classList.add('text-danger');
      feedback.classList.remove('text-info', 'text-success');

      feedback.textContent = i18nInstance.t(`alerts.${error}`);
      break;

    case 'loaded':
      input.classList.remove('is-invalid');
      input.removeAttribute('readonly', 'true');
      button.setAttribute('type', 'input');
      button.classList.remove('disabled');
      feedback.classList.remove('text-info', 'text-danger');
      feedback.classList.add('text-success');

      feedback.textContent = i18nInstance.t(`alerts.${error}`);

      form.reset();
      input.focus();
      break;

    case 'sending':
      input.setAttribute('readonly', 'true');
      button.classList.add('disabled');
      feedback.classList.remove('text-success', 'text-danger');
      feedback.classList.add('text-info');

      feedback.textContent = i18nInstance.t(`alerts.${error}`);
      break;

    default:
      break;
  }
};
