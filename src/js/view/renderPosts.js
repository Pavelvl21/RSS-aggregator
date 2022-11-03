import buildPostsList from './builders/buildPostsList.js';
import buildCard from './builders/buildCard.js';

const render = (state, posts, i18nInstance) => {
  const visitedLinksId = [...state.ui.visitedLinksId];

  const postsList = posts.map((post) => {
    const { postId } = post;
    const cb = (id) => id === postId;
    const linkStatus = visitedLinksId.some(cb) ? 'visited' : null;

    return buildPostsList(post, linkStatus, i18nInstance);
  });
  const postsName = i18nInstance.t('channels.posts');
  const postsCard = buildCard(postsName, ...postsList);

  return postsCard;
};

export default (state, elements, posts, i18nInstance) => {
  const postsCard = render(state, posts, i18nInstance);
  elements.channels.posts.replaceChildren(postsCard);
};
