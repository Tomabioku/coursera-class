var myString = 'myname';
var myNumber = 5;
var myBoolean = true;


// Do not edit the code under this line
console.log("Name: " + myString);
console.log("Lucky Number: " + myNumber);
console.log("Good joke? " + myBoolean);
console.log('My favorite pizza topping');
console.log('pepperonni', 'masalla');

/* To discover the length of your name write your name within quotes. Then write a period (full stop) and the word length like this:
"yourName".length*/

confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');
prompt('Where are you from?');

"I'm coding like a champ".length > 10;

// console.log() will take whatever is inside the parentheses and log it to the console below your code—that's why it's called console.log()!
// > Greater than
// < Less than
// <= Less than or equal to
// >= Greater than or equal to
// === Equal to
// !== Not equal to

console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 === 16);

// Code
if( "myName".length >= 7 ) {
    console.log("You have a long name!");
}

// Code
if (5 > 7 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log('Hmmm');
}

// Code
if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}

// Code
 if ("Jon".length * 2 / (2+1) === 2)
{
    console.log("The answer makes sense!");
} 
else {
    console.log("Error Error Error");
}

// Code
if( 6 % 2 === 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

// "some word".substring(x, y) where x is where you start chopping and y is where you finish chopping the original string.
"hello". substring(0, 2); // Prints "he"

/* 1. First 3 letters of "Batman"
"Batman".substring(0,3);

2. From 4th to 6th letter of "laptop"
"laptop".substring(3,6); */

// Find the 4th up to and including the 7th letter of the string "wonderful day".
"wonderful day".substring(3, 7);

// Code
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));

// Code
// On line 2, declare a variable myName and give it your name.
myName = "Bee";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = myName.substring(0,2);
// On line 9, use console.log to print out the myName variable.
console.log(myName);
