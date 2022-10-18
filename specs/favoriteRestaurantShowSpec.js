import FavoriteRestaurantSearchView
  from '../src/scripts/views/pages/favorite/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter
  from '../src/scripts/views/pages/favorite/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('favorites').addEventListener('favorites:updated', () => {
        expect(document.querySelectorAll('.restaurant-item-not-found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('favorites').addEventListener('favorites:updated', () => {
        expect(document.querySelectorAll('item-restaurant').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11, name: 'tegar', rating: 4.5, description: 'ini adalah restoran tegar',
        },
        {
          id: 22, name: 'naufal', rating: 4.6, description: 'ini adalah restoran naufal',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
