import { DailyJournal } from "./DailyJournal.js"
import { fetchData, getEntries } from "./database.js";

const container = document.querySelector(".container");

// QUESTION: go over this -- I'm not clear on how the DOM updates when I re-render
//  -- does it clobber what's there?
// so would I need to recreate this on every render??
//  -- looks like no: I added a wrapper for render() to window, 
//      forced rendering in the console and then tried
//      my toggle again and it works!
document.querySelector('.darkToggle').addEventListener(
    'click',
    () => {
        // had to move this inside once data was fetched async
        const noteHeaders = document.querySelectorAll('h6.note__header')
        document.body.classList.toggle('w3-theme-dark');
        for (const h of noteHeaders) {
            h.classList.toggle('note__header--dark')
        }
    })

const render = () => {
    // fetch new data before you render
    fetchData().then(() => {
        container.innerHTML = DailyJournal()
    })
}

// access render function in console
window.renderFunc = () => {
    render()
    return 'success'
}

// render when notified state has changed (usually after a successful POST)
document.addEventListener("stateChanged", () => render())

// intial render
render()
