import './catalog-grid.css';
import { CARDS, CATEGORIES } from '../../data/cards.js';

const ACTIVE_CATEGORY = 'coffee';

const INITIAL_VISIBLE = 8;

export function renderCatalogGrid() {
  const activeCards = CARDS.filter((card) => card.category === ACTIVE_CATEGORY);

  const tabsHtml = CATEGORIES.map(
    ({ key, label }) => `
      <li>
        <button
          class="catalog-tab ${key === ACTIVE_CATEGORY ? 'is-active' : ''}"
          type="button"
          data-category="${key}"
          aria-pressed="${key === ACTIVE_CATEGORY}"
        >
          ${label}
        </button>
      </li>
    `,
  ).join('');

  const cardsHtml = activeCards
    .map(
      ({ id, name, description, price, image }) => `
        <li class="card">
          <img class="card__img" src="${image}" alt="${name}" loading="lazy" />
          <div class="card__body">
            <h3 class="card__title">${name}</h3>
            <p class="card__text">${description}</p>
            <p class="card__price">$${price.toFixed(2)}</p>
          </div>
        </li>
      `,
    )
    .join('');

  return `
    <section class="catalog">
      <div class="container">
        <h2 class="catalog__heading">
          Behind each of our cups hides an
          <span class="accent">amazing surprise</span>
        </h2>

        <ul class="catalog__tabs">
          ${tabsHtml}
        </ul>

        <ul class="catalog__grid">
          ${cardsHtml}
        </ul>

        <div class="catalog__more">
          <button class="btn btn--secondary" type="button">
            Show more
          </button>
        </div>
      </div>
    </section>
  `;
}