// scripts.js

// Function to handle the navigation menu
function handleMenu() {
    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Add code here to handle smooth scrolling to the respective sections
            // For example: scrollToSection(item.getAttribute('href'));
        });
    });
}

// Function to initialize the portfolio section
function initializePortfolio() {
    const ctaButton = document.querySelector('.cta-btn');

    ctaButton.addEventListener('click', () => {
        // Add code here to handle the button click, such as redirecting to the projects page
        // For example: window.location.href = './projects/project.html';
    });
}

// Function to display a welcome message in the console
function displayWelcomeMessage() {
    console.log('Welcome to Tomiwa Shokunbi\'s Portfolio!');
}

// Call the functions once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleMenu();
    initializePortfolio();
    displayWelcomeMessage();
});
