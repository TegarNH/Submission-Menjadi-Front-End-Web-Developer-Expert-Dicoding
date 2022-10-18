import FavoriteButtonInitiator from '../../src/scripts/utils/initiators/favorite-button-initiator';

const createFavoriteButtonInitiatorWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({ restaurant });
};

export { createFavoriteButtonInitiatorWithRestaurant };
