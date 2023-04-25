const contentContainer = document.querySelector('#content');

async function load() {
  const page = await import('./views/mainView');
  // Render page
  const content = page.render();
  contentContainer.innerHTML = content;
}
load();

const galleryLink = document.querySelector('#gallery-link');
galleryLink.addEventListener('click', e => {
  e.preventDefault();
  async function loadGallery() {
    const page = await import('./views/galleryView');
    const content = page.render();
    contentContainer.innerHTML = '';
    contentContainer.appendChild(content);
    console.log(contentContainer);
  }
  loadGallery();
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
