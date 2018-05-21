//// Pro 17 : Write a JavaScript program to compute the absolute difference between a specified number and 19. 
////Returns triple their absolute difference if the specified number is greater than 19.
function Pro17(numOne)
{
    if (numOne > 19)
    {
        result = parseInt(numOne) - 19;
        result = result * 3
        return result;
    }
    else 
    {
        result = 19- parseInt(numOne);
        return result;
    }

}   

console.log("Result is : "+ Pro17(15));


////Actual Code: 
// function diff_num(n) {
//     if (n <= 19) {
//       return (19 - n);
//       }
//     else
//       {
//        return (n - 19) * 3;
//       }
//   }
  
//   console.log(diff_num(12));
//   console.log(diff_num(19));
//   console.log(diff_num(22));





