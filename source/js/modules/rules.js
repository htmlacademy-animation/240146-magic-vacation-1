export default () => {
  const rulesItemLastEl = document.querySelector(`.rules__item:last-child`);
  const rulesButton = document.querySelector(`.rules__link`);

  rulesItemLastEl.onanimationend = () => {
    rulesButton.classList.add(`active`);
  };
};
