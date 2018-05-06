////Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
function Pro7()
{
    var dayRange = ['Sunday','Monday','Tuesday','Wednesday','Thurseday','Friday','Saturday'];
    var checkingDay ="Sunday"; 
    var checkingDate = 1; 
    var checkingMonth = 1;
    //console.log(dateObj.getDay());

    for(var year = 2014; year<2051;year++)
    {
        //console.log("Year :" + year ); 
        var dateObj = new Date(year,checkingMonth-1,checkingDate);
        //console.log("Date :" + dateObj.getDate()); 
        //console.log("Day : "+dayRange[dateObj.getDay()]);     
        if(dayRange[dateObjj.getDay()] === checkingDay)
        {
            console.log("1st Jan is Sunday this year. "+ year);
        }
    }
}
Pro7();

// ////Actual Code: 
// console.log('--------------------');
// for (var year = 2014; year <= 2050; year++)
//     {
//     var d = new Date(year, 0, 1);
//     if ( d.getDay() === 0 )
//         console.log("1st January is being a Sunday  "+year);
//     }
// console.log('--------------------');