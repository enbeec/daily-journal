import { Entries } from './Entries.js'
import { JournalForm } from './JournalForm.js'

export const DailyJournal = () => {
    return /*html*/`
		<form class="entryForm w3-card w3-container" action="">
            ${ JournalForm() }
		</form>

        <div class="noteList">
            ${ Entries() }
        </div>
    `
}