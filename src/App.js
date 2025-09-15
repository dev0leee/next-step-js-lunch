import Layout from '@components/Layout.js';
import RestaurantsView from '@views/RestaurantsView.js';

const App = () => {
  const Restaurants = RestaurantsView();

  return Layout(Restaurants);
};

export default App;
