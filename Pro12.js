////Write a JavaScript program to get the website URL (loading page).
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8" />
//     <title>Pro12 : Write a JavaScript program to get the website URL (loading page)</title>
//     <script>
        function Pro12()
        {
            //alert(window.location.href + " || host name:" + window.location.hostname + " || Path name:" + window.location.pathname + " || Protocol:" + window.location.protocol);
            var websiteName = window.location.href;
            var browserName = window.navigator.appName;

            document.getElementById('in-website-id').value = websiteName;
            document.getElementById('in-browser-id').value = browserName; // This is pretty basic. Do not concentrate on this.
        }
    {/* </script>
</head>
<body>
    <div>
    </div>
    <div>
        <div>
            <input type="button" value="Show Website & Browser" name="btn-show-website" id="btn-show-website" onclick="Pro12();"/>
        </div>
        <div style="margin-top:20px">
            <input type="text" id="in-website-id"></input>
        </div>
        <div style="margin-top:5px">
            <input type="text" id="in-browser-id"></input>
        </div>
    </div>
</body>
</html> */}

////Actual Code: 
// alert(document.URL);