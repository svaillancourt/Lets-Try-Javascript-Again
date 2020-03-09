/* Hamburger menu */

// let's gab our menu...
var myNav = document.querySelector('nav');

// and our menu button..
var myNavButton = document.querySelector('.menu-button');

myNavButton.addEventListener('click' , function ( event) {
    myNav.classList.toggle( 'nav-open' );
});

// let's dig into objects

// JavaScript Object Notation (JSON)

var myObject = { // Valid JSON format
    name: 'Jerry',
    age: 61,
    hobbies:[
        'snoboarding',
        'action movies'
    ]
};

console.log( myObject );

console.log('Object "name": ' + myObject.name);
console.log('Object "age": ' + myObject.age);
console.log('Object "hobbies": ' + myObject.hobbies[0] + ' ' + myObject.hobbies[1]);
