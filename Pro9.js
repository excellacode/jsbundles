////Write a JavaScript program to calculate days left until next Christmas
function Pro9()
{
    var todayDate = new Date();
    console.log("today's date :" + todayDate );

    //var xmasDate = new Date(todayDate.getFullYear(),12-1,25);
    var xmasDate = new Date(todayDate.getFullYear(),4,6);
    console.log("Xmas date :" + xmasDate );

    //var dateDiff = Math.floor(xmasDate - todayDate/ 1000*60*60*24);
    
    var dateDiff = xmasDate- todayDate;
    console.log("Days in Christmas :" + dateDiff );
}

Pro9();













////Actual code: 
