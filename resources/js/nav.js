
        $(document).ready(function(){
        
        $('ref').each(function() {
            var $dog = $(this).attr("target");
            var str1 = '<a class="info" href="';
            var str2 = '" target="_blank"><span>[+]</span></a>';
            var link = str1.concat($dog,str2);
            $(this).append(link);
})
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
})
        $('#pers').click(function() {
            $(this).toggleClass('red');
            $('persName').toggleClass('active');
            return false;
        })
        $('#add').click(function() {
            $(this).toggleClass('red');
            $('add').toggleClass('active');
            return false;
        })
        $('#places').click(function() {
            $(this).toggleClass('red');
            $('placeName').toggleClass('active');
            return false;
        })
        $('#pencils').click(function() {
            $(this).toggleClass('red');
            $('[rend=pencil]').toggleClass('active');
            return false;
        })
        $("button#sources").on('click', hideSourcesClick);
        function hideSourcesClick () {
            $('.info').hide();
            $('button#sources').toggleClass('red')
                .html('sources')
                .off('click').on('click', showSourcesClick);
            return false;
        }
        function showSourcesClick () {
            $(this).toggleClass('red');
            $('.info').show();
            $("button#sources").html('sources')
                .off('click').on('click', hideSourcesClick);
            return false;
        }
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