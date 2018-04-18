////Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the_
//// string and attaching it to the front. 

// function Pro5()
// {
//     var str= "w3resource";
//     var lenstr = str.length;
//     var str2 = str.substring(0,lenstr-1); 


// setInterval ( function()
// {
    
//     //for(var i = 0; i < lenstr; i++) 
//     //{
//         var result =  str[lenstr-1] + str2;   
//    // }
//     console.log(result);       
// }
// ,10)
// }
// Pro5();

//Actual Code: 
function animate_string(id) 
{
    var element = window.document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}
animate_string("W3resource"); 