/* eslint-disable no-param-reassign */

export default (state) => (e) => {
  if (Object.hasOwn(e.target.dataset, 'id')) {
    const { id } = e.target.dataset;
    const loadedPosts = state.channels.posts;
    const currentPost = loadedPosts.find(({ postId }) => postId === id);
    currentPost.status = 'visited';
    state.modal = { ...currentPost };
  }
};
