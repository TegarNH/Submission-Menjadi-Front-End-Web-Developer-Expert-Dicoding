class SearchRestaurant extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <input type="text" id="searchRestaurantName" class="textbox" placeholder="Nama Restoran">
        <button id="submitSearch" type="submit" class="btn-submit">Cari</button>
    `;
  }
}

customElements.define('search-restaurant', SearchRestaurant);
