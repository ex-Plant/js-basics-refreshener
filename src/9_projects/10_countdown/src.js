window.onload = function () {
  timer.init();
};

function handleCounter(inputDate) {
  const date = new Date(inputDate);
  console.log(date);

  const now = new Date().getTime();

  timer.timerTempDiv.innerHTML = now; // current date
}

class Timer {
  constructor() {}

  init = () => {
    console.log(`app is running 🍆🍆🍆`);
    this.dateInput = document.querySelector(`#dateTimeInput`);
    this.timerTempDiv = document.querySelector(`#tempTimer`);
    console.log(this.dateInput.value);

    this.dateInput.addEventListener(`change`, () => {
      handleCounter(this.dateInput.value);
    });

    handleCounter(this.dateInput.value);
  };
}

const timer = new Timer();
const now = new Date().getTime();
