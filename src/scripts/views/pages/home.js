import RestaurantAPIDicoding from '../../data/restaurant-api-source';
import ExploreFavoriteRestaurantInitiator from '../../utils/initiators/explore-favorite-restaurant-initiator';
import RecommendedRestaurantInitiator from '../../utils/initiators/recommended-restaurant-initiator';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>

      <section class="recommendation">
        <h2 class="label_section">Rekomendasi Restoran</h2>
        <div class="recommendation-container"></div>
      </section>

      <section class="explore">
        <h2 class="label_section">Telusuri Restoran</h2>
        <div class="explore-container"></div>
      </section>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantAPIDicoding.getListRestaurant();

      this._initContentHomePage(restaurants);
    } catch (error) {
      console.log(error);
    }
  },

  _initContentHomePage(restaurants) {
    ExploreFavoriteRestaurantInitiator.init({
      restaurants,
      listRestaurantContainer: document.querySelector('.explore-container'),
    });
    RecommendedRestaurantInitiator.init({
      restaurantsRecommended: restaurants,
      listRecommendedContainer: document.querySelector('.recommendation-container'),
    });
  },
};

export default Home;
