import '../sass/main.scss';
import * as model from './model';

import { navTitle, navItem } from './views/navView';
import { header, aboutUs, services, aboutUsHeight } from './views/View';

const displaceHidden = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navTitle.classList.remove('hidden');
  else navTitle.classList.add('hidden');
};

const displaySection = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) navItem.classList.remove('side-nav__item--active');
  else navItem.classList.add('side-nav__item--active');
};

const headerObserver = new IntersectionObserver(displaceHidden, {
  root: null,
  threshold: 0,
});

const sectionObserver = new IntersectionObserver(displaySection, {
  root: null,
  threshold: 0,
});

const sectionTwoObserver = new IntersectionObserver(displaySection, {
  root: null,
  threshold: 0,
});

const init = function () {
  headerObserver.observe(header);
  sectionObserver.observe(aboutUs);
  sectionTwoObserver.observe(services);
};
init();

document.querySelector('.side-nav').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('side-nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelector(
  '.footer__certifications--copyright'
).textContent = `${new Date().getFullYear()} T.W.O. Hewitts LLC`;
