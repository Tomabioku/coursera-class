// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(15);

// The entire function ends with a semi-colon.


var orangeCost = function (cost) {
    
    console.log(cost * 5);
};

orangeCost(5);


// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(9);
console.log(newNumber);


// Define quarter here.

var quarter = function(number) {
    return number / 4;
};



if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}


// Write your function starting on line 3
var perimeterBox = function(length, width) {
    return (length + length + width + width);
};

perimeterBox(5,7);


// Global vs Local Variables
var my_number = 7; //this has global scope

var timesTwo = function(number) {
   var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);



// Write your function below. 
// Don't forget to call your function!
var sleepCheck = function(numHours) {
    if (numHours >= 8) {
        return ("You're getting plenty of sleep! Maybe even too much!");
    }
    else {
        return ("Get some more shut eye!");
    }
}



sleepCheck(10);
sleepCheck(5);
sleepCheck(8);