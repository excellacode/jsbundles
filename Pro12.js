////Write a JavaScript program to get the website URL (loading page).
function Pro12()
{
var str = window.location.assign("www.google.com/q=123/search?=123")
//alert (document.URL);
console.log("Location is: " + str);
console.log("Page hostname is: " + window.location.hostname);
console.log("Page path is: " + window.location.pathname);
}

Pro12();


////Actual Code: 
// alert(document.URL);