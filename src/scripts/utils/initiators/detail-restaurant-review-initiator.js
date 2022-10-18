const DetailRestaurantReviewInitiator = {
  init({ dataRestaurant, reviewListElement }) {
    this._dataReviews = dataRestaurant.customerReviews;
    this._reviewListElement = reviewListElement;
    this._showReviews();
  },

  _showReviews() {
    this._reviewListElement.innerHTML = '';
    this._dataReviews.forEach((review) => {
      const itemReview = document.createElement('item-review-resto');
      itemReview.dataReview = review;
      this._reviewListElement.appendChild(itemReview);
    });
  },
};

export default DetailRestaurantReviewInitiator;
