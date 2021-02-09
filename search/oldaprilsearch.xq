xquery version "3.0";

declare namespace tei = "http://www.tei-c.org/ns/1.0";
declare option exist:serialize "method=xhtml media-type=text/html indent=yes";

let $title := 'Kalendar Search Results...'
let $data-collection := '/db/apps/BetaKalendar/data/oldapril/'

(: get the search query string from the URL parameter :)
let $q := xs:string(request:get-parameter("q", ""))
let $filtered-q := replace($q, "[^0-9a-zA-ZäöüßÄÖÜ\-,. ]", "")

return
<html>
    <head>
       <script src="../resources/jquery.js"/>
       <link rel="stylesheet" type="text/css" href="../resources/css/search.css"/>
       <link rel="stylesheet" type="text/css" href="../resources/css/style.css"/>
       <link rel="stylesheet" type="text/css" href="../resources/css/dev.css" />
       <title>{$title}</title>
       <script src="../resources/css/nav.js"/>
       <script src="../resources/highlight.js"/>
       <script src="../resources/search_highlight.js"/>
     </head>
     <body>
    <div class="hiddenmenu">
                &#9776;
                <div id="menu-panel">
                <div id="navmainpage">
                <ul>
                <li><a href="http://thoreauscalendar.umf.maine.edu/" class="navbutton" target="_self">Home</a></li>
                <li><a href="http://thoreauscalendar.umf.maine.edu/about.html" class="navbutton" target="_self">About</a></li>
                <li><a href="http://thoreauscalendar.umf.maine.edu/how.html" class="navbutton" target="_self">How</a></li>
                <li><a href="http://thoreauscalendar.umf.maine.edu/newapril.html" class="navbutton" target="_self">General Phenomena for April</a></li>
                <li><a href="http://thoreauscalendar.umf.maine.edu/otherapril.html" class="navbutton" target="_self">General Phenomena for April #2</a></li>
                </ul>
            </div>
            </div></div>
        <div id="main">
            <div id="content">
                <div id="banner">
                    <img src="../resources/images/newtestheader3.png" align="middle"/>
                </div></div>
        <div id="search-content">
        <p><b>Searching for: </b>'{$filtered-q}':</p>
        <p>August 2014: Please note that a more robust search tool is in development. While this will give you an idea of some of the features we're looking at, it is obviously limited in utility at present.</p>
        <table>
        <tr>{
           for $item in collection($data-collection)//tei:row[contains(., $filtered-q)]
             return
                <td>{$item//*[contains(., $filtered-q)]}</td> 
        }</tr>
        </table>
        <div id="search-menu">
            <button id="highlights">Highlight Search Term</button>
            <button id="remove_highlights">Remove Search Highlight</button>
            <button id="pers">Highlight persNames</button>
            <button id="add">Highlight adds</button>
            <button id="places">Highlight placeNames</button>
            <button id="pencils">Highlight pencil</button>
            <button id="underlines">Show underlines</button>
            <button id="gaps">Show Gaps</button>
            <button id="sources">Hide sources</button>
            <button id="show-sources">Show sources</button>
        </div>
    <div id="footer">
                <div id="lefty" style="width: 40%">
                <ul style="list-style: none;">
                <li><a href="../resources/images/GP%20April%202.png" target="_new">See this manuscript page</a>&#160;&#160;&#160;&#160;<a href="http://thoreauscalendar.umf.maine.edu/resources/downloads/GPApril2Big.zip">Download the full-size image</a></li>
                <li>Manuscript images provided by: <a href="http://www.themorgan.org/default.asp" target="_blank">The Pierpont Morgan Library</a>, New York.</li>
                </ul>
                </div>
                <div id="righty" style="width: 40%">
                    <ul style="list-style: none;">
                    <li><b>Editor:</b> Kristen Case, University of Maine at Farmington</li>
                    <li><b>Technical Director:</b> Jonathan Martin, UMass Lowell</li>
                    <li><b>Consultant:</b> Joseph Fisher, UMass Lowell</li>
                    <li><b>Student Assistants:</b> Diana Allen and Carinne Hagis</li>
                    </ul>
                    </div>
                    <div id="nader" style="width: 20%; float: left;">
                    <br />
                    <form method="GET" action="../search/oldaprilsearch.xq">
                        <input name="q" type="text" placeholder="Search" autocomplete="off"/>
                        <input type="submit" style="visibility: hidden;" value="Go"/>
                    </form>
                    </div>
            </div></div></div>
   </body>
</html>
        