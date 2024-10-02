const menuIcon =document.querySelector('menu-icon');
const navbar = document.querySelector('.navbar')

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}