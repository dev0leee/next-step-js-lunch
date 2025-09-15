import Select from '@components/Select.js';
import '@views/RestaurantsFilter.css';

const RestaurantFilter = () => {
  const sectionSelect = document.createElement('section');

  const selectCategory = Select({ name: 'category' });
  const selectSort = Select({ name: 'sort' });

  sectionSelect.appendChild(selectCategory);
  sectionSelect.appendChild(selectSort);

  return sectionSelect;
};

export default RestaurantFilter;
