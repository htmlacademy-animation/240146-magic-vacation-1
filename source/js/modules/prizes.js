const prizesItemJourneys = document.querySelector(`.prizes__item--journeys`);
const prizesItemCases = document.querySelector(`.prizes__item--cases`);
const prizesItemCodes = document.querySelector(`.prizes__item--codes`);

const primaryAwardImg = document.querySelector(`.prizes__item-primary-svg`);
const primaryAwardSvgPath = `img/primary-award.svg`;

const secondaryAwardImg = document.querySelector(`.prizes__item-secondary-svg`);
const secondaryAwardSvgPath = `img/secondary-award.svg`;

const additionalAwardImg = document.querySelector(`.prizes__item-additional-svg`);
const additionalAwardSvgPath = `img/additional-award.svg`;

let isAnimationActive = false;

export const runPrizesAnimations = () => {
  if (!isAnimationActive) {
    prizesItemJourneys.classList.add(`active`);
    primaryAwardImg.src = `${primaryAwardSvgPath}?${Math.random()}`;

    setTimeout(() => {
      prizesItemCases.classList.add(`active`);
      secondaryAwardImg.src = `${secondaryAwardSvgPath}?${Math.random()}`;
    }, 3900);

    setTimeout(() => {
      prizesItemCodes.classList.add(`active`);
      additionalAwardImg.src = `${additionalAwardSvgPath}?${Math.random()}`;
    }, 5900);

    isAnimationActive = true;
  }
};

export default () => {
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
