// Example function for theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Example dark theme CSS
// You will need to add this class in your CSS file
// .dark-theme {
//     background-color: #1a1a1a;
//     color: #f0f0f0;
// }

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form submission tasks, like sending an email or displaying a message
    alert('Thank you for your message!');
});
