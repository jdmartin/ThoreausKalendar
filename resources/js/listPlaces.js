    $(document).ready(function() {
    var currentPlaces = [];
    var searchTerms = [];
    var placesMenu = "";
    
    $("placeName").each(function(){
        var thePlace = $(this).attr('ref');
        currentPlaces.push(thePlace);
        var theTerm = $(this).text();
        searchTerms.push(theTerm);
    });
    for ( var i = 0, j = currentPlaces.length; i < j; i++ ) {
        placesMenu += "<option value=\"" + searchTerms[i] + "\">" + currentPlaces[i] + "</option>";
    }
    $("#nader").html("<br/><select id=\"placesSearch\">" + "<option>Choose a place to highlight it on the Kalendar.</option>" + placesMenu + "</select><br/><br/><button id=\"placesReset\">Clear Highlighting</button>");
    
    $( "#placesSearch" ).click(function() {
        var givenValue = $('#placesSearch option:selected').val();
        var givenValues = givenValue.split(",");
          
        $.each(givenValues, function (index,value) {
            var alpha = (value);
            blastIt(alpha);
        });
    });
    
    function blastIt (term) {
        var target = $("cell").blast({delimeter: "all", search: term});
        blastOff();
    }   
    
    function blastOff() {
        var pieces = $('.blast').length;
        blastColor();
    }
    
    function blastColor () {
        $('.blast').parentsUntil('tr').addClass('alpha');
        return false;
    }
    
    $( "#placesReset").click(function() {
        $('.blast').removeAttr('class')
            .parentsUntil('tr').removeClass('alpha blast');
        return false;
    });
});