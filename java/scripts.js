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
