const header  =document.querySelector("header");
window.classList.toggle("scroll", function(){
    header.classList.togle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navvlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navvlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navvlist.classList.toggle('open');
};









const skills  =document.querySelector("header");
window.classList.toggle("scroll", function(){
    header.classList.togle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.toggle('open');
};