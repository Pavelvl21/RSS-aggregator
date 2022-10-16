const renderFeedback = (i18nInstance) => {
  const p = document.createElement('p');
  p.classList.add('feedback', 'm-0', 'position-absolute', 'small', 'text-success', 'text-danger');
  p.textContent = i18nInstance.t('errors.validationError');
  return p;
};
export default (elements, value, i18nInstance) => {
  const { input, form } = elements;
  const feedback = renderFeedback(i18nInstance);
  const targetElement = form.nextElementSibling;
  if (value === 'invalid') {
    input.classList.add('is-invalid');
    targetElement.after(feedback);
  }
  if (targetElement.nextElementSibling && value !== 'invalid') {
    input.classList.remove('is-invalid');
    targetElement.nextElementSibling.remove();
  }
};
