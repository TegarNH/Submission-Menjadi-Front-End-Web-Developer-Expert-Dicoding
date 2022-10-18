import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPIDicoding {
  static async getListRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantAPIDicoding;
