
document.querySelectorAll('.toggleButton').forEach(function (button) {
    button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-target');
        toggleSection(targetId);
    });
});

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'grid';
}
