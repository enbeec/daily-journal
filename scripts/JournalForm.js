import { saveJournalEntry } from "./dataAccess.js";

export const JournalFormHTML = () => {
  return /*html*/ `
    <fieldset class="fieldContainer w3-border-theme bottomSpace">
        <label for="entryDate">
            Date
        </label>
        <input type="date" id="entryDate" name="entryDate" class="entryForm__date">
    </fieldset>
    <fieldset class="fieldContainer w3-border-theme bottomSpace">
        <label for="entrySubject">
            Subject
        </label>
        <input type="text" id="entrySubject" name="entrySubject" class="entryForm__concepts">
    </fieldset>
    <fieldset class="fieldContainer w3-border-theme bottomSpace">
        <label for="entryText">
            Journal Entry
        </label>
        <textarea type="textarea" id="entryText" name="entryText" class="entryForm__text"></textarea>
    </fieldset>
    <fieldset class="fieldContainer w3-border-theme bottomSpace">
        <label for="entryMood">
            Mood for the Day
        </label>
        <select id="entryMood" name="entryMood" class="entryForm__mood">
            <option value="Neutral" selected>Neutral</option>
            <option value="Bad">Bad</option>
            <option value="Good">Good</option>
            <option value="Confused">Confused</option>
        </select>
    </fieldset>
    <button id="submitButton" class="submitButton bottomSpace">
        Record Journal Entry
    </button>`;
};

export const makeSubmitButton = () => {
  document.querySelector("#submitButton").addEventListener("click", (event) => {
    const entryDate = document.querySelector("#entryDate").value;
    const entrySubj = document.querySelector("#entrySubject").value;
    const entryText = document.querySelector("#entryText").value;
    const entryMood = document.querySelector("#entryMood").value;

    saveJournalEntry({
      subject: entrySubj,
      text: entryText,
      feeling: entryMood,
      date: entryDate,
    });
  });
};
