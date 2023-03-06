import '../sass/main.scss';
import * as model from './model';

import { navTitle, navItem } from './views/navView';
import {
  header,
  aboutUs,
  services,
  aboutUsHeight,
  tagline,
  quote,
  headNavHeight,
  galleryLink,
  galleryLinkText,
  quoteBack,
} from './views/View';

const init = function () {
  // headerObserver.observe(header);
  // sectionObserver.observe(aboutUs);
  // sectionObserver.observe(services);
  // sectionObserver.observe(tagline);
};
init();

document.querySelector('.head-nav').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('head-nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelector(
  '.footer__certifications--copyright'
).textContent = `${new Date().getFullYear()} T.W.O. Hewitts LLC`;

galleryLink.addEventListener('mouseover', () => {
  galleryLinkText.textContent = 'coming soon!';

  galleryLink.addEventListener('mouseout', () => {
    galleryLinkText.textContent = 'gallery';
  });
});

document
  .querySelector('.quote-request-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    if (quote.classList.contains('hidden-quote')) {
      quote.classList.remove('hidden-quote');
      quote.style.width = '100vw';
      quote.style.height = '100vh';
    } else {
      quote.classList.add('hidden-quote');
      quote.style.width = '0vw';
      quote.style.height = '0vh';
    }
  });

quoteBack.addEventListener('click', e => {
  e.preventDefault();
  quote.classList.add('hidden-quote');
  quote.style.width = '0vw';
  quote.style.height = '0vh';
});
