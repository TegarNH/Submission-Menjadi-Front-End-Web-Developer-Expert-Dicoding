const DrawerInitiator = {
  init({
    button, itemDrawers, drawer, content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    itemDrawers.forEach((itemDrawer) => {
      itemDrawer.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
