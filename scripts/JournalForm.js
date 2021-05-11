import { saveJournalEntry } from "./dataAccess.js";

export const submitButtonFunc = (event) => {
  const error = buildEntry(
    document.querySelector("#entrySubject").value,
    document.querySelector("#entryText").value,
    document.querySelector("#entryMood").value,
    document.querySelector("#entryDate").value,
    document.querySelector("#entryTime").value
  );

  error ? window.alert(error) : postEntry();
};

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
    <div style="display: flex; flex-flow: row wrap;">
        <fieldset style="flex-width: 50%" class="fieldContainer w3-border-theme bottomSpace">
            <label for="entryTime">
                Time Spent
            </label>
            <input type="number" id="entryTime" min=0 value=0 class="entryForm__time">
        </fieldset>
        <fieldset style="flex-width: 50%" class="fieldContainer w3-border-theme bottomSpace">
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
    </div>
    <button id="submitButton" class="submitButton bottomSpace">
        Record Journal Entry
    </button>`;
};
