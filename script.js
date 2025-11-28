const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// default to image style (dark)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    toggleButton.textContent = "Dark Mode";
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Update Button Text and Save Preference
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = "Dark Mode";
        localStorage.setItem('theme', 'light');
    } else {
        toggleButton.textContent = "Light Mode";
        localStorage.setItem('theme', 'dark');
    }
});
