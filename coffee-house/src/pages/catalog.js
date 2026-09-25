import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/base.css';
import '../styles/themes.css';

import { renderFooter } from '../components/footer/footer.js';
import { renderHeader } from '../components/header/header.js';
import { initThemeToggle } from '../components/theme-toggle/theme-toggle.js';
import { initCatalogGrid } from '../features/catalog-grid/catalog-grid.js';

document.querySelector('#header-root').innerHTML = renderHeader({
  currentPage: 'catalog',
});

initThemeToggle();

initCatalogGrid(); 

document.querySelector('#footer-root').innerHTML = renderFooter();