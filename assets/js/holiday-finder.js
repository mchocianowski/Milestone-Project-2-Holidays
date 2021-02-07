let destinations = [
    {
        name: 'Ibiza',
        climate: 'hot',
        season: 'summer',
        type: 'beach',
        location: {
            lat: 39.020012,
            lng: 1.482148
        }
    },
    {
        name: 'Gran Canaria',
        climate: 'hot',
        season: 'summer',
        type: 'beach',
        location: {
            lat: 28.124830,
            lng: -15.430020
        }
    },
    {
        name: 'Morroco',
        climate: 'hot',
        season: 'summer',
        type: 'beach',
        location: {
            lat: 31.791702,
            lng: -7.092620
        }
    },
    {
        name: 'Tenerife',
        climate: 'hot',
        season: 'summer',
        type: 'beach',
        location: {
            lat: 28.291565,
            lng: -16.629129
        }
    },
    {
        name: 'Mallorca',
        climate: 'hot',
        season: 'summer',
        type: 'beach',
        location: {
            lat: 39.695263,
            lng: 3.017571
        }
    },
    {
        name: 'Innsbruck, Austria',
        climate: 'cold',
        season: 'winter',
        type: 'ski',
        location: {
            lat: 47.2654296,
            lng: 11.3927685
        }
    },
    {
        name: 'Zakopane, Poland',
        climate: 'cold',
        season: 'winter',
        type: 'ski',
        location: {
            lat: 49.2969446,
            lng: 19.950659
        }
    },
    {
        name: 'Charmonix, France',
        climate: 'cold',
        season: 'winter',
        type: 'ski',
        location: {
            lat: 45.9237,
            lng: 6.8694
        }
    },
    {
        name: 'Beitostolen, Norway',
        climate: 'cold',
        season: 'winter',
        type: 'ski',
        location: {
            lat: 61.2498658,
            lng: 8.9064205
        }
    },
    {
        name: 'Paris-France',
        climate: 'hot or cold',
        season: 'both',
        type: 'city',
        location: {
            lat: 48.8566969,
            lng: 2.3514616
        }
    },
    {
        name: 'Prague-Czech Republic',
        climate: 'hot or cold',
        season: 'both',
        type: 'city',
        location: {
            lat: 50.0874654,
            lng: 14.4212535
        }
    },
    {
        name: 'Berlin-Germany',
        climate: 'hot or cold',
        season: 'both',
        type: 'city',
        location: {
            lat: 52.5170365,
            lng: 13.3888599
        }
    },
    {
        name: 'Warsaw-Poland',
        climate: 'hot or cold',
        season: 'both',
        type: 'city',
        location: {
            lat: 52.2319581,
            lng: 21.0067249
        }
    },
    {
        name: 'Poznan-Poland',
        climate: 'hot or cold',
        season: 'both',
        type: 'city',
        location: {
            lat: 52.4006632,
            lng: 16.9197326
        }
    },
    {
        name: 'Chile',
        climate: 'hot',
        season: 'summer',
        type: 'nature',
        location: {
            lat: -31.7613365,
            lng: -71.3187697
        }
    },
    {
        name: 'Madagascar',
        climate: 'hot',
        season: 'summer',
        type: 'nature',
        location: {
            lat: -18.9249604,
            lng: 46.4416422
        }
    },
    {
        name: 'New Zealand',
        climate: 'hot',
        season: 'summer',
        type: 'nature',
        location: {
            lat: -41.5000831,
            lng: 172.8344077
        }
    },
    {
        name: 'Ecuador',
        climate: 'hot',
        season: 'summer',
        type: 'nature',
        location: {
            lat: -1.3397668,
            lng: -79.3666965
        }
    },
    {
        name: 'Costa Rica',
        climate: 'hot',
        season: 'summer',
        type: 'nature',
        location: {
            lat: 10.2735633,
            lng: -84.0739102
        }
    },


];
//Global variable for map.
var map;

//Set up the google maps api, setting the center to the middle of the Atlantic ocean.
function initMap() {
    const center = { lat: 46.619261, lng: -33.134766 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: center,
    });
}

//Gain user input and store information
function validateForm() {
    var climate = document.getElementById("climate").value;
    var type = document.getElementById("type").value;
    var season = document.getElementById("season").value;

    //Use user input to filter through array.
    const selectedDestinations = destinations.filter(dest => dest.climate === climate &&
        dest.type === type && dest.season === season);
    console.log(typeof (selectedDestinations));
    if (selectedDestinations.length === 0) {
        document.getElementById("result").innerHTML = "Sorry we were unable to match any suggestion."
    } else {
        document.getElementById("result").innerHTML = "";
        //Use a forEach loop to cycle through array and output the name parameter.
        selectedDestinations.forEach(function (dest) {
            var x = dest.name;
            document.getElementById("result").innerHTML += `<br>${x}`;
            var marker = new google.maps.Marker();
            marker.setPosition(new google.maps.LatLng(dest.location.lat, dest.location.lng));
            marker.setMap(map);
        });
    }
}