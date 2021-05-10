import { DailyJournal } from "./DailyJournal.js";
import { fetchData } from "./database.js";

const darkToggleFunc = (event) => {
  const noteHeaders = document.querySelectorAll("h6.note__header");
  document.body.classList.toggle("w3-theme-dark");
  document.body.classList.toggle("w3-theme-light");
  for (const h of noteHeaders) {
    h.classList.toggle("note__header-dark");
    h.classList.toggle("note__header-light");
  }
};

// render when notified state has changed (usually after a successful POST)
const bodyodyody = document.querySelector(".bodyodyody");
const render = () => {
  // fetch new data before you render
  fetchData().then(() => {
    document
      .querySelector(".darkToggle")
      ?.removeEventListener("click", darkToggleFunc);
    bodyodyody.innerHTML = DailyJournal();
    document
      .querySelector(".darkToggle")
      .addEventListener("click", darkToggleFunc);
  });
};

// register render on
document.addEventListener("stateChanged", () => render());
// intial render triggers the fetch
render();
