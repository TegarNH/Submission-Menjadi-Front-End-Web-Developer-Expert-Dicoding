import CONFIG from '../../globals/config';

class DetailRestautantInfo extends HTMLElement {
  set dataRestaurant(data) {
    this._dataRestaurant = data;
  }

  set categoriesRestaurant(categories) {
    this._categoriesRestaurant = categories;
    this._render();
  }

  _render() {
    const dataRestaurant = this._dataRestaurant;
    const categoriesRestaurant = this._categoriesRestaurant;
    this.innerHTML = `<section class="restaurant__detail">
        <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL_SIZE_MEDIUM + dataRestaurant.pictureId}" alt="Restoran ${dataRestaurant.name}">
        <div class="restaurant__info">
          <h2 class="restaurant__title">${dataRestaurant.name}</h2>
          <p>${categoriesRestaurant}</p>
          <p><span class="fa fa-star checked"></span>  ${dataRestaurant.rating}/5</p>
          <p><span class="material-icons" aria-hidden="true">location_on</span> ${dataRestaurant.address}, ${dataRestaurant.city}</p>
          <div class="restaurant__description">
            <h3>Deskripsi</h3>
            <p class="restaurant__description-content">${dataRestaurant.description}</p>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('detail-restaurant-info', DetailRestautantInfo);
