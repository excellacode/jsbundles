////Write a JavaScript program to display the current day and time in the following format.  Go to the editor
////Sample Output : Today is : Friday.
////Current time is : 4 PM : 50 : 22

function Pro1()
{
    console.log(" Write a JavaScript program to display the current day and time in the following format."); 
    var day=['Sunday','Monday','Tuesday','Wednesday','Thurseday','Friday','Saturday']
    var d= new Date();
    var dateObj = new Date();
    var ampm = dateObj.getHours() >= 12 ? 'pm' : 'am';
    console.log('Today is : '+ day[dateObj.getDay()]);
    console.log ('Time is : '+ dateObj.getHours() + ampm +' :'+ dateObj.getMinutes() + ' :'+ dateObj.getSeconds());
}
Pro1();

////Actual Code:
//  var today = new Date();
//  var day = today.getDay();
//  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//  console.log("Today is : " + daylist[day] + ".");
//  var hour = today.getHours();
//  var minute = today.getMinutes();
//  var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

