/* Hamburger menu */

// let's gab our menu...
var myNav = document.querySelector('nav');

// and our menu button..
var myNavButton = document.querySelector('.menu-button');

myNavButton.addEventListener('click' , function ( event) {
    myNav.classList.toggle( 'nav-open' );
});