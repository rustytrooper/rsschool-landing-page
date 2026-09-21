import './about.css';

const IMAGES = [
  {
    src: '/images/about/girl.jpg',
    alt: 'Девушка с чашкой кофе за столиком в кафе',
  },
  {
    src: '/images/about/boy.jpg',
    alt: 'Мужчина с ноутбуком и чашкой кофе',
  },
  {
    src: '/images/about/coffee-cp.jpg',
    alt: 'Столик с кофе и гирляндами',
  },
  {
    src: '/images/about/couple.jpg',
    alt: 'Пара с чашками кофе',
  },
];

export function renderAbout() {
  const imagesHtml = IMAGES.map(
    ({ src, alt }, i) => `
    <div class="card__img-wrapper">
      <img
        class="about__img about__img--${i + 1}"
        src="${src}"
        alt="${alt}"
        loading="lazy"
      />
      </div>
    `,
  ).join('');

  return `
    <section class="about" id="about">
      <div class="container">
        <h2 class="about__heading">
          Resource is <span class="accent">the perfect and cozy place</span> where
          you can enjoy a variety of hot beverages, relax, catch up with friends,
          or get some work done.
        </h2>

        <div class="about__gallery">
          ${imagesHtml}
        </div>
      </div>
    </section>
  `;
}