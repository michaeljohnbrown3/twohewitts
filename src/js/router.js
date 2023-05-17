const contentContainer = document.querySelector('#content');
const headNavLinks = document.querySelectorAll('.head-nav__link');
console.log(headNavLinks);

function removeLinkSelection() {
  headNavLinks.forEach(el => {
    if (el.classList.contains('selected-link')) {
      el.classList.remove('selected-link');
    }
  });
}

async function load() {
  const page = await import('./views/mainView');
  // Render page
  const content = page.render();
  contentContainer.innerHTML = '';
  contentContainer.appendChild(content);
}
load();

const logoLink = document.querySelector('#logo-link');
logoLink.addEventListener('click', e => {
  e.preventDefault();
  async function loadHome() {
    const page = await import('./views/mainView');
    const content = page.render();
    contentContainer.innerHTML = '';
    contentContainer.appendChild(content);
    removeLinkSelection();
  }
  loadHome();
});

const galleryLink = document.querySelector('#gallery-link');
galleryLink.addEventListener('click', e => {
  e.preventDefault();
  async function loadGallery() {
    const page = await import('./views/galleryView');
    const content = page.render();
    contentContainer.innerHTML = '';
    contentContainer.appendChild(content);
    removeLinkSelection();
    galleryLink.classList.add('selected-link');
  }
  loadGallery();
});

const aboutLink = document.querySelector('#about-link');
aboutLink.addEventListener('click', e => {
  e.preventDefault();
  async function loadAbout() {
    const page = await import('./views/aboutView');
    const content = page.render();
    contentContainer.innerHTML = content;
    removeLinkSelection();
    aboutLink.classList.add('selected-link');
  }
  loadAbout();
});

const servicesLink = document.querySelector('#services-link');
servicesLink.addEventListener('click', e => {
  e.preventDefault();
  async function loadServices() {
    const page = await import('./views/servicesView');
    const content = page.render();
    contentContainer.innerHTML = content;
    removeLinkSelection();
    servicesLink.classList.add('selected-link');
  }
  loadServices();
});

/*
const route = event => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
};

const routes = {
  404: '../pages/404.html',
  '/': '../pages/main.html',
  '/gallery': '../pages/gallery.html',
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then(data => data.text());
  document.getElementById('content').innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
*/
