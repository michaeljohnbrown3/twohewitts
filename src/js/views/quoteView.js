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
          </main>
          `;
}
