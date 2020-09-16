export default () => {
  const screenOverlay = document.querySelector(`.screen-overlay`);
  const prizesScreen = document.querySelector(`.screen--prizes`);

  document.body.addEventListener(`screenChanged`, () => {
    const prizesScreenActive = prizesScreen.classList.contains(`active`);
    const screenOverlayActive = screenOverlay.classList.contains(`active`);
    if (prizesScreenActive) {
      screenOverlay.classList.add(`active`);
    } else if (screenOverlayActive) {
      screenOverlay.classList.remove(`active`);
    }
  });
};
