import { DailyJournal } from "./DailyJournal.js"
import { fetchData } from "./database.js";

const container = document.querySelector(".container");

const render = () => {
    // check for form data
    //   if found, cache and replace after DailyJournal()?
    container.innerHTML = DailyJournal()
}

fetchData();
render();