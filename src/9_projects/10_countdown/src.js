window.onload = function() {
  timer.init()
}

class Timer {
  constructor() {

  }

  init = () => {
    console.log(`app is running 🍆🍆🍆`);
    this.dateInput = document.querySelector(`#dateTimeInput`)
    this.timerTempDiv = document.querySelector(`#tempTimer`);
    console.log(this.dateInput.value);


    this.dateInput.addEventListener(`change`, () => {
      this.timerTempDiv.innerHTML = this.dateInput.value
    })

  }
}




const timer = new Timer()
