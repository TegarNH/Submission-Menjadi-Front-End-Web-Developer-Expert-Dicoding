/*
Skenario Batal Menyukai Restoran:
  1. Restoran sudah disukai.
  2. Button untuk batal menyukai Restoran ditampilkan.
  3. Button pembatalan ditekan oleh pengguna.
  4. Restoran dihapus dari daftar Restoran yang disukai:
      a. Ternyata Restoran tidak ada dalam daftar Restoran yang disukai.
*/

import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';
import '../src/scripts/views/components/favorite-button';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<favorite-button></favorite-button>';
};

// Skenario tes untuk membatalkan menyukai restoran.
describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurantById(1);
  });

  // Sebaiknya menampilkan tombol "batal menyukai" ketika restoran tersebut sudah disukai oleh user.
  it('should display cancel favorite button when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="delete this restaurant from favorite"]'))
      .toBeTruthy();
  });

  // Sebaiknya tidak menampilkan tombol "menyukai" ketika restoran tersebut sudah disukai oleh user.
  it('should not display favorite button when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add this restaurant to favorite"]'))
      .toBeFalsy();
  });

  // Sebaiknya restoran yang disukai dapat terhapus dari daftar
  // ketika pengguna menekan tombol "batal menyukai".
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="delete this restaurant from favorite"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  // Sebaiknya tidak terjadi error jika pengguna menekan tombol "batal menyukai"
  // pada saat restoran yang tidak disukai, tidak ada dalam daftar.
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurantById(1);

    document.querySelector('[aria-label="delete this restaurant from favorite"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
