export default (elements, error, i18nInstance) => {
  const { input, feedback } = elements;
  input.classList.add('is-invalid');
  input.removeAttribute('readonly', 'true');
  feedback.classList.add('text-danger');
  feedback.classList.remove('text-info', 'text-success');

  if (error !== null) {
    feedback.textContent = i18nInstance.t(`errors.${error}`);
  }
};
