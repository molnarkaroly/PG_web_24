// loadNavbar.js

// Function to load the navbar from an external file
function loadNavbar() {
    fetch('../a1header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            adjustPaths();
            setNavActive();
            loadBurgerNavScript();
        });
}

// Function to load the burgerNav.js script dynamically
function loadBurgerNavScript() {
    const script = document.createElement('script');
    script.src = '../scripts/burgerNav.js';
    document.body.appendChild(script);
}

// Call the function to load the navbar
document.addEventListener('DOMContentLoaded', loadNavbar);