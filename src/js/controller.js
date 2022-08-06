import '../sass/main.scss';
import * as model from './model';

import { navTitle, navItem } from './views/navView';
import {
  header,
  aboutUs,
  services,
  aboutUsHeight,
  tagline,
} from './views/View';

const displaceHidden = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navTitle.classList.remove('hidden');
  else navTitle.classList.add('hidden');
};

let activeSidebarLink = 'tagline-container';

const removeActiveClassFromSidebar = function () {
  const sideNavItems = document.querySelectorAll('.side-nav__item');
  console.log(sideNavItems);
  sideNavItems.forEach(item => {
    if (item.className.includes('active')) {
      item.classList.remove('side-nav__item--active');
    }
  });
};

const displaySection = function (entries) {
  const [entry] = entries;
  console.log({ entries });
  const entryTarget = entry.target.className;
  console.log(entry);
  console.log({ entryTarget });
  console.log({ activeSidebarLink });

  if (entry.isIntersecting) {
    if (entryTarget === 'tagline-container') {
      activeSidebarLink = 'tagline-container';
      removeActiveClassFromSidebar();
      return;
    }

    if (activeSidebarLink !== entryTarget) {
      // remove any active link if it's selected
      if (activeSidebarLink !== 'tagline-container') {
        console.log('triggered');
        const navActiveLink = activeSidebarLink.replace('section', 'side-nav');
        const navActiveLinkEl = document.querySelector(`#${navActiveLink}`);
        navActiveLinkEl.classList.remove('side-nav__item--active');
      }
      // Config which el is new active link
      activeSidebarLink = entryTarget;

      // Applying class to config active link
      const navLink = entryTarget.replace('section', 'side-nav');
      const navLinkEl = document.querySelector(`#${navLink}`);
      navLinkEl.classList.add('side-nav__item--active');
    }
  }

  // if (!entry.isIntersecting) navItem.classList.remove('side-nav__item--active');
  // else navItem.classList.add('side-nav__item--active');
};

const headerObserver = new IntersectionObserver(displaceHidden, {
  root: null,
  threshold: 0,
});

const sectionObserver = new IntersectionObserver(displaySection, {
  root: null,
  threshold: 0,
});

// const sectionTwoObserver = new IntersectionObserver(displaySection, {
//   root: null,
//   threshold: 0,
// });

const init = function () {
  headerObserver.observe(header);
  sectionObserver.observe(aboutUs);
  sectionObserver.observe(services);
  sectionObserver.observe(tagline);
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
