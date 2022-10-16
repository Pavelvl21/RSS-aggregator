import * as yup from 'yup';

export default (rssLink) => {
  yup.setLocale({
    string: {
      url: 'ValidationError',
    },
  });
  const schema = yup.object().shape({
    url: yup.string().url(),
  });

  return schema.validate({ url: rssLink }, { abortEarly: false });
};
