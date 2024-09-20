window.onload = () => {
  autocomplete.init();
};

class Autocomplete {
  constructor() {}
  init = () => {
    console.log(`app started`);
  };
}

const autocomplete = new Autocomplete();
