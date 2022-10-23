const getElements = (doc, ...elNames) => elNames.map(
  (item) => doc.querySelector(item).textContent.trim(),
);

const getPosts = (acc, item) => {
  const [title, description, url] = getElements(item, 'title', 'description', 'link');
  const post = { title, description, url };

  return [...acc, post];
};

const parse = (data) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(data, 'application/xml');

  const [title, description] = getElements(htmlDoc, 'title', 'description');
  const items = htmlDoc.querySelectorAll('item');

  const posts = Array.from(items).reduce(getPosts, []);
  const feed = { title, description };

  return { posts, feed };
};

export default (response) => {
  const { contents } = response.data;
  try {
    return parse(contents);
  } catch (error) {
    error.name = 'rssError';
    throw error;
  }
};
