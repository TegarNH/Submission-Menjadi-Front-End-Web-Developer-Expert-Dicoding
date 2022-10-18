class FavoriteButton extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <button id="favoriteButton" class="favorite-button">
        <i id="iconFavorite" class="fa" aria-hidden="true"></i>
      </button>`;
  }
}

customElements.define('favorite-button', FavoriteButton);
