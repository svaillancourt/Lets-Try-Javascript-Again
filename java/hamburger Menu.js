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

// lets add to the hobbies array. just like normal! it is an array after all

myObject.hobbies.push('programming');

console.log('Update hobbies:');
console.log(myObject.hobbies);

console.log('Update hobbies:');
console.log(myObject);

/*Lets ramp things up a bit with a method */

var newObject = {
    myNum: 5,
    updateNum: function (){ // here is a method! Note the ew syntaxx, versus a function.
        // difference from a function?
        this.myNum = this.myNum + 5;
        return this.myNum;
    }
}

console.log(newObject);