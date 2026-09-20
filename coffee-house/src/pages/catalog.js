import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/base.css';
import '../styles/themes.css';

import { renderFooter } from '../components/footer/footer.js';
import { renderHeader } from '../components/header/header.js';
import { renderCatalogGrid } from '../features/catalog-grid/catalog-grid.js';

document.querySelector('#header-root').innerHTML = renderHeader({
  currentPage: 'catalog',
});

document.querySelector('#catalog-root').innerHTML = renderCatalogGrid();

document.querySelector('#footer-root').innerHTML = renderFooter();