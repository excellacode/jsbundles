//////16.Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8" />
//     <title>Pro16 : Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.</title>
//     <script>
        function Pro16() {
            var valOne = document.getElementById('txtvalueone').value;
            var valTwo = document.getElementById('txtvaluetwo').value;
            var sum = parseFloat(valOne) + parseFloat(valOne);
            var sameMultiVal = 3;

            var result = "Please enter number.";

            if (!isNaN(valOne) === true && !isNaN(valTwo) === true) {
                if (valOne == valTwo) {
                    result = 3 * sum;
                }
                else {
                    result = sum;
                }
            }
            //document.getElementById('lbltextresult1').innerHTML = valOne;
            //document.getElementById('lbltextresult2').innerHTML = valTwo;
            document.getElementById('lbltextresult').innerHTML = result;
        }
    {/* </script>
</head>
<body>
    <div>
        Enter Value One : <input type="text" id="txtvalueone" />
        Enter Value Two : <input type="text" id="txtvaluetwo" />
    </div>
    <div>
        <input type="button" value="Execute" onclick="Pro16();" />
    </div>
    <!--1 is : <label id="lbltextresult1"></label>
    2 is : <label id="lbltextresult2"></label>-->
    <div style="margin-top:10px">
        Answer is : <label id="lbltextresult"></label>
    </div>

</body>
</html> */}

// ////Actual Code:
// function sumTriple (x, y) {
//     if (x == y) {
//       return 3 * (x + y);
//       } 
//      else
//      {
//       return (x + y);
//      }
//    }
//   console.log(sumTriple(10, 20));
//   console.log(sumTriple(10, 10));