import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './favorite/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './favorite/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './favorite/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
