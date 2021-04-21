import { getJournalEntries } from './database.js'

export const Entries = () => {
    const entries = getJournalEntries();
    // create an empty string to store our output
    let allEntriesAsHTML = "";

    for (const entry of entries) {
        allEntriesAsHTML += `
            <div class="w3-card w3-text-theme w3-hover-theme note">
                <div>
                    <span><b>Subject: </b></span>
                    <span><u>${entry.subject}</u></span>
                </div>
                <span>${entry.text}</span>
                <span><i>I felt ${entry.feeling}.</i></span>
                <span>It took: ${entry.timeSpent} minutes</span>
                <span>${entry.date}</span>
            </div>
        `
    }

    return allEntriesAsHTML
}