  <!-- Google MAPs -->
    <script>
    // Note: This method requires that you consent to location sharing when
    // prompted by your browser. If you see a blank space instead of the map, this
    // is probably because you have denied permission for location sharing
    // or your browser does not support geolocation.
    var map,
        mapOptions,
        pos,
        marker;

    function displayMap() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    };

    function initialize() {
        var mapOptions = {
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
    };
    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            //get current geolocation and store it into a variable object
            pos = new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude);
            //initialize marker with properties
            marker = new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.BOUNCE
            });
            map.setCenter(pos);
        }, function() {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }

    function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
            var content = 'Error: The Geolocation service failed.';
        } else {
            var content = 'Error: Your browser doesn\'t support geolocation.';
        }
        var options = {
            map: map,
            position: new google.maps.LatLng(60, 105),
            content: content
        };
        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
    }

    //listeners
    google.maps.event.addDomListener(window, "load", initialize);
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
    </script>