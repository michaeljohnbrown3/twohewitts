export function render() {
  return `
        <main>
          <div class="quote-container hidden-quote">
            <div class="quote">
              <div class="quote__form">
                <form action="#" class="form">
                  <div class="quote__form--input-align">
                    <div>
                      <div class="form__group">
                        <input
                          type="text"
                          class="form__input"
                          placeholder="Full name"
                          id="name"
                          required
                        />
                        <label for="name" class="form__label">Full name</label>
                      </div>
                      <div class="form__group">
                        <input
                          type="tel"
                          class="form__input"
                          placeholder="Phone number"
                          id="phone"
                          required
                        />
                        <label for="phone" class="form__label">Phone number</label>
                      </div>
                      <div class="form__group">
                        <input
                          type="email"
                          class="form__input"
                          placeholder="Email"
                          id="email"
                          required
                        />
                        <label for="email" class="form__label">Email</label>
                      </div>
                    </div>
                    <div>
                      <div class="form__checkbox-group">
                        <input
                          type="checkbox"
                          class="form__checkbox-input"
                          id="maintenance"
                          name="size"
                        />
                        <label for="maintenance" class="form__checkbox-label">
                          <span class="form__checkbox-button"></span>
                          Lawn maintenance
                        </label>
                      </div>
                      <div class="form__checkbox-group">
                        <input
                          type="checkbox"
                          class="form__checkbox-input"
                          id="design"
                          name="size"
                        />
                        <label for="design" class="form__checkbox-label">
                          <span class="form__checkbox-button"></span>
                          Landscape design
                        </label>
                      </div>
                      <div class="form__checkbox-group">
                        <input
                          type="checkbox"
                          class="form__checkbox-input"
                          id="other"
                          name="size"
                        />
                        <label for="other" class="form__checkbox-label">
                          <span class="form__checkbox-button"></span>
                          Other services (please specify in comments)
                        </label>
                      </div>
                      <div class="form__group">
                        <input
                          type="text"
                          class="form__input form__other"
                          placeholder="Other comments"
                          id="comments"
                        />
                        <label for="comments" class="form__label">Other comments</label>
                      </div>
                    </div>
                  </div>
                  <div class="form__btns">
                    <div class="form__submit-btn">
                      <button class="submit-btn" id="quote-submit">
                        Send request!
                      </button>
                    </div>
                    <div class="form__back-btn">
                      <button class="submit-btn back-btn" id="quote-back">
                        Go back
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
          <!--LANDING PAGE-->
          <!--TAGLINE CONTAINER-->
          <div class="tagline-container">
            <div class="tagline-container__text">
              Making YOUR property YOUR paradise
            </div>
            <div class="quote-btn-container quote-btn-container__fixed">
              <a href="#" class="quote-request-btn">
                <svg class="head-nav__icon">
                  <use xlink:href="src/assets/sprite.svg#icon-bubble"></use>
                </svg>
                Request a quote
              </a>
            </div>
          </div>
        
          <!--ABOUT US-->
          <div class="landing-page">
            <div class="section__aboutus" id="about">
              <div class="aboutus-container">
                <div class="aboutus-container__text">
                  <div class="aboutus-container__photo">
                    <img
                      src="src/assets/images/IMG_0263.jpg"
                      alt="Photo 1"
                      class="aboutus-container__photo--file"
                    />
                  </div>
                  <h3 class="aboutus-container__text--title">About us</h3>
                  <p class="aboutus-container__text--paragraph">
                    T.W.O. Hewitt’s, Inc. is a family owned company with more than 20
                    years experience in lawn maintenance and landscaping. We are
                    licensed and fully insured.
                  </p>
                </div>
              </div>
            </div>
        
            <!--SERVICES-->
            <div class="section__services" id="services">
              <div class="heading-secondary white section__services--title">
                Services
              </div>
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
            </div>
          </div>
        </main>
        `;
}
