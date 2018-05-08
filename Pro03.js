////Write a JavaScript program to get the current date.  Go to the editor
////Expected Output :
////mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function Pro3()
{
var tDate = new Date(); 
var dd = tDate.getDate();
var mm = tDate.getMonth()+1;
var yyyy = tDate.getFullYear();
console.log("Format DD-MM-YYYY : "+ dd +"-"+ mm +"-"+ yyyy);   
console.log("Format MM-DD-YYYY : "+ mm +"-"+ dd +"-"+ yyyy);   
console.log("Format DD/MM/YYYY : "+ dd +"/"+ mm +"/"+ yyyy);   
console.log("Format MM/DD/YYYY : "+ mm +"/"+ dd +"/"+ yyyy);   
}
Pro3();


////Actual Code: 
//var today = new Date();
//var dd = today.getDate();
//var mm = today.getMonth()+1; 
//var yyyy = today.getFullYear();
//if(dd<10) 
//{
//    dd='0'+dd;
//}
//if(mm<10) 
//{
//    mm='0'+mm;
//} 
//today = mm+'-'+dd+'-'+yyyy;
//console.log(today);
//today = mm+'/'+dd+'/'+yyyy;
//console.log(today);
//today = dd+'-'+mm+'-'+yyyy;
//console.log(today);
//today = dd+'/'+mm+'/'+yyyy;
//console.log(today);
