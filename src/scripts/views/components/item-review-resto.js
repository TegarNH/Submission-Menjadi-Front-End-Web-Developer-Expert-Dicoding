import CONFIG from '../../globals/config';

class ItemReviewResto extends HTMLElement {
  set dataReview(review) {
    this._dataReview = review;
    this._render();
  }

  _render() {
    const dataReview = this._dataReview;
    this.innerHTML = `<div class="review-item card">
        <picture>
          <source type="image/webp" srcset="${CONFIG.IMAGE_DEFAULT_PERSON_REVIEW_PATH}.webp">
          <source type="image/png" srcset="${CONFIG.IMAGE_DEFAULT_PERSON_REVIEW_PATH}.png">
          <img src="${CONFIG.IMAGE_DEFAULT_PERSON_REVIEW_PATH}.png" alt="Profil ${dataReview.name}" class="lazyload review__profile">
        </picture>
        <h3 class="review__name">${dataReview.name}</h3>
        <p class="review__content"><i>"${dataReview.review}"</i></p>
        <p class="review__date">Diposting pada ${dataReview.date}</p>
      </div>
    `;
  }
}

customElements.define('item-review-resto', ItemReviewResto);
