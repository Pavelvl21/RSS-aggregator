export default (elements, processState, i18nInstance) => {
  const {
    form,
    input,
    button,
    feedback,
  } = elements;

  switch (processState) {
    case 'loaded':
      input.classList.remove('is-invalid');
      input.removeAttribute('readonly', 'true');
      button.setAttribute('type', 'input');
      button.classList.remove('disabled');
      feedback.classList.remove('text-info', 'text-danger');
      feedback.classList.add('text-success');
      feedback.textContent = i18nInstance.t(`processes.${processState}`);
      form.reset();
      input.focus();
      break;

    case 'loading':
      input.setAttribute('readonly', 'true');
      button.classList.add('disabled');
      feedback.classList.remove('text-success', 'text-danger');
      feedback.classList.add('text-info');
      feedback.textContent = i18nInstance.t(`processes.${processState}`);
      break;

    case 'filling':
      button.classList.remove('disabled');
      button.setAttribute('type', 'input');
      break;

    default:
      break;
  }
};
