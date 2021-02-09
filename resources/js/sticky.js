        $(window).bind("load", function() {
            var $window = $(window),
               $stickyEl = $('#search-menu'),
               elTop = $stickyEl.offset().top;

            $window.scroll(function() {
                $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
            });
});