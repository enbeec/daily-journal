import { getEntries } from "./database.js";


export const Entries = () => {
    const entries = getEntries()
    let allEntriesAsHTML = "";

    for (const entry of entries) {
        allEntriesAsHTML += /*html*/`
            <div class="w3-card w3-text-theme w3-hover-theme note">
                <h6 class="note__header--dark || note__header--light note__header" style="text-align: center;">
                    <span><b>Subject: </b></span>
                    <span><u>${entry.subject}</u></span>
                </h6>
                <span>${entry.text}</span>
                <span><i>I felt ${entry.feeling}.</i></span>
                <span>It took: ${entry.timeSpent} minutes</span>
                <span>${entry.date}</span>
            </div>
            `
    }

    return allEntriesAsHTML
}