import CONFIG from '../../globals/config';

class ItemMenuFood extends HTMLElement {
  set menuFoods(food) {
    this._food = food;
    this._render();
  }

  _render() {
    const food = this._food;
    this.innerHTML = `<div class="item__menu_restaurant card">
        <picture>
          <source type="image/webp" srcset="${CONFIG.IMAGE_DEFAULT_FOOD_PATH}.webp">
          <source type="image/png" srcset="${CONFIG.IMAGE_DEFAULT_FOOD_PATH}.png">
          <img class="lazyload picture__item" src="${CONFIG.IMAGE_DEFAULT_FOOD_PATH}.png" alt="Makanan ${food.name}">
        </picture>
        <div class="name__item">
          <h3>${food.name}</h3>
        </div>
      </div>
    `;
  }
}

customElements.define('item-menu-food', ItemMenuFood);
