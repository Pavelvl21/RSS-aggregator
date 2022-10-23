import buildFeedList from './builders/buildFeedList.js';
import buildCard from './builders/buildCard.js';

const render = (feeds, i18nInstance) => {
  const feedList = feeds.map((feed) => buildFeedList(feed)).reverse();
  const feedName = i18nInstance.t('channels.feeds');
  const feedCard = buildCard(feedName, ...feedList);

  return feedCard;
};

export default (elements, feeds, i18nInstance) => {
  const feedCard = render(feeds, i18nInstance);
  elements.channels.feeds.replaceChildren(feedCard);
};
