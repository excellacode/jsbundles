////Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function Pro4()
{
    var l1 = 5;
    var l2 = 6;
    var l3 = 7;

    var p = (l1+l2+l3)/2;
    var at = Math.sqrt(p*((p-l1)*(p-l2)*(p-l3)));
    console.log("Area of given Triangle is: " +at);
}
Pro4();


////Actual Code: 
// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var perimeter = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(area);