import {animateProgress} from '../helpers/animate';

const prizesItemJourneys = document.querySelector(`.prizes__item--journeys`);
const prizesItemCases = document.querySelector(`.prizes__item--cases`);
const prizesItemCodes = document.querySelector(`.prizes__item--codes`);

const primaryAwardImg = document.querySelector(`.prizes__item-primary-svg`);
const primaryAwardSvgPath = `img/primary-award.svg`;
const secondaryAwardImg = document.querySelector(`.prizes__item-secondary-svg`);
const secondaryAwardSvgPath = `img/secondary-award.svg`;
const additionalAwardImg = document.querySelector(`.prizes__item-additional-svg`);
const additionalAwardSvgPath = `img/additional-award.svg`;

const prizesCasesNumber = document.querySelector(`.prizes__item--cases .prizes__desc b`);
const prizesCodesNumber = document.querySelector(`.prizes__item--codes .prizes__desc b`);

const SECOND_ANIMATION_START_COUNT = 1;
const SECOND_ANIMATION_END_COUNT = 7;

const THIRD_ANIMATION_START_COUNT = 11;
const THIRD_ANIMATION_END_COUNT = 900;

const COUNT_DURATION = 800;
const COUNT_FPS = 12;

prizesCasesNumber.textContent = SECOND_ANIMATION_START_COUNT;
prizesCodesNumber.textContent = THIRD_ANIMATION_START_COUNT;

const animateNumber = (element, startCount = 0, stopCount, duration, fps) => {
  const fpsInterval = 1000 / fps;
  let currentCount = startCount;
  let now;
  let then = Date.now();
  let elapsed;

  const animation = animateProgress((progress) => {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      element.textContent = currentCount.toString();

      currentCount = Math.ceil(progress * stopCount);
    }
  }, duration);

  animation.then(() => {
    element.textContent = stopCount;
  });
};

let isAnimationActive = false;

export const runPrizesAnimations = () => {
  if (!isAnimationActive) {
    prizesItemJourneys.classList.add(`active`);
    primaryAwardImg.src = `${primaryAwardSvgPath}?${Math.random()}`;

    setTimeout(() => {
      prizesItemCases.classList.add(`active`);
      animateNumber(
          prizesCasesNumber,
          SECOND_ANIMATION_START_COUNT,
          SECOND_ANIMATION_END_COUNT,
          COUNT_DURATION,
          COUNT_FPS,
      );
      secondaryAwardImg.src = `${secondaryAwardSvgPath}?${Math.random()}`;
    }, 3900);

    setTimeout(() => {
      prizesItemCodes.classList.add(`active`);
      animateNumber(
          prizesCodesNumber,
          THIRD_ANIMATION_START_COUNT,
          THIRD_ANIMATION_END_COUNT,
          COUNT_DURATION,
          COUNT_FPS,
      );
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
