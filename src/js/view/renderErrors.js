const renderFeedback = () => {
  const p = document.createElement('p');
  p.classList.add('feedback', 'm-0', 'position-absolute', 'small', 'text-success', 'text-danger');
  p.textContent = 'Ссылка должна быть валидным URL';
  return p;
};
export default (elements, value) => {
  const { input, form } = elements;
  const feedback = renderFeedback();
  const targetElement = form.nextElementSibling;
  if (value === 'invalid') {
    input.classList.add('is-invalid');
    targetElement.after(feedback);
    console.log(feedback);
  }
  if (targetElement.nextElementSibling && value !== 'invalid') {
    input.classList.remove('is-invalid');
    targetElement.nextElementSibling.remove();
  }
};
