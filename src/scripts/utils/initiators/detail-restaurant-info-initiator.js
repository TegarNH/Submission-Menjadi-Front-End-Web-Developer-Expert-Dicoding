const DetailRestaurantInfoInitiator = {
  init({ dataRestaurant, infoRestoElement }) {
    this._dataRestaurant = dataRestaurant;
    this._dataCategoriesResto = dataRestaurant.categories;
    this._infoRestoElement = infoRestoElement;

    this._infoRestoElement.dataRestaurant = this._dataRestaurant;
    this._infoRestoElement.categoriesRestaurant = this._getCategories(this._dataCategoriesResto);
  },

  _getCategories(categoriesRestaurant) {
    let categories = '';
    categoriesRestaurant.forEach((category, key, array) => {
      if (Object.is(array.length - 1, key)) {
        categories += `${category.name}`;
      } else {
        categories += `${category.name}, `;
      }
    });
    return categories;
  },
};

export default DetailRestaurantInfoInitiator;
