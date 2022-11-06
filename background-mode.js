const darkmodeToggleBtn = document.getElementById('dark-mode-toggle');

let theme = localStorage.getItem('theme');

const enableDarkMode = () => {
	darkmodeToggleBtn.innerHTML = '☀️';
	localStorage.setItem('theme', 'dark');
	document.body.classList.add('dark-mode');
};
const enableLightMode = () => {
	darkmodeToggleBtn.innerHTML = '🌑';
	localStorage.setItem('theme', 'light');
	document.body.classList.remove('dark-mode');
};
if (theme === 'dark') enableDarkMode();

darkmodeToggleBtn.addEventListener('click', () => {
	theme = localStorage.getItem('theme');
	if (theme === 'dark') {
		enableLightMode();
	} else {
		enableDarkMode();
	}
});

window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('load', (e) =>
		e.matches ? enableDarkMode() : enableLightMode()
	);
