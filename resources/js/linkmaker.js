document.addEventListener("DOMContentLoaded", function(event) {
    function sanitize(string) {
        return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    var dates = document.getElementsByTagName("date");
    for (var i = 0; i < dates.length; i++) { 
        if (dates[i].querySelectorAll('link')) {
            var theLink = dates[i].querySelectorAll('link');
            var theWhen = dates[i].getAttribute('when'); //Get the full date from the parent's 'when' attribute
            //Get the text we'll wrap in a link.
            var theStuff = sanitize(dates[i].textContent);
            //Does current element have a link with a target attribute?
            if (theLink[0]) {
                var targetLink = theLink[0].getAttribute('target');
            }
            else {
                continue
            }
            var str1 = '<a href="'; //The start of our link code.
            var str2 = '" target="_blank" style="color: #8A4E5D;" title="'; //The end of our link element.  We put theLink between 1 and 2.
            var str3 = '</a>'; //Close that link element.  We put the date just before this.
            var link = str1.concat(targetLink,str2,theWhen,'">',theStuff,str3); //Concatenate all the things!
            dates[i].innerHTML = link; //Replace the parent 'date' element's content with the monster we just made.
        }
    };
});
