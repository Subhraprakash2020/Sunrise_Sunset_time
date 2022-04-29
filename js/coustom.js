$('#search').on('click', function() {
    console.log("Inside search");
    $('.all_news').html('')

    console.log('data::', $('#scountry').val());
    var url = 'https://api.ipgeolocation.io/astronomy?apiKey=8b68d178ff0b460c85c987102df9a8eb&' + $('#scountry').val() + '';

    $.ajax({
        type: 'GET',
        url: url,
        data: {},

        success: function(data, status, shr) {
            $(data).each(function(key, val) {
                console.log('key,val', key, val);
                $('.all_news').append('<div class="inside">,<div class="date">' + '<img class="dimg"src="image/calendar.png">' + val.date + '</div>,<div class="time"><img class="dtime"src="image/clock.png">' + val.current_time + '</div>,<div class="sunrise"><img class="dsunrise" src="image/sunrise.png">' + val.sunrise + '</div>,<div class="sunset"><img class="dsunset" src="image/sunset.png">' + val.sunset + '</div></div>')
            })
        }
    })
})