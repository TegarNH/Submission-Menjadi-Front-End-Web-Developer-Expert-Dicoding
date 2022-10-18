const assert = require('assert');

Feature('Looking for Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement('item-restaurant', 10);
  I.seeElement('.btn-detail');
});

Scenario('if the restaurant is found', async ({ I }) => {
  // Mensimulasikan menyukai restoran sebanyak 3x
  const restaurantsName = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.btn-detail').at(i));
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
    restaurantsName.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  // Tahap mencari restoran
  I.amOnPage('/#/favorite');
  I.seeElement('#searchRestaurantName');

  // Mengambil huruf kedua dan ketiga dari nama restoran yang disukai untuk dilakukan pencarian
  const searchQuery = restaurantsName[1].substring(1, 3);
  const matchingRestaurants = restaurantsName.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#searchRestaurantName', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-item__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});

Scenario('if the restaurant is not found', async ({ I }) => {
  // Mensimulasikan menyukai restoran sebanyak 3x
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.btn-detail').at(i));
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
    I.amOnPage('/');
  }

  // Tahap mencari restoran
  I.amOnPage('/#/favorite');
  I.seeElement('#searchRestaurantName');

  // Mengisikan field search dengan tidak sesuai
  const searchQuery = 'ab2342h2hd2';

  I.fillField('#searchRestaurantName', searchQuery);
  I.pressKey('Enter');

  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found');
});
