export default (name, ...items) => {
  const cardBorder = document.createElement('div');
  cardBorder.classList.add('card', 'border-0');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title', 'h4');
  cardTitle.textContent = name;
  cardBody.replaceChildren(cardTitle);

  const listGroup = document.createElement('ul');
  listGroup.classList.add('list-group', 'border-0', 'rounded-0');
  listGroup.replaceChildren(...items);
  cardBorder.replaceChildren(cardBody, listGroup);

  return cardBorder;
};
