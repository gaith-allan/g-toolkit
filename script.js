document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const categories = document.querySelectorAll('.category');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCategory = button.getAttribute('data-category');

            // Remove active class from all buttons and categories
            navButtons.forEach(btn => btn.classList.remove('active'));
            categories.forEach(cat => cat.classList.remove('active'));

            // Add active class to the clicked button and target category
            button.classList.add('active');
            document.getElementById(targetCategory).classList.add('active');
        });
    });
});
