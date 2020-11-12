export default class AccentTypographyBuild {
  constructor(elementSelector, timer, delay = 0, classForActivate, property) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;

    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0 + delay;
    this._offsetStep = 20;
    this._previousLargestOffset = this._timeOffset;
    this._i = 1;

    this.prePareText();
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;

    if (this._i === 0) {
      this._timeOffset = this._previousLargestOffset + this._offsetStep;
      this._i++;
    } else if (this._i === 1) {
      this._timeOffset += this._offsetStep * 2;
      this._previousLargestOffset = this._timeOffset;
      this._i++;
    } else if (this._i === 2) {
      this._timeOffset = this._previousLargestOffset - this._offsetStep;
      this._i = 0;
    }

    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent
      .trim()
      .split(` `)
      .filter((latter) => latter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter) => {
        fragment.appendChild(this.createElement(latter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
