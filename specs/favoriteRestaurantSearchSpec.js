import FavoriteRestaurantSearchPresenter
  from '../src/scripts/views/pages/favorite/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView
  from '../src/scripts/views/pages/favorite/favorite-restaurant-search-view';
import '../src/scripts/views/components/search-restaurant';
import '../src/scripts/views/components/item-restaurant';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('searchRestaurantName');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('restoran tegar');

      expect(presenter.latestQuery)
        .toEqual('restoran tegar');
    });

    it('should ask the model to search for restaurants', () => {
      searchRestaurants('restoran tegar');

      expect(favoriteRestaurants.searchRestaurants)
        .toHaveBeenCalledWith('restoran tegar');
    });

    it('should show the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('item-restaurant').length)
        .toEqual(1);

      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
      }, {
        id: 2,
        name: 'Dua',
      }]);
      expect(document.querySelectorAll('item-restaurant').length)
        .toEqual(2);
    });

    it('should show the name of the found restaurants', () => {
      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
      }]);
      expect(document.querySelectorAll('.restaurant-item__name')
        .item(0).textContent)
        .toEqual('Satu');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('favorites').addEventListener('favorites:updated', () => {
        expect(document.querySelectorAll('.restaurant-item-not-found').length).toEqual(1);

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restoran tegar').and.returnValues([]);

      searchRestaurants('restoran tegar');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('favorites').addEventListener('favorites:updated', () => {
        expect(document.querySelectorAll('item-restaurant').length)
          .toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restoran tegar')
        .and
        .returnValues([]);

      searchRestaurants('restoran tegar');
    });
  });
});
