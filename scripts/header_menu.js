// Getting DOM elements
const menuButton = document.getElementById("units-button");
const dropdownMenu = document.getElementById("units-dropdown");

// Ensure the menu is closed initially
dropdownMenu.classList.remove("active");

// Toggle dropdown menu visibility
menuButton.addEventListener("click", () => dropdownMenu.classList.toggle("active"));

// Close the dropdown if clicked outside of it
window.addEventListener("click", (event) => {
    if(!dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("active");
    }
});