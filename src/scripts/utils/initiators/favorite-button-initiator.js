import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const FavoriteButtonInitiator = {
  async init({ restaurant }) {
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderDeleteFavorite();
    } else {
      this._renderAddFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurantById(id);
    return !!restaurant;
  },

  _renderAddFavorite() {
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.ariaLabel = 'add this restaurant to favorite';

    const iconFavorite = document.querySelector('#iconFavorite');
    iconFavorite.classList.add('fa-heart-o');

    favoriteButton.addEventListener('click', async () => {
      iconFavorite.classList.remove('fa-heart-o');

      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderDeleteFavorite() {
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.ariaLabel = 'delete this restaurant from favorite';

    const iconFavorite = document.querySelector('#iconFavorite');
    iconFavorite.classList.add('fa-heart');

    favoriteButton.addEventListener('click', async () => {
      iconFavorite.classList.remove('fa-heart');

      await FavoriteRestaurantIdb.deleteRestaurantById(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
