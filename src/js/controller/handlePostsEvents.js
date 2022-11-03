/* eslint-disable no-param-reassign */

export default (watchedState) => (e) => {
  if (Object.hasOwn(e.target.dataset, 'id')) {
    const { id } = e.target.dataset;
    const loadedPosts = watchedState.channels.posts;
    const currentPost = loadedPosts.find(({ postId }) => postId === id);
    watchedState.ui.modal = { ...currentPost };
    watchedState.ui.visitedLinksId.add(id);
  }
};
