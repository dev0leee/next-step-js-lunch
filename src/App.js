import Layout from '@components/Layout.js';
import RestaurantsList from '@views/RestaurantsList.js';

const App = () => {
  const RestaurantsListView = RestaurantsList();

  return Layout(RestaurantsListView);
};

export default App;
