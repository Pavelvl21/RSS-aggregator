import buildPostsList from './builders/buildPostsList.js';
import buildCard from './builders/buildCard.js';

const render = (posts, i18nInstance) => {
  const postsList = posts.map(
    (post) => buildPostsList(post, i18nInstance),
  );
  const postsName = i18nInstance.t('channels.posts');
  const postsCard = buildCard(postsName, ...postsList);

  return postsCard;
};

export default (elements, posts, i18nInstance) => {
  const postsCard = render(posts, i18nInstance);
  elements.channels.posts.replaceChildren(postsCard);
};
