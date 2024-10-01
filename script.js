const MenuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

MenuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
