$(document).ready(function () {
    $(".tweet-compose").click(function () {
        $(".tweet-compose").css("height", "5em");
        $("#tweet-controls").css("display", "inline-block");

    });
    $('#tweet-content textarea').on('keyup', function () {
        $('#char-count').html('140' - $('#tweet-content textarea').val().length);
        
        if ($('#tweet-content textarea').val().length >= 140) {
            $('#tweet-controls .button').prop('disabled', true);
                        
        } else {
            $('#tweet-controls .button').prop('disabled', false);
        }
        
        if ($('#tweet-content textarea').val().length >= 130) {
            $('#char-count').css('color', 'red');
            
        } else {
            $('#char-count').css('color', 'black');
        };
    });
    
    $(".tweet").mouseenter(function() {
        $('.tweet-actions li').css("display", "inline-block");
    });
     $(".tweet").mouseleave(function() {
        $('.tweet-actions li').css("display", "none");
    });
     $(".tweet").click(function() {
        $('.stats').css("display", "inline-block");
    });

  $("time").timeago(new Date());
    jQuery.timeago("2013-09-19");

});