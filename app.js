// sidebar-script
let sidebarArrow = document.querySelector(".sidebar-arrow");
let mobileSidebar = document.querySelector(".mobile-sidebar");

function toggleSidebar () {
    mobileSidebar.classList.toggle("mobile-sidebar-active");
    sidebarArrow.classList.toggle("to-left-arrow");
};

sidebarArrow.addEventListener("click", toggleSidebar);