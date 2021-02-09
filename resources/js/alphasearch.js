    $(document).ready(function(){

    $("button#show").on('click', firstClick);
    
    function firstClick () {
        alpha = $('input').val().replace(/[!"#$%&()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, '');
        beta = new RegExp('\\b(?:'+alpha+')\\b', "gi");
        if (alpha === '') {
            $("input#alphasearch").val('')
                .attr('placeholder', 'Need Input...')
                .effect("shake", { times:2 }, 500);
        } else {
            things_to_find = $('td').filter(function () {
                return beta.test($(this).text());
            });  
            if (things_to_find.length) {
                (things_to_find).toggleClass('alpha')
                    .highlight(alpha);
                $("button#show").html('Reset')
                    .off('click').on('click', secondClick);
        } else {
                $("input#alphasearch").val('')
                    .attr('placeholder', 'No matches.')
                    .effect("shake", { times:2 }, 500);
        }
    }
}
    function secondClick () {
        (things_to_find).toggleClass('alpha')
            .removeHighlight(alpha);
        $("input#alphasearch").attr('placeholder', 'Search this page...')
            .val('');
        $("button#show").html('Search')
            .off('click').on('click', firstClick);
}

});