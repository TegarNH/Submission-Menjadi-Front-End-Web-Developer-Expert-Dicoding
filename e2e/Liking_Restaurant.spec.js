Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement('item-restaurant', 10);
  I.seeElement('.btn-detail');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.click(locate('.btn-detail').first());

  I.seeElement('.restaurant__name');
  const restaurantNameValue = await I.grabTextFrom('.restaurant__name');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  I.see(restaurantNameValue, '.restaurant-item__name');
});

Scenario('cancel linking one restaurant after liking one restaurant', async ({ I }) => {
  I.click(locate('.btn-detail').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // Tahap membatalkan menyukai restoran
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  I.seeElement('.btn-detail');
  I.click(locate('.btn-detail').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // Memeriksa apakah tampil informasi tidak ada restoran
  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found');
});

Scenario('cancel linking one restaurant after liking three restaurant', async ({ I }) => {
  // Mensimulasikan menyukai restoran sebanyak 3x
  const restaurantsFavorite = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.btn-detail').at(i));
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
    restaurantsFavorite.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  // Tahap membatalkan menyukai restoran
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  I.seeElement('.btn-detail');
  I.click(locate('.btn-detail').first());

  I.seeElement('.restaurant__name');
  const restaurantNameValue = await I.grabTextFrom('.restaurant__name');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // Memeriksa apakah ada restoran yang disukai
  I.amOnPage('/#/favorite');
  I.dontSee(restaurantNameValue, '.restaurant-item__name');
});
