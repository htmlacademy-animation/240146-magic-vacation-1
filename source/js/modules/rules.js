import AccentTypographyBuild from './accentTypography';

export default () => {
  const rulesScreen = document.querySelector(`.screen--rules`);
  const rulesItemLastEl = document.querySelector(`.rules__item:last-child`);
  const rulesButton = document.querySelector(`.rules__link`);

  rulesItemLastEl.onanimationend = () => {
    rulesButton.classList.add(`active`);
  };

  const rulesTitleAnimation = new AccentTypographyBuild(`.rules__title`,
      500,
      `active`,
      `transform`);

  document.body.addEventListener(`screenChanged`, () => {
    const screenRulesActive = rulesScreen.classList.contains(`active`);

    if (screenRulesActive) {
      setTimeout(() => {
        rulesTitleAnimation.runAnimation();
      }, 250);
    } else {
      rulesTitleAnimation.destroyAnimation();
      if (rulesButton.classList.contains(`active`)) {
        rulesButton.classList.remove(`active`);
      }
    }
  });
};
