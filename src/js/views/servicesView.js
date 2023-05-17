export function render() {
  return `
  <div class="section__services" id="services">
    <div class="services">
        <div class="services__container">
            <div class="card">
                <div class="card__side card__side--front card__side--front-1">
                    <h2 class="services__heading">Premium lawn services</h2>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                    <h2 class="services__heading services__heading--back">
                        Premium lawn services
                    </h2>
                    <p class="services__text">
                        We provide lawn maintenance services by the month or per cut. We
                        cater to each property, as all properties have different needs.
                        T.W.O. Hewitt’s, Inc. will always strive to meet customers needs
                        when it comes to the frequency, individuality, and quality of
                        the services we provide.
                    </p>
                    <div class="quote-btn-container">
                        <a href="#" class="quote-request-btn">
                            <svg class="head-nav__icon">
                                <use xlink:href="src/assets/sprite.svg#icon-bubble"></use>
                            </svg>
                            Request a quote
                        </a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front card__side--front-2">
                <h2 class="services__heading">Innovative landscaping</h2>
                </div>
                <div class="card__side card__side--back card__side--back-2">
                <h2 class="services__heading services__heading--back">
                    Innovative landscaping
                </h2>
                <p class="services__text">
                    TWO Hewitts, Inc. offers landscape design and installation. We
                    take the time to meet with the customer to bring their ideas to
                    fruition. From start to finish, we make sure the job is done
                    right!
                </p>
                <div class="quote-btn-container">
                    <a href="#" class="quote-request-btn">
                    <svg class="head-nav__icon">
                        <use xlink:href="src/assets/sprite.svg#icon-bubble"></use>
                    </svg>
                    Request a quote
                    </a>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front card__side--front-3">
                    <h2 class="services__heading">Other Services</h2>
                </div>
                <div class="card__side card__side--back card__side--back-3">
                    <h2 class="services__heading services__heading--back">
                    Other Services
                    </h2>
                    <ul class="other-services__list">
                        <li class="other-services__list--item">
                        Irrigation Design, Installation, and Maintenance
                        </li>
                        <li class="other-services__list--item">Landscape Lighting</li>
                        <li class="other-services__list--item">
                        Fence Repair and Gate Installation
                        </li>
                        <li class="other-services__list--item">
                        Fountain and Water Features
                        </li>
                        <li class="other-services__list--item">Artificial Turf</li>
                        <li class="other-services__list--item">Hardscapes</li>
                        <li class="other-services__list--item">Artificial Ivy Walls</li>
                        <!---    <li class="other-services__list--item">Fertilization</li> -->
                    </ul>
                    <div class="quote-btn-container">
                        <a href="#" class="quote-request-btn">
                        <svg class="head-nav__icon">
                            <use xlink:href="src/assets/sprite.svg#icon-bubble"></use>
                        </svg>
                        Request a quote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
}
