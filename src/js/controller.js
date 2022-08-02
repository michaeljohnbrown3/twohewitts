import '../sass/main.scss';

const tagline = document.querySelector('.tagline-container__text');
const replaceTagline = function (text) {
  tagline.textContent = `${text}`;
};

replaceTagline('HOWDY!');
