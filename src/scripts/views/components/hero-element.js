import CONFIG from '../../globals/config';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="hero">
          <picture>
            <source type="image/webp" media="(max-width: 600px)" srcset="${CONFIG.IMAGE_HERO_SMALL_PATH}.webp">
            <source type="image/jpeg" media="(max-width: 600px)" srcset="${CONFIG.IMAGE_HERO_SMALL_PATH}.jpg">
            <source type="image/webp" media="(min-width: 601px)" srcset="${CONFIG.IMAGE_HERO_LARGE_PATH}.webp">
            <source type="image/jpeg" media="(min-width: 601px)" srcset="${CONFIG.IMAGE_HERO_LARGE_PATH}.jpg">
            <img src="${CONFIG.IMAGE_HERO_LARGE_PATH}.jpg" alt="" class="lazyload">
          </picture>
          <div class="content-container">
            <div class="hero_content">
              <h1>Temukan Restoran Favoritmu hanya di <span class="brand-color">Find Foods</span></h1>
              <p>Find Foods memberikan rekomendasi Restoran terfavorit dengan harga yang terjangkau.</p>
            </div>
          </div>
        </div>`;
  }
}

customElements.define('hero-element', HeroElement);
