export default (currentPost) => {
  const { postId } = currentPost;
  const currentLink = document.querySelector(`[data-id="${postId}"]`);
  currentLink.classList.remove('fw-bold');
  currentLink.classList.add('fw-normal', 'link-secondary');
};
