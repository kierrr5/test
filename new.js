(function() {
    'use strict'

    if (document.querySelector(".coolstays-embedded-calendar")) {
        var containers = document.querySelectorAll(".coolstays-embedded-calendar");
        containers.forEach(function (container) {
            var property_id = container.getAttribute("data-api-key");

            if (property_id) {
                var str = '<div style="border-radius: 6px; width: 100%; height: 394px; overflow: hidden">' +
                    '<iframe src="//coolstays.com/embed/calendar/' + property_id + '/widget" style="border:none; width:100%; max-width:400px; height:100%; margin:0 auto; text-align: center; display: block;" title="CoolStays Availability Calendar"></iframe>' +
                    '</div>'
            } else {
                var str = "Property key not valid."
            }

            container.innerHTML = str;
        });
    }

})();
