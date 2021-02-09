$(document).ready(function() {
    $('#navmainpage').hide();
})

var menushow = function() {
  $('.hiddenmenu').click(function() {
    $('#navmainpage').toggle();
  });
}

$(document).ready(menushow);

