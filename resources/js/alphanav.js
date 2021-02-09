    $(document).ready(function(){
        $('#navmainpage').hide();
        $('#search-help').hide();
        var searchHelper = 0;
        
    if ($("#search-menu").length > 0) {
        $(window).bind("load", function() {
            var $window = $(window),
               $stickyEl = $('#search-menu'),
               elTop = $stickyEl.offset().top;
    
            $window.scroll(function() {
                $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
            });
        });
    }
    
    $('ref').each(function() {
        var reftarget = $(this).attr("target");
        var refdate = $(this).children('date').attr("when");
        var str1 = '<a href="' + reftarget + '" title="' + refdate + '" target="_blank"></a>';
        $(this).children('date').wrap(str1);
    });
    
    $('gap').each(function() {
        var extent = $(this).attr('extent');
        var reason = $(this).attr('reason');
        var result = '';
        if (typeof extent != 'undefined') {
            result += "Extent: " + extent + "  |";
        }
        if (typeof reason != 'undefined') {
            result += " Reason: " + reason + "  ";
        }
        var str1 = '<span style="border-bottom:1px dotted; "title="';
        var str2 = '" ><span>[gap]</span>';
        var link = str1.concat(result,str2);
        $(this).append(link);
    });
    
    $('#pers').click(function() {
        $(this).toggleClass('persbutton');
        $('persName').toggleClass('active');
        return false;
    });
    
    $('#add').click(function() {
        $(this).toggleClass('addbutton');
        $("add[rend != 'pencil']").toggleClass('active');
        return false;
    });
    
    $('#places').click(function() {
        $(this).toggleClass('placebutton');
        $('placeName').toggleClass('active');
        return false;
    });
    
    $('#pencils').click(function() {
        $(this).toggleClass('pencilbutton');
        $('[rend=pencil]').toggleClass('active');
        return false;
    });
    
    $('.hiddenmenu').click(function() {
        $('#navmainpage').toggle();
    });
    
    $('#search-toggle').click(function() {
       $('#search-help').toggle();
       if (searchHelper === 0) {
            $('#search-toggle').text("hide help");
            searchHelper = 1;
       } else if (searchHelper === 1) {
            $('#search-toggle').text("show help");
            searchHelper = 0;
       }
    });
    
    $("button#gaps").on('click', showGapsClick);
    function showGapsClick () {
        $(this).toggleClass('red');
        $('gap').toggleClass('active');
        $("button#gaps").html('gaps')
            .off('click').on('click', hideGapsClick);
        return false;
    }
    
    function hideGapsClick () {
        $(this).toggleClass('red');
        $('gap').toggleClass('active');
        $("button#gaps").html('gaps')
            .off('click').on('click', showGapsClick);
        return false;
    }       
    
    $("button#help").on('click', showHelpClick);
    function showHelpClick () {
        $(this).toggleClass('red');
        $('div#helpbox').show()
            .toggleClass('helpactive');
        $("button#help").off('click').on('click', hideHelpClick);
        return false;
    }
    
    function hideHelpClick () {
        $(this).toggleClass('red');
        $('div#helpbox').toggleClass('helpactive')
            .hide();
        $("button#help").off('click').on('click', showHelpClick);
        return false;
    }
});