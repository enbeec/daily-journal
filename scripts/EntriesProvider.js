import { entriesRaw } from "./dataAccess.js";

export const getEntries = () => {
  // replace mood ids with something we can print
  return entriesRaw().map((entry) => {
    // first find our mood given the id from the entry object
    const mood = moods.find((m) => m.id === entry.mood);
    // if the entry has an emoji, make sure to include the whole mood in the entry
    entry.mood = "emoji" in mood ? mood : mood.label;
    return entry;
  });
};

export const getMoods = () => moods.map((m) => ({ ...m }));

export const builtEntry = () => ({ ...entryBuilder });

export const buildEntry = (subject, text, mood, date, timeSpent) => {
  if (!subject || !text || !mood || !date || !timeSpent) {
    return "missing fields";
  } // TODO add more validation
  entryBuilder.subject = subject;
  entryBuilder.text = text;
  entryBuilder.mood = moods.find((m) => m.label === mood).id;
  entryBuilder.date = date;
  entryBuilder.timeSpent = timeSpent;
};

const entryBuilder = {};
const moods = [
  {
    id: 1,
    label: "happy",
  },
  {
    id: 2,
    label: "sad",
  },
  {
    id: 3,
    label: "neutral",
  },
  {
    id: 4,
    label: "confused",
    emoji: "😕",
  },
];
