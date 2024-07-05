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
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarBtn = document.querySelector('#sidebar-btn');

    // Aggiungi la classe 'sidebar-hidden' di default
    sidebar.classList.add('sidebar-hidden');

    sidebarBtn.addEventListener('click', () => {
        // Toggle  classe 'sidebar-hidden'
        sidebar.classList.toggle('sidebar-hidden');
        sidebar.classList.toggle('flex-center')
    });

    const sidebarCloseIcon = document.querySelector(".sidebar-close-icon")
    sidebarCloseIcon.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-hidden')
        sidebar.classList.toggle('flex-center')
    })








});

/* document.addEventListener("DOMContentLoaded", () => {
    const burgerSidebar = document.querySelector('#burger-sidebar');
    const burgerSidebarBtn = document.querySelector('#burger-sidebar-btn');

    // Aggiungi la classe 'sidebar-hidden' di default
    burgerSidebar.classList.add('burger-sidebar-hidden');

    burgerSidebarBtn.addEventListener('click', () => {
        // Toggle  classe 'sidebar-hidden'
        burgerSidebar.classList.toggle('burger-sidebar-hidden');
        burgerSidebar.classList.toggle('flex-center')
    });

    const burgerSidebarCloseIcon = document.querySelector(".burger-sidebar-close-icon")
    burgerSidebarCloseIcon.addEventListener('click', () => {
        burgerSidebar.classList.toggle('burger-sidebar-hidden')
        burgerSidebar.classList.toggle('flex-center')
    })


})
 */