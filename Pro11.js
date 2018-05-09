////Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
////[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 

function Pro11(valueInC,valueInF)
{
    if(valueInC != null && valueInF == null)
    {
        //var valueInC=0;
        var CtoF = (valueInC*9)/5 +32;
        console.log ("When Value of \xB0C is "+ valueInC+" Then value of \xB0F is " + CtoF);
    }
    else if(valueInC == null && valueInF != null)
    {
       // var valueInF=0;
        var FtoC = (valueInF -32)*(5/9);    
        console.log ("When Value of \xB0F is "+ valueInF+" Then value of \xB0C is " + FtoC);
    }
    else
    {
        console.log ("Only one value can be checked at a time.");
    }
}

Pro11(null,0); //put value as null if do not want to check that.  parameter 1 = Celcius parameter 2 = Ferenheit


////Actual Code: 
// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(60);
// fToC(45);