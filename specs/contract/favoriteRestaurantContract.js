const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurantById(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurantById(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurantById(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurantById(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurantById(4);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteRestaurant.putRestaurant({ id: 1, name: 'restoran tegar' });
    favoriteRestaurant.putRestaurant({ id: 2, name: 'restoran naufal' });
    favoriteRestaurant.putRestaurant({ id: 3, name: 'restoran hanip' });
    favoriteRestaurant.putRestaurant({ id: 4, name: 'ini restoran tegar' });

    expect(await favoriteRestaurant.searchRestaurants('restoran tegar')).toEqual([
      { id: 1, name: 'restoran tegar' },
      { id: 4, name: 'ini restoran tegar' },
    ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
