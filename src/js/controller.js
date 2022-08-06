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

document
  .querySelector('.quote-request-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    if (quote.classList.contains('hidden-quote')) {
      quote.classList.remove('hidden-quote');
    } else {
      quote.classList.add('hidden-quote');
    }
  });
