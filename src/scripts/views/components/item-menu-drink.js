import CONFIG from '../../globals/config';

class ItemMenuDrink extends HTMLElement {
  set menuDrinks(drink) {
    this._drink = drink;
    this._render();
  }

  _render() {
    const drink = this._drink;
    this.innerHTML = `<div class="item__menu_restaurant card">
        <picture>
          <source type="image/webp" srcset="${CONFIG.IMAGE_DEFAULT_DRINK_PATH}.webp">
          <source type="image/png" srcset="${CONFIG.IMAGE_DEFAULT_DRINK_PATH}.png">
          <img class="lazyload picture__item" data-src="${CONFIG.IMAGE_DEFAULT_DRINK_PATH}.png" alt="Minuman ${drink.name}">
        </picture>
        <div class="name__item">
          <h3>${drink.name}</h3>
        </div>
      </div>
    `;
  }
}

customElements.define('item-menu-drink', ItemMenuDrink);
