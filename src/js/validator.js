import * as yup from 'yup';

const schema = yup.object().shape({
  url: yup.string().url(),
});

export default (rssLink) => schema
  .validate({ url: rssLink }, { abortEarly: false });
