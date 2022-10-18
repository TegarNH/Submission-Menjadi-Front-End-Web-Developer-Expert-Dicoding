import 'regenerator-runtime';

import restaurants from '../scripts/data/DATA.json';
import recom_restaurants from '../scripts/data/RECOM-RESTO.json';

import '../styles/main.scss';
import './components/app-bar';

function renderItemResto(resto) {
  return `
      <article class="resto-item">
        <img class="resto-item__thumbnail"
            src="${resto.pictureId}"
            alt="Gambar restoran ${resto.name}">
        <div class="resto-item__content">
          <h3 class="resto-item__title">${resto.name}</h3>
          <p class="resto-item__city"><span class="material-icons" aria-hidden="true">location_on</span> ${resto.city}</p>
          <p class="resto-item__rating"><span class="fa fa-star checked"></span> ${resto.rating}</p>
          <div>
            <p class="resto-item__description-title">Deskripsi</p>
            <p class="resto-item__description-content">${resto.description}</p>
          </div>
          <button class="btn btn-detail" id="btnDetail">Lihat Detail</button>
        </div>
      </article>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const recom_container = document.querySelector('.recommendation-container');
  const explore_container = document.querySelector('.explore-container');

  const menu = document.getElementById('btnMenu');
  const main = document.querySelector('main');
  const drawer = document.querySelector('.nav_list');

  recom_restaurants['recom-restaurants'].forEach((resto) => {
    recom_container.innerHTML += renderItemResto(resto);
  })

  restaurants.restaurants.forEach((resto) => {
    explore_container.innerHTML += renderItemResto(resto);
  })

  menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
  });

  main.addEventListener('click', function () {
    drawer.classList.remove('open');
  });
});

