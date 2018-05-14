////Write a JavaScript exercise to get the extension of a filename
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8" />
//     <title>Pro 14 : Write a JavaScript exercise to get the extension of a filename. </title>
//     <script>
        function Pro14()
        {
            var fileName = document.getElementById('inFileControl').value;
            var fileNameLength = fileName.length;
            var exLocation = fileName.indexOf('.');
            var result = fileName.substring(exLocation+1, fileNameLength);

            document.getElementById('lblResult').innerHTML = result;
        }
        function Pro14_2()
        {
            var fileName = document.getElementById('inFileControl').value;

            var result = fileName.split('.').pop();
            document.getElementById('lblResult2').innerHTML = result;
        }
    {/* </script>
</head>
<body>
    <div style="margin-bottom:10px">
        <div>
            <input type="file" name="input-file-control" id="inFileControl" />
         </div>
    </div>
    <div style="margin-bottom:10px">
        <div>
            <input type="button" value="Extract File Name" onclick="Pro14();" />
        </div>
    </div>
    <div>
        <div>
            Extenstion is : <label id="lblResult" ></label>
        </div>
  
    </div>
    <div style="margin-top:20px">
        <div>
            <input type="button" value="Extract File 2" onclick="Pro14_2();" />
        </div>
        <div>
            Extenstion 2 is : <label id="lblResult2"></label>
        </div>
    </div>
</body>
</html> */}

////Actual Code: 
// filename = "system.php"
// console.log(filename.split('.').pop());
// filename = "abc.js"
// console.log(filename.split('.').pop());