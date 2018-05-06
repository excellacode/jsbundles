////Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
function Pro8()
{
var inputValue = Math.floor(Math.random()*10 +1)  //10;//Prompt("Enter the value between 1 to 10.");
if(inputValue > 10 || inputValue <1)
{
    console.log("Number must be between 1 to 10.");
}
else 
{
    var guessValue = 4
    if (inputValue === guessValue)
    {
        console.log("Good Work");
    }
    else
    {
        console.log("Not matched");
    }
}
//console.log("You entered : "+inputValue);
//console.log("You entered : "+guessValue);
}
Pro8();


////Actual Code:
// Get a random integer from 1 to 10 inclusive
// var num = Math.ceil(Math.random() * 10);
// var gnum = prompt('Guess the number between 1 and 10 inclusive');
// if (gnum == num)
//   alert('Matched');
//  else
//   alert('Not matched, the number was ' + num);