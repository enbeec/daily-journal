import { getEntries } from "./EntriesProvider.js";

export const EntriesHTML = () => getEntries().map(divEntry).join("");

const prettyMood = (mood) =>
  typeof mood === "string" ? `<i>I felt ${mood}</i>` : mood.emoji;

const divEntry = (e) => /*html*/ `
  <div class="w3-card w3-text-theme w3-hover-theme note">
      <h6 class="note__header note__header-dark" style="text-align: center;"> <!-- DARKTOGGLE -->
          <span><b>Subject: </b></span>
          <span><u>${e.subject}</u></span>
      </h6>
      <span>${e.text}</span>
      <span>${prettyMood(e.mood)}</span>
      <span>It took: ${e.timeSpent} minutes</span>
      <span>${e.date}</span>
  </div>
  `;
