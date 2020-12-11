/* DOM ELement Selector */
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countDown = document.getElementById('countDown');
const loading = document.getElementById('loading');
const year = document.getElementById('year');

/* Current Year */
const currentYear = new Date().getFullYear();

/* New Year Time */
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

/* Dynamic Next Year */
year.innerText = currentYear + 1;

/* Update Count Down Time */
function updateCountDown() {
	const currentTime = new Date();

	const diff = newYearTime - currentTime;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24); // 1000 = seconds, 60 = minutes, 60 = hours, 24 = days
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	/* Inject values to HTML */
	days.innerText = d;
	hours.innerText = h < 10 ? '0' + h : h;
	minutes.innerText = m < 10 ? '0' + m : m;
	seconds.innerText = s < 10 ? '0' + s : s;
}

/* Show Spinner before Count Down */
setTimeout(() => {
	loading.remove();
	countDown.style.display = 'flex';
}, 1000);

/* Run every seconds */
setInterval(() => {
	updateCountDown();
}, 1000);
