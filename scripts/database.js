const database = {
    "entries": [
        {
            id: 1,
            subject: "javascript objects and arrays",
            text: "Declare objects with curly braces. Declare arrays with square brackets.",
            date: "April 15, 2021",
            feeling: "happy",
            timeSpent: 15,
        },
        {
            id: 2,
            subject: "javascript const actually defines a constant reference",
            text: "Usually this means whatever you declare can't change -- the exception is when it is a reference to an object or array, which remain mutable.",
            date: "April 15, 2021",
            feeling: "ok",
            timeSpent: 5,
        },
        {
            id: 3,
            subject: "javascript arrays all have a push() method",
            text: "So myArray.push(thing) would add thing to the end of myArray",
            date: "April 15, 2021",
            feeling: "happy",
            timeSpent: 2,
        }
    ]
}

export const getJournalEntries = () => {
    // this returns an array containing a copy of the database entries
    return [...database.entries]
}