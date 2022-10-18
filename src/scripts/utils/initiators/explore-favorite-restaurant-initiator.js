const ExploreFavoriteRestaurantInitiator = {
  init({ restaurants, listRestaurantContainer }) {
    this._restaurants = restaurants;
    this._listRestaurantContainer = listRestaurantContainer;

    this._showRestaurantList();
  },

  _showRestaurantList() {
    this._listRestaurantContainer.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('item-restaurant');
      restaurantItemElement.dataRestaurant = restaurant;
      this._listRestaurantContainer.appendChild(restaurantItemElement);
    });
  },
};

export default ExploreFavoriteRestaurantInitiator;
