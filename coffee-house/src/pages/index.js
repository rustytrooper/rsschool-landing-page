import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/base.css';
import '../styles/themes.css';

import { renderFooter } from '../components/footer/footer.js';
import { renderHeader } from '../components/header/header.js';
import { renderHero } from '../features/hero/hero.js';
import { renderSlider } from '../features/slider/slider.js';
import { renderAbout } from '../features/about/about.js';
import { renderMobileApp } from '../features/mobile-app/mobile-app.js';

document.querySelector('#header-root').innerHTML = renderHeader({
  currentPage: 'home',
});

document.querySelector('#hero-root').innerHTML = renderHero();

document.querySelector('#slider-root').innerHTML = renderSlider();

document.querySelector('#about-root').innerHTML = renderAbout();

document.querySelector('#mobile-root').innerHTML = renderMobileApp();

document.querySelector('#footer-root').innerHTML = renderFooter();