import { EntriesHTML } from "./Entries.js";
import { JournalFormHTML } from "./JournalForm.js";

export const DailyJournal = () => {
  return /*html*/ `
	<header class="pageHeader w3-container centered bottomSpace">
		Val Currie's
		<h1>Daily Journal</h1>
		(Demo)
	</header>

	<main class="w3-container">
		<form class="entryForm w3-card w3-container" action="">
            ${JournalFormHTML()}
		</form>

        <div class="noteList">
            ${EntriesHTML()}
        </div>
		<aside class="search w3-container"></aside>
    
    </main>

	<footer class="pageFooter w3-container centered">
		Hey, mom and dad! Love you guys <3 </br>
			<a href="https://github.com/enbeec">My GitHub</a>
			<button class="darkToggle">Toggle Dark Mode</button> <!-- DARKTOGGLE -->
	</footer>
    `;
};
