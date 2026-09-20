import './slider.css';

const SLIDES = [
  {
    img: '/images/slider/coffee1.png',
    title: 'S’mores Frappuccino',
    text: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
    price: '$5.50',
  },
  {
    img: '/images/slider/coffee2.png',
    title: 'Caramel Macchiato',
    text: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, topped with creamy foam.',
    price: '$5.00',
  },
  {
    img: '/images/slider/coffee3.png',
    title: 'Ice coffee',
    text: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
    price: '$4.50',
  },
];

const ArrowLeft = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const ArrowRight = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 19M19 12L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export function renderSlider() {
  const slidesHtml = SLIDES.map(
    ({ img, title, text, price }) => `
      <li class="slider__slide">
        <img class="slider__img" src="${img}" alt="" aria-hidden="true" />
        <h3 class="slider__title">${title}</h3>
        <p class="slider__text">${text}</p>
        <p class="slider__price">${price}</p>
      </li>
    `,
  ).join('');

  const dotsHtml = SLIDES.map(
    (_, i) => `
      <li>
        <button
          class="slider__dot ${i === 0 ? 'is-active' : ''}"
          type="button"
          aria-label="Перейти к слайду ${i + 1}"
          ${i === 0 ? 'aria-current="true"' : ''}
        ></button>
      </li>
    `,
  ).join('');

  return `
    <section class="slider" id="favorite">
      <div class="container">
        <h2 class="slider__heading">
          Choose your <span class="accent">favorite</span> coffee
        </h2>

        <div class="slider__stage">
          <button class="slider__arrow slider__arrow--prev" type="button" aria-label="Предыдущий слайд">
            ${ArrowLeft}
          </button>

          <div class="slider__viewport">
            <ul class="slider__track">
              ${slidesHtml}
            </ul>
          </div>

          <button class="slider__arrow slider__arrow--next" type="button" aria-label="Следующий слайд">
            ${ArrowRight}
          </button>
        </div>

        <ul class="slider__dots">
          ${dotsHtml}
        </ul>
      </div>
    </section>
  `;
}