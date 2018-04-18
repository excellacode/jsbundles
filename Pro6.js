////Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function Pro6()
{
    var dt = new Date();
    var curYear = dt.getFullYear();
    if(curYear%4 == 0)
        console.log(curYear + " is a leap year.")              
    else 
        console.log(curYear + " is not a leap year.")              
}

Pro6();




////Actual Code: 
// year = window.prompt("Input a Year : ");
// x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// console.log(x);