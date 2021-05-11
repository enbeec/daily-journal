import { getEntries } from "./EntriesProvider.js";

export const EntriesHTML = () => getEntries().map(divEntry).join("");

// transform the mood if it provides an emoji
const prettyMood = (mood) => (typeof mood === "string" ? mood : mood.emoji);

const divEntry = (e) => /*html*/ `
  <div class="w3-card w3-text-theme w3-hover-theme note">
      <h6 class="note__header note__header-dark" style="text-align: center;"> <!-- DARKTOGGLE -->
          <span><b>Subject: </b></span>
          <span><u>${e.subject}</u></span>
      </h6>
      <span>${e.text}</span>
      <span><i>I felt ${prettyMood(e.mood)}.</i></span>
      <span>It took: ${e.timeSpent} minutes</span>
      <span>${e.date}</span>
  </div>
  `;
