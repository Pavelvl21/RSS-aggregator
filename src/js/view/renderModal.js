export default (elements, currentPost) => {
  const { modal } = elements;
  modal.title.textContent = currentPost.title;
  modal.body.textContent = currentPost.description;
  modal.footer.firstElementChild.href = currentPost.url;
};
