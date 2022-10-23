import * as yup from 'yup';

export default (rssLink, loadedFeeds) => {
  yup.setLocale({
    string: {
      url: 'validationError',
    },
    mixed: {
      notOneOf: 'existError',
    },
  });

  const schema = yup
    .object()
    .shape({ url: yup.string().url().notOneOf(loadedFeeds) });
  return schema.validate({ url: rssLink }, { abortEarly: false });
};
