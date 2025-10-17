// You can add any JavaScript functionality here if needed.
// For example, you can add smooth scrolling or dynamic content loading.
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});