document.addEventListener("DOMContentLoaded", function(event) {
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) { 
        
        //Does current element have a target attribute?
        if (links[i].hasAttribute('target')){
            var theStuff = links[i].parentNode.innerText;
            var theWhen = links[i].parentNode.getAttribute('when'); //Get the full date from the parent's 'when' attribute
            var theLink = links[i].getAttribute('target'); //Grab the current link's target
            var str1 = '<a href="'; //The start of our link code.
            var str2 = '" target="_blank" style="color: #8A4E5D;" title="'; //The end of our link element.  We put theLink between 1 and 2.
            var str3 = '</a></date>'; //Close that link element.  We put the date just before this.
            var link = str1.concat(theLink,str2,theWhen,'">',theStuff,str3); //Concatenate all the things!

            links[i].parentNode.innerHTML = link; //Replace the parent 'date' element's content with the monster we just made.
        }; 
       };
});
