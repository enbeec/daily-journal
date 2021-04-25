const database = {
    entries: [],
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
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const getForm = () => {
    return [...database.form]
}

export const getEntries = () => {
    return [...database.entries]
}