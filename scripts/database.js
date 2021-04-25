const database = {
    entries: []
}

export const fetchData = () => {
    fetch("http://localhost:8088/entries")
        .catch(reason => {
            console.log(`database.js -- fetchData
            ${reason}
        `)
            return []
        })
        .then(res => res.json()) // QUESTION: parse as JSON?
        .then(entries => {
            database.entries = entries
            console.log("fetch:")
            console.log(database.entries)
        })
}

export const getEntries = () => {
    console.log("access:")
    console.log(database.entries)
    return [...database.entries]
}