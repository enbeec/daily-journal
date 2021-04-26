import { DailyJournal } from "./DailyJournal.js"
import { fetchData } from "./database.js";

const container = document.querySelector(".container");

const render = () => {
    container.innerHTML = DailyJournal()
}

// render when notified state has changed
document.addEventListener("stateChanged", () => render())

// QUESTION: is this a good place for this? I feel like it's fine given how simple the application is
fetchData()