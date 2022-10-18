import CONFIG from '../../globals/config';

class ItemReviewResto extends HTMLElement {
  set dataReview(review) {
    this._dataReview = review;
    this._render();
  }

  _render() {
    const dataReview = this._dataReview;
    this.innerHTML = `<div class="review-item card">
        <img src="${CONFIG.IMAGE_DEFAULT_PERSON_REVIEW_URL}" alt="Profil ${dataReview.name}" class="review__profile">
        <h3 class="review__name">${dataReview.name}</h3>
        <p class="review__content"><i>"${dataReview.review}"</i></p>
        <p class="review__date">Diposting pada ${dataReview.date}</p>
      </div>
    `;
  }
}

customElements.define('item-review-resto', ItemReviewResto);
