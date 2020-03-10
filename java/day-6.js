alert('bonjour,tout le monde!');

/* 
**Days 6
*/

/* 
Let's see how scope works 
*/

var myVariable = 3; // Decalred in the global scope 

function myFunction(){
    console.log(myVariable); // can we see my Variable in the function?! Yes! we can see Globally scoped variable inside of a funtion!

    var myFunctionScopeVariable = 64; // Declare in a local (unction) scope.
    console.log(myFunctionScopeVariable);

        //function inside of a function?! Is this even possible?!?!
        
        function myNestedFunction () { // yes

        var myFunctionScopeVariable = 'I\' very nested!';
        console.log(myFunctionScopeVariable); // local access works!
        
        console.log('Accessing function scope variable in nested function: ' +myFunctionScopeVariable); // we can access variables from a Parent function. But no the reverse.
        
        }

            // myFunction(); // Let's run it and see.
            // // console.log (myFunctionScopeVariable); // Can we access it outside of the function?! No locally scoped variables will live and die in their function :(

            // Even more nesting!?
            function myDoublenestedFunction() {
                var doubleNestedVar = 'Double nested var here!'

                console.log(doubleNestedVar) // We can access locally, right?

                myNestedFunction(); // Can i run his here?! Yup! it was declared in by a parent so we are good to go! Calling a function of itself causes recursion... unless you have termination condition this causes an endless loop. (crashing the browser)
            }

        myDoublenestedFunction(); // This works, the same since its inside
}

// myDoublenestedFunction(); // can't reach this function here. we're outside 

// myFunction();   // Let's run it and see.
// // console.log(myFunctionScopeVariable);   // Can we access it out side of the function?! No! 


function addnumbs ( x, y ) {
    return ( Number ( x ) + Number( y )); // Using numbers() function to make sure we don't end up concatenating!
}

function subtractNums ( x, y ) { // subtraction.
    return ( x - y );   // difference.
}

function multiplyNums ( x, y ) {    // Multiplication
    return ( x * y );   // Product
}

function divideNums ( x, y ) {  // Division
    return ( x / y );   // Quotient
}

function myMath ( operation , x , y){

}