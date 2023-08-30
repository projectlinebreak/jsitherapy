document.addEventListener('DOMContentLoaded', function () {
    const accordionLinks = document.querySelectorAll('.accordion-link');
    const accordionAnswers = document.querySelectorAll('.answer');


    accordionLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Toggle the 'active' class on the answer
            accordionAnswers[index].classList.toggle('active');

            // Toggle the 'add' and 'remove' icons
            const addIcon = link.querySelector('.add');
            addIcon.classList.toggle('hidden');
        });
    });
});
