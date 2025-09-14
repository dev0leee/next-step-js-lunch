import '@views/RestaurantsList.css';
import Select from '@components/Select.js';

const RestaurantsList = () => {
  const div = document.createElement('div');
  const sectionSelect = document.createElement('section');
  div.appendChild(sectionSelect);

  const selectCategory = Select({ name: 'category' });
  const selectSort = Select({ name: 'sort' });

  sectionSelect.appendChild(selectCategory);
  sectionSelect.appendChild(selectSort);

  return div;
};

export default RestaurantsList;
