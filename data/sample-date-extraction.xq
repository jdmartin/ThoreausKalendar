xquery version "3.0";
declare namespace tei = "http://www.tei-c.org/ns/1.0";

(: get all dates in the body of the document :)
let $dates := doc('/db/apps/Kalendar/data/April.xml')//tei:body//tei:date


return
<html>
<head />
<body>
<data>{
   for $date in $dates
   let $nodesbefore := $date/preceding-sibling::node()
   let $nodesafter := $date/following-sibling::node()
   let $after := string-join($nodesafter, ' ')
   let $afterString := substring($after,1,100)
   let $before := string-join($nodesbefore,' ')
   let $beforeString := substring($before,string-length($before)- 101,100)

   let $context := 
        <div>
          {concat('...', $beforeString,' ')} 
          <b>{$date/text()}</b>
          {concat($afterString,' ...')}
        </div>
   return 
     <event start='{$date/@when}' title='{$date/@when}' >
       {util:serialize($context,("method=xhtml","media-type=text/html"))}
     </event>
}</data></body></html>