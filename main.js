document.addEventListener('DOMContentLoaded', function () {
    // Section click event listener
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.classList.toggle('expanded');
            animateBounce(section);
        });
    });

    // Footer hover event listener
    var footer = document.querySelector('footer');

    document.body.addEventListener('mouseover', function (event) {
        var nearBottom = (window.innerHeight - event.clientY) < 50;

        if (nearBottom) {
            footer.classList.add('footer-visible');
        } else {
            footer.classList.remove('footer-visible');
        }
    });

    // Bounce animation function
    function animateBounce(element) {
        element.style.transition = 'transform 0.5s ease-in-out';
        element.style.transform = 'scale(1.1) translateY(-10px)';

        setTimeout(() => {
            element.style.transform = 'scale(1) translateY(0)';
        }, 500);
    }
});