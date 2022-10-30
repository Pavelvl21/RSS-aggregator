export default (post, i18nInstance) => {
  const {
    title,
    url,
    postId,
    status,
  } = post;
  const li = document.createElement('li');
  li.classList.add(
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-start',
    'border-0',
    'border-end-0',
  );

  const a = document.createElement('a');
  const linkStatus = status === 'visited' ? ['fw-normal', 'link-secondary'] : ['fw-bold'];
  a.classList.add(...linkStatus);
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noopener noreferrer');
  a.setAttribute('data-id', postId);
  a.textContent = title;

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-toggle', 'modal');
  button.setAttribute('data-bs-target', '#modal');
  button.setAttribute('data-id', postId);
  button.textContent = i18nInstance.t('button');
  li.replaceChildren(a, button);

  return li;
};
