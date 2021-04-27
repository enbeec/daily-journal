const database = {
    entries: [],
}

export const fetchData = () => {
    return fetch("http://localhost:8088/entries")
        // QUESTION: is this a good use for the catch method?
        // maybe capture and logic around status from result in a then() instead
        .catch(reason => {
            console.log(`database.js -- fetchData
                ${reason}
                `)

            let obj = {}
            // if we don't get any data, make the next step return the embedded entries
            obj.json = () => embeddedEntries

            return obj
        })
        .then(res => {
            return res.json()
        })
        .then(entries => {
            database.entries = entries
        })
}

export const getForm = () => {
    return [...database.form]
}

export const getEntries = () => {
    return [...database.entries]
}

// QUESTION: what if I just moved this into the database object? Or is this the kind of thing I should be ready to get rid of ASAP
//      I only really use it for UI testing....
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