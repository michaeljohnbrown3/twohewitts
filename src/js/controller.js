import '../sass/main.scss';
import * as model from './model';
import * as time from './views/timeView';

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
  quoteSubmit,
  quoteRequestBtn,
  form,
  quoteEmail,
  quotePhone,
  quoteName,
  quoteMaintenance,
  quoteDesign,
  quoteOther,
  quoteComments,
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

quoteRequestBtn.forEach(btn => {
  btn.addEventListener('click', function (e) {
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
});

quoteBack.addEventListener('click', e => {
  location.reload();
});

const sendEmail = function () {
  Email.send({
    SecureToken: '855468f7-42a8-49ee-bc80-44688872003e',
    To: 'michaeljohnbrown3@gmail.com',
    From: 'michaeljohnbrown3@gmail.com',
    Subject: 'Quote Requested!',
    Body: `You have received a request for a quote from ${quoteName.value} at ${
      time.date
    }. You can call them at ${quotePhone.value} or email them at ${
      quoteEmail.value
    }. ${
      quoteMaintenance.checked && quoteDesign.checked
        ? 'Their request is for LAWN MAINTENANCE and LANDSCAPE DESIGN.'
        : `${
            quoteMaintenance.checked
              ? 'Their request is for LAWN MAINTENANCE.'
              : `${
                  quoteDesign.checked
                    ? 'Their request is for LANDSCAPE DESIGN.'
                    : ''
                }`
          }`
    } ${quoteOther.checked ? 'They have requested OTHER SERVICES.' : ''} ${
      quoteComments.value === ''
        ? ''
        : `The requester made the following comments: ${quoteComments.value}`
    }`,
  }).then(message => (message === 'OK' ? '' : alert(message)));
};

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Form submitted!');
  console.log(time.date);
  sendEmail();
  quoteSubmit.style.backgroundColor = 'darkgrey';
  quoteSubmit.innerHTML = 'sending...';
  setTimeout(() => {
    quoteSubmit.style.backgroundColor = 'green';
    quoteSubmit.innerHTML = `request sent!`;
  }, 2500);
  setTimeout(() => {
    location.reload();
  }, 4500);
});
