import { DailyJournal } from "./DailyJournal.js"

const container = document.querySelector(".container");

const render = () => {
    container.innerHTML = DailyJournal()
}

render();