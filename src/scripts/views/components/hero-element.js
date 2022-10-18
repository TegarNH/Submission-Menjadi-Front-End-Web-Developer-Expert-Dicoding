class HeroElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="hero" aria-label="">
        <div class="hero_background">
          <div class="hero_content">
            <h1>Temukan Restoran Favoritmu hanya di <span class="brand-color">Find Foods</span></h1>
            <p>Find Foods memberikan rekomendasi Restoran terfavorit dengan harga yang terjangkau.</p>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('hero-element', HeroElement);
