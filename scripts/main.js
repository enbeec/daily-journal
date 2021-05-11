import { DailyJournal, darkToggleFunc } from "./DailyJournal.js";
import { fetchData } from "./dataAccess.js";
import { submitButtonFunc } from "./JournalForm.js";

const bodyodyody = document.querySelector(".bodyodyody");

const removeListeners = () => {
  document
    .querySelector(".darkToggle")
    ?.removeEventListener("click", darkToggleFunc);
  document
    .querySelector(".submitButton")
    ?.removeEventListener("click", submitButtonFunc);
};

const addListeners = () => {
  document
    .querySelector(".darkToggle")
    .addEventListener("click", darkToggleFunc);
  document
    .querySelector(".submitButton")
    .addEventListener("click", submitButtonFunc);
};

const render = () => {
  // fetch new data before you render
  fetchData().then(() => {
    removeListeners();
    bodyodyody.innerHTML = DailyJournal();
    addListeners();
  });
};

// intial render triggers the first fetch
render();

// render any time the state changes
document.addEventListener("stateChanged", () => render());
