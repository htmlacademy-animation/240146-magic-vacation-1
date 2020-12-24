import AccentTypographyBuild from './accentTypography';

let isAnimationActive = false;
let introTitleAnimation = null;
let introDateAnimation = null;

export const runIntroAnimations = () => {
  isAnimationActive = true;
  setTimeout(() => {
    introTitleAnimation.runAnimation();
    introDateAnimation.runAnimation();
  }, 250);
};

export const destroyIntroAnimations = () => {
  if (isAnimationActive) {
    introTitleAnimation.destroyAnimation();
    introDateAnimation.destroyAnimation();
    isAnimationActive = false;
  }
};

export default () => {
  introTitleAnimation = new AccentTypographyBuild(`.intro__title`,
      500,
      600,
      `active`,
      `transform`);

  introDateAnimation = new AccentTypographyBuild(`.intro__date`,
      500,
      800,
      `active`,
      `transform`);
};
