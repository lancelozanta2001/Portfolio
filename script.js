document.addEventListener('DOMContentLoaded', function() {

    showSection('home');
});

function showSection(sectionId) {

    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });


    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}