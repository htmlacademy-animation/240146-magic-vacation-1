export default () => {
  const prizesScreen = document.querySelector(`.screen--prizes`);
  const primaryAwardImg = document.querySelector(`.prizes__item-svg`);
  const primaryAwardSvgPath = `img/primary-award.svg`;
  let animationShown = false;

  document.body.addEventListener(`screenChanged`, () => {
    const prizesScreenActive = prizesScreen.classList.contains(`active`);

    if (prizesScreenActive && !animationShown) {
      primaryAwardImg.src = `${primaryAwardSvgPath}?${Math.random()}`;
      animationShown = true;
    }
  });


  // const screenOverlay = document.querySelector(`.screen-overlay`);

  // document.body.addEventListener(`screenChanged`, () => {
  //   const prizesScreenActive = prizesScreen.classList.contains(`active`);
  //   const screenOverlayActive = screenOverlay.classList.contains(`active`);
  //   if (prizesScreenActive) {
  //     screenOverlay.classList.add(`active`);
  //   } else if (screenOverlayActive) {
  //     screenOverlay.classList.remove(`active`);
  //   }
  // });
};
