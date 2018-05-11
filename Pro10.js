////Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8" />
//     <title>Pro10 - Write a JavaScript program to calculate multiplication and division of two numbers (input from user). </title>
// <script>
    function multi()
    {
        var inputOne = document.getElementById("txtoneid").value;
        var inputTwo = document.getElementById("txttwoid").value;
        if(isNaN(inputOne) == true || isNaN(inputTwo) == true)
        {
            var result = "Operation invalid.";
        }
        else 
        {
            var result = inputOne * inputTwo;
        }

        document.getElementById("lblResult").innerHTML = result;
    }
    function divi()
    {
        var inputOne = document.getElementById("txtoneid").value;
        var inputTwo = document.getElementById("txttwoid").value;

        if(isNaN(inputOne) == true || isNaN(inputTwo) == true || inputTwo == 0 )
        {
            var result = "Operation invalid.";
        }
        else
        {
            result = inputOne / inputTwo; 
        }
        document.getElementById("lblResult").innerHTML = result;
    }
{/* </script>
</head>

<body>
    <table>
        <tr>
            <td>
                <label> 1st Number : </label>
            </td>
            <td>
                <input type="text" name="txtNumOne" value="" id="txtoneid" />
            </td>
        </tr>
        <tr>
            <td>
                <label> 2nd Number : </label>
            </td>
            <td>
                <input type="text" name="txtNumTwo" value="" id="txttwoid" />
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" name="btnMultiple" value="Multiply" onclick="multi()"/>
            </td>
            <td>
                <input type="button" name="btnDivide" value="Divide" onclick="divi()" />
            </td>
        </tr>
    </table>
    The Result is :  
     <label id="lblResult"></label> 
</body>
</html> */}

// //document.getElementById("funct").innerHTML = Pro10();

// ////Actual Code:
// // function multiplyBy()
// // {
// //         num1 = document.getElementById("firstNumber").value;
// //         num2 = document.getElementById("secondNumber").value;
// //         document.getElementById("result").innerHTML = num1 * num2;
// // }

// // function divideBy() 
// // { 
// //         num1 = document.getElementById("firstNumber").value;
// //         num2 = document.getElementById("secondNumber").value;
// // document.getElementById("result").innerHTML = num1 / num2;
// // }
