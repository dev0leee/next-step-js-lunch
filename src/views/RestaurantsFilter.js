import Select from '@components/Select.js';
import '@views/RestaurantsFilter.css';
import {
  CATEGORY_OPTIONS,
  SORTING_OPTIONS,
} from '@/constants/restaurantFilter.js';

const RestaurantFilter = () => {
  const sectionSelect = document.createElement('section');
  sectionSelect.classList.add('restaurant-filter-container');

  const handleCategoryFilter = (event) => {
    const selectedCategory = event.target.value;
  };

  // 카테고리 필터
  const selectCategory = Select({
    name: 'category',
    id: 'category-filter',
    className: 'restaurant-filter',
    options: CATEGORY_OPTIONS,
    onChange: handleCategoryFilter,
  });
  sectionSelect.appendChild(selectCategory);

  // 정렬 필터
  const selectSort = Select({
    name: 'sorting',
    id: 'sorting-filter',
    className: 'restaurant-filter',
    options: SORTING_OPTIONS,
  });

  sectionSelect.appendChild(selectSort);

  return sectionSelect;
};

export default RestaurantFilter;
