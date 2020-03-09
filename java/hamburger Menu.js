/* Hamburger menu */

// Let's grab our menu...
var myNav = document.querySelector( 'nav' );

// And our menu button...
var myNavButton = document.querySelector( '.menu-button' );

// Let's listen for a click on this.
myNavButton.addEventListener( 'click', function ( event ) {
    // When clicked, add/remove the "nav-open" class (in HTML.)
    myNav.classList.toggle( 'nav-open' );
} );


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
};

// Here is our blueprint for "Person" objects.
function Person ( name, age, hobbies ) {
    this.name    = name;
    this.age     = age;
    this.hobbies = hobbies;
    this.sayGoodbye = function () { // Setting up a method in a constructor function.
        document.body.innerHTML += `
            <p>
                This is
                <strong>` + this.name + `</strong>,
                saying <em>goodbye</em>!
            </p>
        `;
    };
}

// let's make a new instance of a "person". This is called an object.

var jerry = new Person( 'Jerry', 61, ['snowboarding', 'action movies', 'programming']);

// and anoher! isn't this easier than typing out a while object every thime?!?!
var sally = new Person( 'Sally', 36, ['daredevil biking', 'skydiving', 'teaching']);

var stephane = new Person( 
    'Stephane', 
    31, 
    ['bowling', 'basketball', 'event organizing', 'taylor swift']
    );

// We can add to the blueprint using "prototype", even after its initial declaration.

// We can add to the blueprint using "prototype", even after its initial declaration.

Person.prototype.introduction = function () { 
    // This is a method in our "Person" blueprint/prototype/class!
    var hobbiesString = '<ul>'; // Set up for list HTML.
    this.hobbies.forEach( function ( value, index ) { 
        // Looping through an array.
        hobbiesString += '<li>' + value + '</li>'; 
        // Loop through our hobbies and make a list item for each.
    } );
    hobbiesString += '</ul>'; // We opened a UL in this string, so lets close it! (Concatenation!)

    // Add HTML to the body.

    document.body.innerHTML += `
        <h2>` + this.name + `</h2>
        <dl><!-- My name is: ` + this.name + ` -->
            <dt>Age</dt>
            <dd>` + this.age + `</dd>
            <dt>Hobbies</dt>
            <dd>` + hobbiesString /* We built the string above, using this.hobbies! "hobbiesString" is a local variable (born in the method, and it will die in the method.) */ + `</dd>
        </dl>
    `;
}
