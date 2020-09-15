import AccentTypographyBuild from './accentTypography';

export default () => {
  const introScreen = document.querySelector(`.screen--intro`);

  const introTitleAnimation = new AccentTypographyBuild(`.intro__title`,
      500,
      `active`,
      `transform`);

  const introDateAnimation = new AccentTypographyBuild(`.intro__date`,
      500,
      `active`,
      `transform`);

  document.body.addEventListener(`screenChanged`, () => {
    const introScreenActive = introScreen.classList.contains(`active`);

    if (introScreenActive) {
      setTimeout(() => {
        introTitleAnimation.runAnimation();
        introDateAnimation.runAnimation();
      }, 250);
    } else {
      introTitleAnimation.destroyAnimation();
      introDateAnimation.destroyAnimation();
    }
  });

};
