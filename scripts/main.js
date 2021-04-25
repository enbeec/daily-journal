import { DailyJournal } from "./DailyJournal.js"

const container = document.querySelector(".container");

const render = () => {
    container.innerHTML = DailyJournal()
}

const makeDarkToggle = () => {
    const darkToggle = document.querySelector('.darkToggle');
    const noteHeaders = document.querySelectorAll('h6.note__header')
    // const noteHeader = document.querySelector('.note__header')
    darkToggle.addEventListener('click', function() {
        document.body.classList.toggle('w3-theme-dark');
        for (const h of noteHeaders) {
            h.classList.toggle('note__header--dark')
        }
    })
}

render();