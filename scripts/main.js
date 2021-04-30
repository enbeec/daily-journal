import { DailyJournal } from "./DailyJournal.js"
import { fetchData, getEntries } from "./database.js";

const container = document.querySelector(".container");

// DARKTOGGLE
document.querySelector('.darkToggle').addEventListener(
    'click',
    () => {
        // had to move this inside once data was fetched async
        const noteHeaders = document.querySelectorAll('h6.note__header')
        document.body.classList.toggle('w3-theme-dark');
        for (const h of noteHeaders) {
            h.classList.toggle('note__header--dark')
        }
    }
)

const render = () => {
    // fetch new data before you render
    fetchData().then(() => {
        container.innerHTML = DailyJournal()
    })
}

// render when notified state has changed (usually after a successful POST)
document.addEventListener("stateChanged", () => render())

// intial render
render()
