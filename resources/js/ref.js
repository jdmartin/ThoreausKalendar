document.addEventListener("DOMContentLoaded", function(event) {
    //Prepare the <ref> by making them into links
    var theRefs = document.querySelectorAll('ref');
    for (var i = 0; i < theRefs.length; i++) {
        //If ref encloses a date, do stuff
        if (theRefs[i].querySelector('date')) {
            if (theRefs[i].querySelector('date') !== null) {
                var reftarget = theRefs[i].getAttribute("target");
                var refdate = theRefs[i].querySelector('date').getAttribute("when");
                var shortdate = theRefs[i].querySelector('date').textContent;
                var str1 = '<a href="' + reftarget + '" title="' + refdate + '" target="_blank">' + '<date>' + shortdate + '</date></a>';
                
                theRefs[i].querySelector('date').innerHTML = str1;
            }
        }

        //If ref has previous sibling date, do stuff.
        else if (theRefs[i].previousElementSibling) {
            if ((theRefs[i].previousElementSibling.nodeName !== null) && (theRefs[i].previousElementSibling.nodeName === 'DATE')) {
                var reftarget = theRefs[i].previousElementSibling.getAttribute("target");
                var refdate = theRefs[i].getAttribute('when');
                var shortdate = theRefs[i].previousElementSibling.textContent;
                theRefs[i].innerHTML = theRefs[i].innerHTML.replace(new RegExp(shortdate, 'gi'), "<date>" + "$&" + "</date>");
            }
        }
        //If ref has next sibling date, do stuff:
        else if (theRefs[i].nextElementSibling) {
            if ((theRefs[i].nextElementSibling.nodeName !== null) && (theRefs[i].nextElementSibling.nodeName === 'REF')) {
                var reftarget = theRefs[i].nextElementSibling.getAttribute("target");
                var refdate = theRefs[i].getAttribute('when');
                var shortdate = theRefs[i].nextElementSibling.textContent;
                theRefs[i].innerHTML = theRefs[i].innerHTML.replace(new RegExp(shortdate, 'gi'), "<date>" + "$&" + "</date>");
            }
        }
    }
});