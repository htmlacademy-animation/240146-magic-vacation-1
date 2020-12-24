import {
  runIntroAnimations,
  destroyIntroAnimations,
} from "./intro";
import {
  runPrizesAnimations
} from "./prizes";
import {
  runGameAnimation,
  destroyGameAnimation,
} from "./game";
import {
  runRulesAnimation,
  destroyRulesAnimation,
} from "./rules";

export default () => {
  const screens = {
    0: `top`,
    1: `story`,
    2: `prizes`,
    3: `rules`,
    4: `game`,
  };

  document.body.addEventListener(`screenChanged`, (evt) => {
    const activeScreen = screens[evt.detail.screenId];

    switch (activeScreen) {
      case `top`:
        runIntroAnimations();

        destroyGameAnimation();
        destroyRulesAnimation();
        break;
      case `story`:
        destroyIntroAnimations();
        destroyGameAnimation();
        destroyRulesAnimation();
        break;
      case `prizes`:
        runPrizesAnimations();

        destroyIntroAnimations();
        destroyGameAnimation();
        destroyRulesAnimation();
        break;
      case `rules`:
        runRulesAnimation();

        destroyIntroAnimations();
        destroyGameAnimation();
        break;
      case `game`:
        runGameAnimation();

        destroyIntroAnimations();
        destroyRulesAnimation();
        break;
      default:
        return;
    }
  });
};
