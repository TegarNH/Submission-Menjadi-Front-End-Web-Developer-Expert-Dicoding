import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import ExploreFavoriteRestaurantInitiator from '../../utils/initiators/explore-favorite-restaurant-initiator';

const Favorite = {
  async render() {
    return `
      <section class="favorite">
        <h2 class="label_section">Restoran Favoritmu</h2>
        <div class="favorite-container"></div>
      </section>
    `;
  },

  async afterRender() {
    try {
      const restaurantsFavorite = await FavoriteRestaurantIdb.getAllRestaurants();

      this._initContentFavoritePage(restaurantsFavorite);
    } catch (error) {
      console.log(error);
    }
  },

  _initContentFavoritePage(restaurantsFavorite) {
    ExploreFavoriteRestaurantInitiator.init({
      restaurants: restaurantsFavorite,
      listRestaurantContainer: document.querySelector('.favorite-container'),
    });
  },
};

export default Favorite;
