const database = {
    entries: [],
}

export const fetchData = () => {
    fetch("http://localhost:8088/entries")
        .catch(reason => {
            console.log(`database.js -- fetchData
                ${reason}
                `)

            let obj = {}
            obj.json = () => embeddedEntries

            return obj
        })
        .then(res => res.json())
        .then(entries => {
            database.entries = entries
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const getForm = () => {
    return [...database.form]
}

export const getEntries = () => {
    return [...database.entries]
}

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