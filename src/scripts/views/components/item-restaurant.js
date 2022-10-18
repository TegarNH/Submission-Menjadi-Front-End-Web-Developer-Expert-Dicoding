import CONFIG from '../../globals/config';

class ItemRestaurant extends HTMLElement {
  set dataRestaurant(restaurant) {
    this._dataRestaurant = restaurant;
    this._render();
  }

  _render() {
    const dataRestaurant = this._dataRestaurant;
    this.innerHTML = `<article class="restaurant-item">
      <img class="restaurant-item__thumbnail"
          src="${CONFIG.BASE_IMAGE_URL_SIZE_MEDIUM + dataRestaurant.pictureId}"
          alt="Restoran ${dataRestaurant.name}">
      <div class="restaurant-item__content">
        <h3 class="restaurant-item__title">${dataRestaurant.name}</h3>
        <p><span class="material-icons" aria-hidden="true">location_on</span> ${dataRestaurant.city}</p>
        <p><span class="fa fa-star checked"></span> ${dataRestaurant.rating}</p>
        <div>
          <p class="restaurant-item__description-title">Deskripsi</p>
          <p class="restaurant-item__description-content">${dataRestaurant.description}</p>
        </div>
        <button class="btn btn-detail" id="btnDetail" type="button" onClick="window.location.href='/#/detail/${dataRestaurant.id}';">Lihat Detail</button>
      </div>
    </article>`;
  }
}

customElements.define('item-restaurant', ItemRestaurant);
