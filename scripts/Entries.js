import { getEntries } from "./dataAccess.js";

export const EntriesHTML = () => {
  const entries = getEntries();
  let allEntriesAsHTML = "";
  for (const entry of entries) {
    allEntriesAsHTML += /*html*/ `
            <div class="w3-card w3-text-theme w3-hover-theme note">
                <h6 class="note__header note__header-dark" style="text-align: center;"> <!-- DARKTOGGLE -->
                    <span><b>Subject: </b></span>
                    <span><u>${entry.subject}</u></span>
                </h6>
                <span>${entry.text}</span>
                <span><i>I felt ${entry.feeling}.</i></span>
                <span>It took: ${entry.timeSpent} minutes</span>
                <span>${entry.date}</span>
            </div>
            `;
  }

  return allEntriesAsHTML;
};

const moods = [
  {
    id: 1,
    label: "happy",
  },
];
