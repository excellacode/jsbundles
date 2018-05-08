////Write a JavaScript program to calculate days left until next Christmas
function Pro9()
{
    //// Testing how JS behaves on the date difference. Tomorrow's date - Today's date result is tested below which comes as 0.
    // var todayDate = new Date();
    // console.log("Today's date :" + todayDate );
    ////----
    // var xmasDate = new Date(todayDate.getFullYear(),4,8);
    // console.log("Xmas date :" + xmasDate );

    const dayToMillisec =1000*60*60*24;
    var todayDate = new Date();
    console.log("Today's date :" + todayDate );

    var xmasDate = new Date(todayDate.getFullYear(),12-1,26);
    console.log("Xmas date :" + xmasDate );
   
     var dateDiff = Math.floor((xmasDate - todayDate)/dayToMillisec)+1;  // +1 is needed coz tomorrow - today result is coming as 0. 
     console.log("Days in Christmas :" + dateDiff );

}

Pro9();

////Actual code: 
// today=new Date();
// var cmas=new Date(today.getFullYear(), 11, 25);
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+ " days left until Christmas!");
