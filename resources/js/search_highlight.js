// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var q = getUrlVars()["q"];

    $(document).ready(function(){
    $('#highlights').click(function() {
        $(this).toggleClass('red');
        $('td').highlight(q);
        return false;
    })
    $('#remove_highlights').click(function() {
        $('td').removeHighlight(q);
        $('#highlights').toggleClass('red');
        return false;
    })
});