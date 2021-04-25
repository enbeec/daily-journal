
export const getJournalEntries = () => {
    const theEntries = fetch("http://localhost:8088/entries")
    .then(res => res.json()) // QUESTION: parse as JSON?
    .then(entriesPromise => {
        return entriesPromise
    })
    .catch(reason  => {
        console.log(`database.js -- getJournalEntries:
            ${reason}
        `)
        return []
    })

    return theEntries
}

