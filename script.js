let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'YouTuber', 'Communications Specialist', 'Language Translator', 'Data Analyst', 'Multimedia Designer', 'Cybersecurity Specialist', 'Tutor'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});