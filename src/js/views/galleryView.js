import galleryData from './../../gallery-data/gallery.json';

export function render() {
  const markup = `
    <div class="tagline-container">
      <h2>Fountains</h2>
        <div class="gallery-section-container" id="gallery-fountains"></div>
      <h2>Gates and Fences</h2>
        <div class="gallery-section-container" id="gallery-gates"></div>
      <h2>Landscape Lighting</h2>
        <div class="gallery-section-container" id="gallery-lighting"></div>
      <h2>Plants in Decorative Pots</h2>
        <div class="gallery-section-container" id="gallery-pots"></div>
      <h2>Plants - Shade Tolerant</h2>
        <div class="gallery-section-container" id="gallery-shade"></div>
      <h2>Plants - Sun Tolerant</h2>
        <div class="gallery-section-container" id="gallery-sun"></div>
      <h2>Rocks, Boulders, Pavers, and Mulch</h2>
        <div class="gallery-section-container" id="gallery-rocks"></div>
      <h2>Turf and Artificial Ivy</h2>
        <div class="gallery-section-container" id="gallery-turf"></div>
    </div>
    `;
  return markup;
}

export function appendImg() {
  galleryData.forEach(photo => {
    console.log(photo);
    const identifySection = function () {
      if (photo.placement.fountains == true) return '#gallery-fountains';
      if (photo.placement.gatesAndFences == true) return '#gallery-gates';
      if (photo.placement.landscapeLighting == true) return '#gallery-lighting';
      if (photo.placement.plantsInDecorativePots == true)
        return '#gallery-pots';
      if (photo.placement.plantsShadeTolerant == true) return '#gallery-shade';
      if (photo.placement.plantsSunTolerant == true) return '#gallery-sun';
      if (photo.placement.rocksBouldersPaversAndMulch == true)
        return '#gallery-rocks';
      if (photo.placement.turfAndArtificialIvy == true) return '#gallery-turf';
    };
    const galleryContainer = document.querySelector(identifySection());
    const markup = `
    <img src="${photo.url}">
    `;
    galleryContainer.innerHTML = markup;
  });
}
