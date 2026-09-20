import './mobile-app.css';

const STORES = [
  {
    href: 'https://www.apple.com/app-store/',
    label: 'App Store',
    prefix: 'Available on the',
    icon: `
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.05 12.536c-.026-2.61 2.13-3.86 2.227-3.92-1.215-1.776-3.105-2.02-3.778-2.047-1.608-.163-3.14.946-3.956.946-.814 0-2.07-.924-3.404-.898-1.75.026-3.363 1.017-4.263 2.583-1.815 3.148-.463 7.803 1.303 10.36.864 1.252 1.896 2.654 3.253 2.604 1.306-.052 1.798-.844 3.375-.844 1.575 0 2.02.844 3.4.818 1.408-.026 2.297-1.27 3.158-2.53.99-1.457 1.4-2.87 1.42-2.94-.03-.013-2.723-1.045-2.75-4.14zM14.507 5.018c.72-.874 1.207-2.085 1.074-3.297-1.036.043-2.29.69-3.036 1.56-.667.773-1.253 2.005-1.096 3.19 1.154.09 2.335-.586 3.058-1.453z"/>
      </svg>
    `,
  },
  {
    href: 'https://play.google.com/store',
    label: 'Google Play',
    prefix: 'Available on',
    icon: `
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.6 2.2c-.3.3-.5.8-.5 1.4v16.8c0 .6.2 1.1.5 1.4l.1.1L13 12.4v-.2L3.7 2.1l-.1.1zM16.5 15.9l-2.9-2.9v-.2l2.9-2.9.1.1 3.4 1.9c1 .6 1 1.5 0 2.1l-3.4 1.9h-.1zM13.2 12.3l-9.5 9.5c.3.3.9.4 1.5.1l11-6.3-3-3.3zM13.2 11.7l3-3.3-11-6.3c-.6-.3-1.2-.2-1.5.1l9.5 9.5z"/>
      </svg>
    `,
  },
];

export function renderMobileApp() {
  const storesHtml = STORES.map(
    ({ href, label, prefix, icon }) => `
      <a
        class="store-btn"
        href="${href}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${prefix} ${label}"
      >
        <span class="store-btn__icon">${icon}</span>
        <span class="store-btn__text">
          <span class="store-btn__prefix">${prefix}</span>
          <span class="store-btn__label">${label}</span>
        </span>
      </a>
    `,
  ).join('');

  return `
    <section class="mobile-app" id="mobile">
      <div class="container mobile-app__inner">
        <div class="mobile-app__content">
          <h2 class="mobile-app__title">
            <span class="accent">Download</span> our app<br />
            to start ordering
          </h2>

          <p class="mobile-app__text">
            Download the Resource app today and experience the comfort of ordering
            your favorite coffee from wherever you are
          </p>

          <div class="mobile-app__stores">
            ${storesHtml}
          </div>
        </div>

        <div class="mobile-app__image-wrapper">
          <img
            class="mobile-app__image"
            src="/images/mobile.png"
            alt="Приложение Resource Coffee House на двух смартфонах"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  `;
}