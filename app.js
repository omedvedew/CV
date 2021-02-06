// sidebar-script
let sidebarArrow = document.querySelector(".sidebar-arrow");
let mobileSidebar = document.querySelector(".mobile-sidebar");
let mainContainer = document.querySelector(".main-container");

function toggleSidebar () {
    mobileSidebar.classList.toggle("mobile-sidebar-active");
    sidebarArrow.classList.toggle("to-left-arrow");
    mainContainer.classList.toggle("main-container-hidden");
};

sidebarArrow.addEventListener("click", toggleSidebar);

// greetings-script
let greetingsModal = document.querySelector(".greetings-modal");

function hideGreetings () {
    greetingsModal.classList.add("greetings-modal-hidden");
};

window.setTimeout(hideGreetings, 2000);
