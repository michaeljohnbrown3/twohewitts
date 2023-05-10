export function render() {
  const taglineEl = document.createElement('div');
  const taglineText = document.createElement('p');
  const quoteBtnEl = document.createElement('div');
  const quoteBtn = document.createElement('a');
  const svgEl = document.createElement('svg');
  const bubbleIcon = document.createElement('use');
  taglineEl.setAttribute('class', 'tagline-container');
  taglineText.setAttribute('class', 'tagline-container__text');
  taglineText.innerHTML = 'Making YOUR property YOUR paradise';
  quoteBtnEl.setAttribute(
    'class',
    'quote-btn-container quote-btn-container__fixed'
  );
  quoteBtn.setAttribute('class', 'quote-request-btn');
  svgEl.setAttribute('class', 'head-nav__icon');
  bubbleIcon.setAttribute('xlink:href', 'sprite.svg#icon-bubble');
  taglineEl.appendChild(taglineText);
  taglineEl.appendChild(quoteBtnEl);
  quoteBtnEl.appendChild(quoteBtn);
  // quoteBtn.innerHTML = 'Request a quote';
  quoteBtn.appendChild(svgEl);
  svgEl.appendChild(bubbleIcon);

  return taglineEl;

  /*
  return `
        <main>
          <div class="tagline-container">
            <div class="tagline-container__text">
              Making YOUR property YOUR paradise
            </div>
            <div class="quote-btn-container quote-btn-container__fixed">
              <a href="#" class="quote-request-btn">
                ${svgEl}
                Request a quote
              </a>
            </div>
          </div>  
          </div>
        </main>
        `;
        */
}
