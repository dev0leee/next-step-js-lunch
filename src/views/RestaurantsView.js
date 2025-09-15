import '@views/RestaurantsList.css';
import RestaurantFilter from '@views/RestaurantsFilter.js';
import RestaurantsList from '@views/RestaurantsList.js';

const RestaurantsListView = () => {
  const div = document.createElement('div');
  div.classList.add('restaurants-view');

  // 카테고리/정렬 필터
  div.appendChild(RestaurantFilter());

  // 음식점 목록
  div.appendChild(RestaurantsList());

  return div;
};

export default RestaurantsListView;
