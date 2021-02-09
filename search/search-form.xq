xquery version "3.0";

declare option exist:serialize "method=xhtml media-type=text/html indent=yes";
 
let $title := 'Basic Search Form'
 
return
<html>
    <head>
         <title>{$title}</title>
     </head>
     <body>
     <h1>{$title}</h1>
     <form method="GET" action="search.xq">
        <p>
            <strong>Keyword Search:</strong>
            <input name="q" type="text"/>
        </p>
        <p>
            <input type="submit" value="Search"/>
        </p>
    </form>
    </body>
</html>