import '../sass/main.scss';
import * as model from './model';

import { navTitle } from './views/navView';
import { header, headerHeight } from './views/View';

// clicking a nav button
const scrollTo = function () {};

const displaceHidden = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navTitle.classList.remove('hidden');
  else navTitle.classList.add('hidden');
};

export const headerObserver = new IntersectionObserver(displaceHidden, {
  root: null,
  threshold: 0,
});

const init = function () {
  headerObserver.observe(header);
};
init();
