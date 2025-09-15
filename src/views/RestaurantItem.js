import '@views/RestaurantItem.css';

const RestaurantItem = ({
  categoryIcon,
  category,
  name,
  distance,
  description,
}) => {
  const item = document.createElement('li');
  item.classList.add('restaurant');

  item.innerHTML = `
    <div class="restaurant__category">
      <img
        src="${categoryIcon}"
        alt="${category} 아이콘"
        class="category-icon"
      />
    </div>
    <div class="restaurant__info">
      <h3 class="restaurant__name text-subtitle">${name}</h3>
      <span class="restaurant__distance text-body">${distance}</span>
      <p class="restaurant__description text-body">
        ${description}
      </p>
    </div>
  `;

  return item;
};

export default RestaurantItem;
