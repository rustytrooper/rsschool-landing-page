import './header.css';
import { renderThemeToggle } from '../theme-toggle/theme-toggle.js';

const NAV_LINKS = [
  { id: 'favorite', label: 'Favorite coffee' },
  { id: 'about', label: 'About' },
  { id: 'mobile', label: 'Mobile app' },
  { id: 'contact', label: 'Contact us' },
];

export function renderHeader({ currentPage = 'home' } = {}) {
  const isHome = currentPage === 'home';
  const anchorPrefix = isHome ? '' : 'index.html';
  const catalogHref = isHome ? 'catalog.html' : '#';

  const navItems = NAV_LINKS.map(
    ({ id, label }) => `
      <li>
        <a class="header__link" href="${anchorPrefix}#${id}">${label}</a>
      </li>
    `,
  ).join('');

  return `
    <header class="header header--${isHome ? 'home' : 'catalog'}">
      <div class="container header__inner">
        <a class="header__logo" href="${isHome ? '#' : 'index.html'}" aria-label="Resource Coffee House — на главную">
          <img
            class="header__logo-img header__logo-img--light"
            src="/images/logo-light.png"
            alt="Resource Coffee House"
          />
          <img
            class="header__logo-img header__logo-img--dark"
            src="/images/logo-dark.png"
            alt=""
            aria-hidden="true"
          />
        </a>

        <nav class="header__nav" aria-label="Основная навигация">
          <ul class="header__nav-list">
            ${navItems}
          </ul>
        </nav>

        <div class="header__actions">
          ${renderThemeToggle()}

          <a class="header__menu-btn" href="${catalogHref}">
            <span>Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <button class="header__burger" type="button" aria-label="Открыть меню" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}