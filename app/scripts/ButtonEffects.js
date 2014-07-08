'use strict';

$(document).ready(function() {

    $('#resume-btn').click(function() {
        $('.about-me').hide('fast');
        $('.blading-adventures').hide('fast');
        $(".resume").fadeIn("fast");
    });

    $("#about-me-btn").click(function() {
        $('.resume').hide('fast');
        $('.blading-adventures').hide('fast');
        $('.about-me').fadeIn('fast');
    });

    $('#skate-sesh-btn').click(function() {
        $('.resume').hide('fast');
        $('.about-me').hide('fast');
        $('.blading-adventures').fadeIn('fast');
    });
});
