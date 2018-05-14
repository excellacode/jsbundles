////Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. 
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8" />
//     <title>Pro 15 : Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. </title>
//     <script>
        function Pro15()
        {
            var userNumber = prompt("Enter any number.");
            var baseNumber = 13;
            var resul
            document.getElementById('lbl-base-result').innerHTML = baseNumber;
            if (isNaN(userNumber) === true)
            {
                result = "Only numbers are allowed";
            }
            else
            {
                if (userNumber > baseNumber) {
                    result = 2 * (parseInt(userNumber) - baseNumber);
                }
                else {
                    result = baseNumber - userNumber;
                }
            }
            document.getElementById('display-result').innerHTML = result;
        }
    {/* </script>
</head>
<body>
    <div style="margin-bottom:10px">
        <input type="button" value="Check" onclick=" Pro15();"/>
    </div>
    <div>
        Base Number is: <label id="lbl-base-result"></label>
    </div>
    <div>
        Difference is: <label id="display-result"></label>
    </div>
</body>
</html> */}




////Actual Code: 
// function difference(n)
//  {
//     if (n <= 13)
//         return 13 - n;
//     else
//         return (n - 13) * 2;
//  }
// console.log(difference(32))
// console.log(difference(11))