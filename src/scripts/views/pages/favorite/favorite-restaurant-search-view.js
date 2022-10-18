class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <section class="card search-container">
          <h2 class="name-search">Cari Restoran Favoritmu</h2>
          <search-restaurant></search-restaurant>
        </section>
        
        <section class="favorite">
          <h2 class="label_section">Restoran Favoritmu</h2>
          <div id="favorites" class="favorite-container"></div>
        </section>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('searchRestaurantName').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    const listRestaurantContainer = document.getElementById('favorites');

    if (restaurants.length) {
      listRestaurantContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('item-restaurant');
        restaurantItemElement.dataRestaurant = restaurant;
        listRestaurantContainer.appendChild(restaurantItemElement);
      });
    } else {
      listRestaurantContainer.innerHTML = this._getEmptyRestaurantTemplate();
    }

    listRestaurantContainer.dispatchEvent(new Event('favorites:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<p class="restaurant-item-not-found">Tidak ada restoran untuk ditampilkan</p>';
  }
}

export default FavoriteRestaurantSearchView;
