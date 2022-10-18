const DetailRestaurantMenuInitiator = {
  init({ dataRestaurant, foodListElement, drinkListElement }) {
    this._menuFoods = dataRestaurant.menus.foods;
    this._menuDrinks = dataRestaurant.menus.drinks;
    this._foodListElement = foodListElement;
    this._drinkListElement = drinkListElement;

    this._showMenuFoods();
    this._showMenuDrinks();
  },

  _showMenuFoods() {
    this._foodListElement.innerHTML = '';
    this._menuFoods.forEach((food) => {
      const ItemMenuFood = document.createElement('item-menu-food');
      ItemMenuFood.menuFoods = food;
      this._foodListElement.appendChild(ItemMenuFood);
    });
  },

  _showMenuDrinks() {
    this._drinkListElement.innerHTML = '';
    this._menuDrinks.forEach((drink) => {
      const ItemMenuDrink = document.createElement('item-menu-drink');
      ItemMenuDrink.menuDrinks = drink;
      this._drinkListElement.appendChild(ItemMenuDrink);
    });
  },
};

export default DetailRestaurantMenuInitiator;
