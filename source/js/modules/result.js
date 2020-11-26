export default () => {
  // const paths = document.querySelectorAll(`.result path`);

  // paths.forEach((path) => {
  //   const dashArray = path.getTotalLength();
  //   const animate = document.createElementNS(`http://www.w3.org/2000/svg`, `animate`);

  //   path.setAttribute(`stroke-dasharray`, Math.floor(dashArray / 3));
  //   animate.setAttribute(`attributeName`, `stroke-dasharray`);
  //   animate.setAttribute(`from`, `0 ` + Math.floor(dashArray / 3));
  //   animate.setAttribute(`to`, Math.floor(dashArray / 3) + ` 0`);
  //   animate.setAttribute(`dur`, `1s`);
  //   animate.setAttribute(`begin`, `click`);
  //   animate.setAttribute(`fill`, `freeze`);
  //   animate.setAttribute(`keyTimes`, `0; 1`);
  //   animate.setAttribute(`keySplines`, `0.21, 0, 0.8, 1`);

  //   path.appendChild(animate);
  // });

  // const paths2 = document.querySelectorAll(`.result__lose path`);
  // let delay = 0;

  // paths2.forEach((path) => {
  //   path.style.animationDelay = `${delay}s`;
  //   delay += 0.08;
  // });

  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);


        // const pathsResult = document.querySelectorAll(`.screen--show .result path`);

        // setTimeout(() => {
        //   pathsResult.forEach((path) => {
        //     path.dispatchEvent(new Event(`click`));
        //   });
        // }, 10);

        targetEl[0].classList.remove(`screen--hidden`);

      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};

