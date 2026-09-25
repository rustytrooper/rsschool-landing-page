import './catalog-grid.css';
import { CARDS, CATEGORIES } from '../../data/cards.js';

let currentCategory = CATEGORIES[0].key; 

export function renderCatalogGrid() {
  const cards = getCardsByCategory(currentCategory);

  return `
    <section class="catalog">
      <div class="container">
        <h2 class="catalog__heading">
          Behind each of our cups hides an
          <span class="accent">amazing surprise</span>
        </h2>

        <ul class="catalog__tabs">
          ${renderTabs()}
        </ul>

        <ul class="catalog__grid">
          ${renderCards(cards)}
        </ul>

        <div class="catalog__more">
          <button class="catalog__more-btn" type="button" aria-label="Показать ещё">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.5 3 18.5 5 20 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 3V8H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderTabs() {
  return CATEGORIES.map(
    ({ key, label }) => `
      <li>
        <button
          class="catalog-tab ${key === currentCategory ? 'is-active' : ''}"
          type="button"
          data-category="${key}"
          aria-pressed="${key === currentCategory}"
        >
          ${label}
        </button>
      </li>
    `,
  ).join('');
}

function renderCards(cards) {
  return cards
    .map(
      ({ id, name, description, price, image }) => `
        <li class="card" data-id="${id}">
          <div class="card__img-wrapper">
            <img class="card__img" src="${image}" alt="${name}" loading="lazy" />
          </div>
          <div class="card__body">
            <h3 class="card__title">${name}</h3>
            <p class="card__text">${description}</p>
            <p class="card__price">$${price.toFixed(2)}</p>
          </div>
        </li>
      `,
    )
    .join('');
}

function getCardsByCategory(category) {
  return CARDS.filter((card) => card.category === category);
}

function setCategory(key) {
  if (key === currentCategory) return;
  if (!CATEGORIES.some((c) => c.key === key)) return; 
  currentCategory = key;
  renderCatalog(); 
}


function renderCatalog() {
  const root = document.querySelector('#catalog-root');
  if (!root) return;
  root.innerHTML = renderCatalogGrid();
}

export function initCatalogGrid() {

  renderCatalog();
  const root = document.querySelector('#catalog-root');
  if (!root) return;

  root.addEventListener('click', (event) => {
    const tab = event.target.closest('.catalog-tab');
    if (!tab) return;

    const category = tab.dataset.category;
    setCategory(category);
  });
}