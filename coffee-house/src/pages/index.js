import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/base.css';
import '../styles/themes.css';

import { renderFooter } from '../components/footer/footer.js';
import { renderHeader } from '../components/header/header.js';
import { renderHero } from '../features/hero/hero.js';

document.querySelector('#header-root').innerHTML = renderHeader({
  currentPage: 'home',
});

document.querySelector('#hero-root').innerHTML = renderHero();

document.querySelector('#footer-root').innerHTML = renderFooter();