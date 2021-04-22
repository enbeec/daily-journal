export const JournalForm = () => {
    return `
    <fieldset class="fieldContainer w3-border-theme bottomSpace">
        <label for="entryDate">
            Date
        </label>
        <input type="date" name="entryDate" class="entryForm__date">
    </fieldset>
    <fieldset class="fieldContainer w3-border-theme bottomSpace">
        <label for="entryConcepts">
            Concepts Covered
        </label>
        <input type="text" name="entryConcepts" class="entryForm__concepts">
    </fieldset>
    <fieldset class="fieldContainer w3-border-theme bottomSpace">
        <label for="entryText">
            Journal Entry
        </label>
        <textarea type="textarea" name="entryText" class="entryForm__text"></textarea>
    </fieldset>
    <fieldset class="fieldContainer w3-border-theme bottomSpace">
        <label for="entryMood">
            Mood for the Day
        </label>
        <select name="entryMood" class="entryForm__mood">
            <option value="Neutral" selected>Neutral</option>
            <option value="Bad">Bad</option>
            <option value="Good">Good</option>
            <option value="Confused">Confused</option>
        </select>
    </fieldset>
    <button class="bottomSpace">
        Record Journal Entry
    </button>`
}