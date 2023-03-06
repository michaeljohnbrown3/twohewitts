export const pictureBorder = document.querySelector('.picture-border');
export const header = document.querySelector('.header');
export const aboutUs = document.querySelector('.section__aboutus');
export const services = document.querySelector('.section__services');
export const tagline = document.querySelector('.tagline-container');
export const quote = document.querySelector('.quote-container');
export const headNav = document.querySelector('.head-nav');
export const galleryLink = document.querySelector('#gallery-link');
export const galleryLinkText = document.querySelector('#gallery-link-text');

export const headerHeight = header.getBoundingClientRect().height;
export const headNavHeight = headNav.getBoundingClientRect().height;
export const aboutUsHeight = aboutUs.getBoundingClientRect().height;
export const servicesHeight = services.getBoundingClientRect().height;

export const topAlign = headerHeight + headNavHeight;

export const fixedQuoteBtn = document.querySelector(
  '.quote-btn-container__fixed'
);
export const quoteBack = document.querySelector('#quote-back');
export const quoteSubmit = document.querySelector('#quote-submit');
export const form = document.querySelector('.form');
export const quoteRequestBtn = document.querySelectorAll('.quote-request-btn');

export const quoteName = document.querySelector('#name');
export const quotePhone = document.querySelector('#phone');
export const quoteEmail = document.querySelector('#email');
export const quoteMaintenance = document.querySelector('#maintenance');
export const quoteDesign = document.querySelector('#design');
export const quoteOther = document.querySelector('#other');
export const quoteComments = document.querySelector('#comments');
