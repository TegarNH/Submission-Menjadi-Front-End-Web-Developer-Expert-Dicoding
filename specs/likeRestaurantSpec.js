/*
Skenario Menyukai Restoran:
  1. Restoran belum disukai.
  2. Button untuk menyukai Restoran ditampilkan
  3. Button menyukai Restoran ditekan oleh pengguna.
  4. Restoran ditambahkan ke daftar Restoran yang disukai:
      a. Ternyata Restoran sudah disukai:
          - Tidak perlu menyimpan kembali.
      b. Data Restoran tidak memiliki ID:
          - Sistem tidak memproses penyimpanan.
          - Sistem tidak gagal.
*/

import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';
import '../src/scripts/views/components/favorite-button';

// Skenario tes untuk menyukai restoran.
describe('Liking a Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<favorite-button></favorite-button>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  // Sebaiknya menampilkan tombol "menyukai restoran"
  // ketika restoran tersebut belum disukai oleh user.
  it('should show the favorite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add this restaurant to favorite"]'))
      .toBeTruthy();
  });

  // Sebaiknya tidak menampilkan tombol "batal menyukai"
  // ketika restoran tersebut belum disukai oleh user.
  it('should not show the cancel favorite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="delete this restaurant from favorite"]'))
      .toBeFalsy();
  });

  // Sebaiknya restoran dapat ditambahkan ke dalam daftar
  // ketika pengguna menekan tombol "menyukai restoran".
  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurantById(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurantById(1);
  });

  // Sebaiknya tidak menambahkan restoran ke dalam daftar restoran yang disukai lagi
  // ketika restoran tersebut sudah disukai oleh user.
  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurantById(1);
  });

  // Sebaiknya tidak menambahkan restoran ke dalam daftar restoran yang disukai
  // ketika restoran tersebut tidak memiliki ID dan sistem tidak mengalami error.
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
