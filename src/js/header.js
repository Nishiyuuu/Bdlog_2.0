document.addEventListener("DOMContentLoaded", () => {
    const themeSelect = document.getElementById("theme-select");

    themeSelect.addEventListener("change", (event) => {
        const selectedTheme = event.target.value;
        changeTheme(selectedTheme);
    });

    function changeTheme(theme) {
        document.documentElement.className = theme; // Змінюємо клас на елементі <html>
    }
});