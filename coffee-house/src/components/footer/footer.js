import './footer.css';

const SOCIALS = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/',
    icon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 5.92006C22 5.92006 21.07 6.48006 20.56 6.64006C20.2807 6.3139 19.9305 6.05508 19.5361 5.88294C19.1417 5.7108 18.7132 5.62978 18.283 5.64594C17.8528 5.66209 17.4317 5.775 17.0509 5.97638C16.6702 6.17775 16.3396 6.4623 16.0834 6.80875C15.8273 7.15521 15.6524 7.55462 15.5717 7.97746C15.4911 8.4003 15.507 8.83575 15.618 9.25006L15.618 9.70006C14.8194 9.72077 14.0279 9.54525 13.3075 9.188C12.5872 8.83076 11.9577 8.30106 11.47 7.64006C11.47 7.64006 9.67 12.0001 13.72 13.7501C12.7901 14.3757 11.6932 14.6942 10.578 14.6648C9.46277 14.6354 8.3841 14.2595 7.48799 13.5901C7.48799 13.5901 11.47 17.5001 16.47 13.7501C16.47 12.1101 16.46 9.84006 16.3 9.63006C16.7703 9.15854 17.2381 5.92006 22 5.92006Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
    icon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    `,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/',
    icon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8H13C12.4477 8 12 8.44772 12 9V10H14L13.5 13H12V20H9V13H7V10H9V9C9 7.34315 10.3431 6 12 6H14V8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
    `,
  },
];

const CONTACTS = [
  {
    label: 'Адрес',
    value: '8558 Green Rd., LA',
    href: 'https://maps.google.com/?q=8558+Green+Rd,+LA',
    external: true,
    icon: `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    `,
  },
  {
    label: 'Телефон',
    value: '+1 (603) 555-0123',
    href: 'tel:+16035550123',
    external: false,
    icon: `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    label: 'Часы работы',
    value: 'Mon–Sat: 9:00–23:00',
    href: null, 
    external: false,
    icon: `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="8.333" stroke="currentColor" stroke-width="1.5"/>
        <path d="M10 5V10L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
];

export function renderFooter() {
  const socialsHtml = SOCIALS.map(
    ({ name, href, icon }) => `
      <li>
        <a
          class="footer__social"
          href="${href}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${name}"
        >
          ${icon}
        </a>
      </li>
    `,
  ).join('');

  const contactsHtml = CONTACTS.map(({ label, value, href, external, icon }) => {
    const inner = `
      <span class="footer__contact-icon">${icon}</span>
      <span class="footer__contact-text">${value}</span>
    `;

    if (!href) {
      return `
        <li class="footer__contact">
          ${inner}
        </li>
      `;
    }

    const externalAttrs = external
      ? 'target="_blank" rel="noopener noreferrer"'
      : '';

    return `
      <li>
        <a
          class="footer__contact"
          href="${href}"
          ${externalAttrs}
          aria-label="${label}: ${value}"
        >
          ${inner}
        </a>
      </li>
    `;
  }).join('');

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__left">
            <h2 class="footer__title">
              Sip, Savor, Smile.<br />
              <span class="accent footer__title-accent">It’s coffee time!</span>
            </h2>

            <ul class="footer__socials">
              ${socialsHtml}
            </ul>
          </div>

          <div class="footer__right">
            <h3 class="footer__subtitle">Contact us</h3>
            <ul class="footer__contacts">
              ${contactsHtml}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `;
}