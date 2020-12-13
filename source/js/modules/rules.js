import AccentTypographyBuild from './accentTypography';

const rulesItemLastEl = document.querySelector(`.rules__item:last-child`);
const rulesButton = document.querySelector(`.rules__link`);

let isAnimationActive = false;
let rulesTitleAnimation = null;

export const runRulesAnimation = () => {
  isAnimationActive = true;
  setTimeout(() => {
    rulesTitleAnimation.runAnimation();
  }, 250);
};

export const destroyRulesAnimation = () => {
  if (isAnimationActive) {
    rulesTitleAnimation.destroyAnimation();
    if (rulesButton.classList.contains(`active`)) {
      rulesButton.classList.remove(`active`);
    }
    isAnimationActive = false;
  }
};


export default () => {
  rulesItemLastEl.onanimationend = () => {
    rulesButton.classList.add(`active`);
  };

  rulesTitleAnimation = new AccentTypographyBuild(`.rules__title`,
      500,
      600,
      `active`,
      `transform`);
};
