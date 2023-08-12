// Add the previous JavaScript code here (for smooth scrolling and active link highlighting)
// ...

// Add the following lines for toggling the experience sections
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
