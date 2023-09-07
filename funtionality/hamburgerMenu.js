/*const toggleMenu = () => {
    const menu = document.getElementById("menu-links");
    const icon = document.getElementById("hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}*/

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};