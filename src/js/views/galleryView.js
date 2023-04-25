import galleryData from './../../gallery-data/gallery.json';

export function render() {
  const galleryEl = document.createElement('div');
  galleryEl.setAttribute('class', 'gallery-section');

  // RENDER LOADING SPINNER HERE

  const renderSection = function (id, title) {
    const sectionHeader = document.createElement('h2');
    sectionHeader.setAttribute('class', 'gallery-section__header');
    sectionHeader.textContent = `${title}`;

    const sectionContainer = document.createElement('div');
    sectionContainer.setAttribute('class', 'gallery-section__container');
    sectionContainer.setAttribute('id', `gallery-${id}`);
    galleryEl.appendChild(sectionHeader);

    const loadImg = src =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });

    let imgParse = [];
    galleryData.forEach(img => {
      if (img.placement == id) {
        imgParse.push(img);
      }
    });

    const imgUrls = imgParse.map(img => {
      return img.urlthumb;
    });

    Promise.all(imgUrls.map(loadImg)).then(imgs => {
      imgs.forEach(img => {
        const imgBox = document.createElement('div');
        const image = img;
        imgBox.setAttribute('class', 'gallery-section__container--photo-box');
        image.setAttribute('class', 'gallery-section__container--photo');
        imgBox.appendChild(image);
        sectionContainer.appendChild(imgBox);
      });
    });

    return sectionContainer;
  };
  galleryEl.appendChild(renderSection('fountains', 'Fountains'));
  galleryEl.appendChild(renderSection('gates', 'Gates and Fences'));
  galleryEl.appendChild(renderSection('lighting', 'Landscape Lighting'));
  galleryEl.appendChild(
    renderSection('decorative', 'Plants in Decorative Pots')
  );
  galleryEl.appendChild(renderSection('shade', 'Plants - Shade Tolerant'));
  galleryEl.appendChild(renderSection('sun', 'Plants - Sun Tolerant'));
  galleryEl.appendChild(
    renderSection('rocks', 'Rocks, Boulders, Pavers, and Mulch')
  );
  galleryEl.appendChild(renderSection('turf', 'Turf and Artificial Ivy'));

  return galleryEl;
}
