//jQuery doesn't have a hasAttribute function like JavaScript does.  So, let's make one:
$.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined; //As long as it's not undefined, we go assume it's real.  Should probably check for false, too... next iteration!
};

$(document).ready(function(){
    var $links = $('link');
    $links.each( function (index, el) { //For each link element, keep track of which it is and reference it as the anonymous 'el' element
       $( el ).hasAttr('target'); //Does 'el' have a target attribute?
            var theStuff = $(this).parent('date').text(); //That is, grab the date from its parent date element
            var theLink = $(this).attr('target'); //Grab the current link's target
            var str1 = '<a href="'; //The start of our link code.
            var str2 = '" target="_blank" style="color: #8A4E5D;">'; //The end of our link element.  We put theLink between 1 and 2.
            var str3 = '</a></date>'; //Close that link element.  We put the date just before this.
            var link = str1.concat(theLink,str2,theStuff,str3); //Concatenate all the things!

            var result = $(this).parent('date').html(link);
            return result; //Replace the parent 'date' element's content with the monster we just made.
       });
});
