import { RESTAURANTS_LIST } from '@/mocks/restaurants.js';
import RestaurantItem from '@views/RestaurantItem.js';
import { isRestaurantListExist } from '@/domain/restaurantList.js';

const RestaurantsList = () => {
  const sectionList = document.createElement('section');
  sectionList.classList.add('restaurant-list-container');

  const { isExist, EMPTY_TEXT } = isRestaurantListExist(RESTAURANTS_LIST);

  if (!isExist) {
    const emptyText = document.createElement('p');
    emptyText.classList.add('restaurant-list-empty');
    emptyText.textContent = EMPTY_TEXT;

    sectionList.appendChild(emptyText);

    return sectionList;
  }

  const restaurantsList = document.createElement('ul');
  sectionList.appendChild(restaurantsList);

  RESTAURANTS_LIST.forEach((item) => {
    restaurantsList.appendChild(RestaurantItem(item));
  });

  return sectionList;
};

export default RestaurantsList;
