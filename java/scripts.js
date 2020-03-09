// alert('Hello, World!')

// Single line, comment!

// Basic assignment:
var myVariable = "38.9587";
console.log(myVariable + 5) // outputs 38.95875

// type handling:
myVariable = parseFloat (myVariable); // floating point number, decimal maintained.
console.log(myVariable); // is now a numberic value

myVariable = parseInt (myVariable); // converted to integer, decimal removed
console.log(myVariable);

myVariable = myVariable + 5; // Addition. Beware "+" is it can add or concatenate, depending on if any of the operands are strings

myVariable = myVariable.toString(); // conver back to a string
console.log(myVariable);

// other types

var myArrayofDataTypes = [
    // booleans:
    true,
    false,
    // Null;
    null,
    // Number (float / integer):
    34,
    168.793,
    // String:
    'Hello World!',
    // Value not defined:
    undefined,
    // not a number:
    NaN,
    // an array in an array?!?!
    [1,2,3,4,5]
]

var myDataList = document.createElement ( 'DL' )    // Datalist, Won't show yet! we didin't tell it where to go!
// (assignement; termination condition; Iteration)
for(var i = 0; i < myArrayofDataTypes.length; i++){
    // creating the datalist title
    var dataListTitle = document.createElement('DT');
    dataListTitle.textContent = typeof myArrayofDataTypes[i];    // Output the datatype

    var dataListData = document.createElement('DD');
    // creating the datalist title
    dataListData.textContent = myArrayofDataTypes[i];    // Output the datatype

    myDataList.appendChild( dataListTitle );
    myDataList.appendChild( dataListData );
}

document.body.appendChild ( myDataList );

var myHeadingText = 'Our Data-Type Test:';
// thi is adding HTML to the end of our body.

document.body.innerHTML += `<!--back ticks areused in JS for multi-line string. -->  
    <h2>
    `+myHeadingText /*concatenate strings*/+`
    </h2>`;
    
// collecting elements

// get by ID:
var myHeading = document.getElementById('my-heading');
myHeading.title = 'This is a heading.' ; // tooltip attribute.
// myHeading.style.color = 'white'; //Please avoid using inline styles.. this is the css file's job
myHeading.className = "gray-text";  //use classes instead!

// Events!

// mouse over heading!
myHeading.addEventListener( 'mouseover', function(event){
    this.className = ' salmon-text';
} ) ;

// mouse leaving the heading!
myHeading.addEventListener( 'mouseleave', function(event){
    this.className = ' yellowgreen-text';
} ) ;

// when you stop hovering...
myHeading.addEventListener( 'click', function(event){
    // the class we want to add.

    var bigClass = 'big-text'; // check if it already has it!
    
    if(!this.className.includes( bigClass ) ) // Good to do checks like this so we don't have 500 of the same class on here if the user keeps clicking!

    { // Exlcamation means not. So i fires on the OPPOSITE.
    this.className += ' big-text'; // Concaenating a new class!
    // Remember, you must have a space between classses when assigining multiple.
    }
} ) ;

// Let's make a function

// Function keyword, followed by the function name (and parameters if any are needed.)

function addTwoNumbers ( x , y )
{
    x = Number ( x );  // Enforce data-type (number.)
    y = Number ( y ); // Enforce data-type (number.)
    return ( x + y ); // add the two together.
};

// Return current date as a string (2020.03.06)
function currentDayString()
{   
    // new date object
    var date = new Date();
    // Declare a string we can store date infor in.
    var dateString= '';

    dateString +=date.getFullYear();     // Year
    dateString +='/';               // periode for formatting
    dateString +=( date.getMonth() + 1);    // Month
    dateString +='/';               // periode for formatting
    dateString +=( date.getDay()  + 1);  // Date
    return dateString;
}

console.log( 'The current date is: \r\n ' + currentDayString());

// Let's review some conditions-related operators..

// check for equivalency (type -agnostic.)
console.log (1 == true ); // True
console.log ('Hello, World' == true); // False
console.log (-137 == true); // False
console.log('test' == 'test'); // True
console.log( 36 == '36'); // True
console.log( 0 == false ); // True
console.log( 'test string' === 'test string' ); // true


// Check if identical ( value comparison including data type.)
console.log(1 === true); // false
console.log('' === true); // false
console.log(-137 === true); // false
console.log('test' === 'test'); // True
console.log( 36 === '36'); // False
console.log( 0 === false ); // false
console.log( 'test string' === 'test string' ); // true
