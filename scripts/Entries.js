import { getEntries } from "./database.js";

const embeddedEntries = [
    {
        "id": 1,
        "subject": "javascript objects and arrays",
        "text": "Declare objects with curly braces. Declare arrays with square brackets.",
        "date": "April 15, 2021",
        "feeling": "happy",
        "timeSpent": 15
    },
    {
        "id": 2,
        "subject": "javascript const actually defines a constant reference",
        "text": "Usually this means whatever you declare can't change -- the exception is when it is a reference to an object or array, which remain mutable.",
        "date": "April 15, 2021",
        "feeling": "ok",
        "timeSpent": 5
    },
    {
        "id": 3,
        "subject": "javascript arrays all have a push() method",
        "text": "So myArray.push(thing) would add thing to the end of myArray",
        "date": "April 15, 2021",
        "feeling": "happy",
        "timeSpent": 2
    },
    {
        "id": 4,
        "subject": "<a target=\"_blank\" href=\"https://www.wintellect.com/data-binding-pure-javascript/\">pure JavaScript data binding</a>",
        "text": "I should take a look at modern farm and see where would be a good place to try something like this... picking the right module in the data flow would avoid the issues mentioned in the last paragraph.",
        "date": "April 21, 2021",
        "feeling": "happy",
        "timeSpent": 20
    },
    {
        "id": 5,
        "subject": "just so you know...",
        "text": "I couldn't find my external entries. You're currently looking at the default, embedded entries used for frontend testing.",
        "date": "April 25, 2021",
        "feeling": "sad",
        "timeSpent": 80
    }

]

export const Entries = () => {
    const entries = getEntries()
    if (entries.length === 0) {
        entries = embeddedEntries
    }
    // create an empty string to store our output
    let allEntriesAsHTML = "";
    for (const entry of entries) {
        // note__header note__header--dark || note__header--light
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