const RecommendedRestaurantInitiator = {
  init({ restaurantsRecommended, listRecommendedContainer }) {
    this._restaurants = restaurantsRecommended;
    this._recommendedContainer = listRecommendedContainer;

    this._showRestaurantsRecommended();
  },

  _showRestaurantsRecommended() {
    this._recommendedContainer.innerHTML = '';
    this._restaurants.filter((restaurant) => restaurant.rating > 4.5)
      .forEach((recommendedRestaurant) => {
        const restaurantItemElement = document.createElement('item-restaurant');
        restaurantItemElement.dataRestaurant = recommendedRestaurant;
        this._recommendedContainer.appendChild(restaurantItemElement);
      });
  },
};

export default RecommendedRestaurantInitiator;
