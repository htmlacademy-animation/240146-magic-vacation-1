const MAX_SESSION_TIME_MS = 5 * 60 * 1000; // 5 MINUTES

export default () => {
  const gameScreen = document.querySelector(`.screen--game`);
  const minutesSpan = document.querySelector(`.game__counter-minutes`);
  const secondsSpan = document.querySelector(`.game__counter-seconds`);

  let requestId = null;

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const animate = (draw, duration) => {
    const start = Date.now();

    requestAnimationFrame(function startAnimation() {
      const now = Date.now();
      let elapsed = now - start;

      if (elapsed > duration) {
        elapsed = duration;
      }

      draw(duration - elapsed);

      if (elapsed < duration) {
        requestId = requestAnimationFrame(startAnimation);
      }
    });
  };

  const draw = (progress) => {
    const time = new Date(Math.floor(progress));
    let minutes = formatTime(time.getMinutes());
    let seconds = formatTime(time.getSeconds());

    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
  };

  document.body.addEventListener(`screenChanged`, () => {
    const isGameScreenActive = gameScreen.classList.contains(`active`);

    if (isGameScreenActive) {
      animate(draw, MAX_SESSION_TIME_MS);
    } else {
      cancelAnimationFrame(requestId);
      requestId = null;
    }
  });
};
