const route = event => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
};

const routes = {
  404: '/src/pages/404.html',
  '/': '/src/pages/index.html',
  '/gallery': '/src/pages/gallery.html',
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
