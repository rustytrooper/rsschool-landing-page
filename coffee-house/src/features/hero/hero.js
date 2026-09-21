import './hero.css';

export function renderHero() {
  return `
    <section class="hero" id="hero">
      <img
        class="hero__bg"
        src="/images/hero.jpg"
        alt=""
        aria-hidden="true"
      />

      <div class="hero__content container">
        <h1 class="hero__title">
          <span class="accent">Enjoy</span> premium coffee at our charming cafe
        </h1>

        <p class="hero__text">
          With its inviting atmosphere and delicious coffee options, the Coffee
          House Resource is a popular destination for coffee lovers and those
          seeking a warm and inviting space to enjoy their favorite beverage.
        </p>

        <a class="btn btn--primary hero__cta" href="catalog.html">Menu</a>
      </div>
    </section>
  `;
}