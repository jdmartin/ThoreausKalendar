    $(document).ready(function(){
    
    $('input#alphasearch').keypress(function (e) {
        if (e.which == 13) {
            firstClick();
            return false;
        }
    })
    
    $("button#show").on('click', firstClick);
    
    function firstClick () {
        var givenValue = $('input#alphasearch').val().replace(/[!"#$%&()*+.\/:;<=>?@\[\\\]^`{|}~]/g, '').replace(/ /g,'');
        var givenValues = givenValue.split(",");
      
        $.each(givenValues, function (index,value) {
            var alpha = (value);
            if (alpha === "") {
                $("input#alphasearch").val('').attr('placeholder', 'Need Input...');
                $("input#alphasearch").effect("shake", { times:2 }, 500);
            } 
            else {
                blasterMaster(alpha);
            } 
        }
    )}
    
    function secondClick () {
        if ($('.blast').length > 0) {
            turnOutTheLights();
        } else if (pieces > 0) {
            $("cell").blast(false);
            setTheRayToJerry();
        }
        $("input#alphasearch").attr('placeholder', 'Search this page...')
            .val('');
        $("button#show").html('Search')
            .off('click').on('click', firstClick);
    }
    
    function blasterMaster (term) {
        var target = $("cell").blast({search: term});
        blasted();
    }   
    
    function blasted() {
        var pieces = $('.blast').length;
        if (pieces === 0) {
            $("input#alphasearch").val('')
                .attr('placeholder', 'No matches.')
                .effect("shake", { times:2 }, 500);
        } else if (pieces > 0) {
            var reeses = pieces + " matches.";
            $("input#alphasearch").val('')
                .attr('placeholder', reeses);
            $("button#show").html('Reset')
                .off('click').on('click', secondClick);
            setTheRayToJerry();
        }
    }
    
    function setTheRayToJerry () {
        $('.blast').parentsUntil('tr').addClass('alpha');
    }
    
    function turnOutTheLights () {
        $('.blast').removeAttr('class')
            .parentsUntil('tr').removeClass('alpha blast');
    }
    
});