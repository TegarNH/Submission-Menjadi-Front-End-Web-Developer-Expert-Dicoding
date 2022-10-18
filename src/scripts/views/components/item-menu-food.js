import CONFIG from '../../globals/config';

class ItemMenuFood extends HTMLElement {
  set menuFoods(food) {
    this._food = food;
    this._render();
  }

  _render() {
    const food = this._food;
    this.innerHTML = `<div class="item__menu_restaurant card">
        <img class="picture__item" src="${CONFIG.IMAGE_DEFAULT_FOOD_URL}" alt="Makanan ${food.name}">
        <div class="name__item">
          <h3>${food.name}</h3>
        </div>
      </div>
    `;
  }
}

customElements.define('item-menu-food', ItemMenuFood);
