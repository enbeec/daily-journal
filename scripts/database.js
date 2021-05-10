const database = {
  entries: [],
};

export const fetchData = () => {
  return fetch("http://localhost:8081/entries")
    .then((res) => {
      return res.json();
    })
    .then((entries) => {
      database.entries = entries;
    })
    .catch((reason) => {
      console.log(`database.js -- fetchData
                ${reason}
                `);
      database.entries = embeddedEntries;
    });
};

export const saveJournalEntry = (newEntry) => {
  return fetch("http://localhost:8081/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntry),
  }).then(document.dispatchEvent(new CustomEvent("stateChanged")));
};

export const getForm = () => {
  return [...database.form];
};

export const getEntries = () => {
  return [...database.entries];
};

const embeddedEntries = [
  {
    id: 1,
    subject: "javascript objects and arrays",
    text:
      "Declare objects with curly braces. Declare arrays with square brackets.",
    date: "April 15, 2021",
    feeling: "happy",
    timeSpent: 15,
  },
  {
    id: 2,
    subject: "javascript const actually defines a constant reference",
    text:
      "Usually this means whatever you declare can't change -- the exception is when it is a reference to an object or array, which remain mutable.",
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
  },
  {
    id: 5,
    subject: "just so you know...",
    text:
      "I couldn't find my external entries. You're currently looking at the default, embedded entries used for frontend testing.",
    date: "April 25, 2021",
    feeling: "sad",
    timeSpent: 80,
  },
];
