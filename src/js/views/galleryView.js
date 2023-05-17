import {
  NUM_DECORATIVE,
  NUM_FOUNTAIN,
  NUM_GATES,
  NUM_LIGHTING,
  NUM_ROCKS,
  NUM_SHADE,
  NUM_SUN,
  NUM_TURF,
} from '../config.js';
/**
 * <div class="container">
      <h1>Image Gallery</h1>
      <div id="gallery"></div>
    </div>
 * <div id="popup">
      <button class="picture-btn" id="previous"><</button>
      <img src="" alt="" id="selectedImage" />
      <button class="picture-btn" id="close">X</button>
      <button class="picture-btn" id="next">></button>
    </div> */
export function render() {
  const container = document.querySelector('.container');
  const gallery = document.createElement('div');
  gallery.classList.add('gallery-section');
  const popup = document.createElement('div');
  popup.classList.add('popup');
  const popupTitle = document.createElement('h2');
  popupTitle.classList.add('popup__title');
  const selectedImage = document.createElement('img');
  selectedImage.src = '';
  selectedImage.srcset = '';
  selectedImage.setAttribute('id', 'selected-image');
  container.appendChild(popup);

  const previousBtn = document.createElement('button');
  const nextBtn = document.createElement('button');
  const closeBtn = document.createElement('button');
  previousBtn.classList.add('picture-btn');
  previousBtn.textContent = '<';
  previousBtn.setAttribute('id', 'previous');
  nextBtn.classList.add('picture-btn');
  nextBtn.textContent = '>';
  nextBtn.setAttribute('id', 'next');
  closeBtn.classList.add('picture-btn', 'close-btn');
  closeBtn.textContent = 'X';
  closeBtn.setAttribute('id', 'close');

  popup.appendChild(popupTitle);
  popup.appendChild(previousBtn);
  popup.appendChild(selectedImage);
  popup.appendChild(nextBtn);
  popup.appendChild(closeBtn);

  let selectedSection;
  let selectedIndex;
  let maxIndex;

  const createGallerySection = (section, dir, picNum) => {
    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = section;
    sectionTitle.classList.add('section-title');
    gallery.appendChild(sectionTitle);

    for (let i = 1; i <= picNum; i++) {
      const image = document.createElement('img');
      image.src = `https://ik.imagekit.io/mjb06h/TwoHewitts/${dir}/tr:w-200/${dir}${i}.jpg`;
      // image.src = `https://ik.imagekit.io/mjb06h/TwoHewitts/${dir}/${dir}${i}.jpg`;
      gallery.appendChild(image);
      image.classList.add('galleryImg');

      image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`;
        popupTitle.textContent = `${section}`;
        selectedIndex = i;
        maxIndex = picNum;
        selectedSection = dir;
        selectedImage.src = `https://ik.imagekit.io/mjb06h/TwoHewitts/${dir}/tr:w-800/${dir}${i}.jpg`;
        selectedImage.srcset = `https://ik.imagekit.io/mjb06h/TwoHewitts/${dir}/tr:w-400/${dir}${i}.jpg 400w, https://ik.imagekit.io/mjb06h/TwoHewitts/${dir}/tr:w-800/${dir}${i}.jpg 800w, https://ik.imagekit.io/mjb06h/TwoHewitts/${dir}/tr:w-1200/${dir}${i}.jpg 1200w`;
      });
    }
  };

  createGallerySection('Fountains', 'fountains', NUM_FOUNTAIN);
  createGallerySection('Gates', 'gates', NUM_GATES);
  createGallerySection('Lighting', 'lighting', NUM_LIGHTING);
  createGallerySection(
    'Plants in Decorative Pots',
    'decorative',
    NUM_DECORATIVE
  );
  createGallerySection('Shade Tolerant Plants', 'shade', NUM_SHADE);
  createGallerySection('Sun Tolerant Plants', 'sun', NUM_SUN);
  createGallerySection(
    'Rocks, Boulders, Pavers, and Mulch',
    'rocks',
    NUM_ROCKS
  );
  createGallerySection('Turf and Artificial Ivy', 'turf', NUM_TURF);

  previousBtn.addEventListener('click', () => {
    if (selectedIndex == 1) {
      selectedIndex = maxIndex;
    } else {
      selectedIndex = selectedIndex - 1;
    }
    selectedImage.src = '';
    selectedImage.srcset = '';
    selectedImage.src = `https://ik.imagekit.io/mjb06h/TwoHewitts/${selectedSection}/tr:w-800/${selectedSection}${selectedIndex}.jpg`;
    selectedImage.srcset = `https://ik.imagekit.io/mjb06h/TwoHewitts/${selectedSection}/tr:w-400/${selectedSection}${selectedIndex}.jpg 400w, https://ik.imagekit.io/mjb06h/TwoHewitts/${selectedSection}/tr:w-800/${selectedSection}${selectedIndex}.jpg 800w, https://ik.imagekit.io/mjb06h/TwoHewitts/${selectedSection}/tr:w-1200/${selectedSection}${selectedIndex}.jpg 1200w`;
  });

  nextBtn.addEventListener('click', () => {
    if (selectedIndex == maxIndex) {
      selectedIndex = 1;
    } else {
      selectedIndex = selectedIndex + 1;
    }
    selectedImage.src = '';
    selectedImage.srcset = '';
    selectedImage.src = `https://ik.imagekit.io/mjb06h/TwoHewitts/${selectedSection}/tr:w-800/${selectedSection}${selectedIndex}.jpg`;
    selectedImage.srcset = `https://ik.imagekit.io/mjb06h/TwoHewitts/${selectedSection}/tr:w-400/${selectedSection}${selectedIndex}.jpg 400w, https://ik.imagekit.io/mjb06h/TwoHewitts/${selectedSection}/tr:w-800/${selectedSection}${selectedIndex}.jpg 800w, https://ik.imagekit.io/mjb06h/TwoHewitts/${selectedSection}/tr:w-1200/${selectedSection}${selectedIndex}.jpg 1200w`;
  });

  closeBtn.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
  });
  return gallery;
}

/*
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
*/
