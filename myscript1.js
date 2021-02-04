let hotDestinations = ['Gran Canaria', 'Ibiza', 'Morroco', 'Tenerife', 'Mallorca'];
let coldDestinations = ['Zakopane', 'Poland', 'Innsbruch', 'Austria', 'Charmonix, France', 'Beitostolen, Norway'];
let cityBreaks = ['Paris-France', 'Prague-Czech Republic', 'Berlin-Germany', 'Warsaw-Poland', 'Poznan-Poland'];
let natureDestinations = ['Chile', 'Madagascar', 'New Zealand', 'Ecuador', 'Costa Rica'];
let errorTxt = ['Sorry we cannot find any destinations for you at this time, please check back at a later date for more holiday destinations'];

var hotDestinationsLocations = [
    {
        lat: 40.785091,
        lng: -73.968285
    },
    {
        lat: 41.084045,
        lng: -73.874256
    },
    {
        lat: 40.754932,
        lng: -73.984016
    }
];

var map;


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

    if (climate == "hot" && season == "summer" && type == "beach") {
        document.getElementById("result").innerHTML = hotDestinations;
        var coords = hotDestinationsLocations;
        coords.forEach(coord => {
               var marker = new google.maps.Marker();

            //var markerCluster = new MarkerClusterer(map, marker, {
            //imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            // });
            marker.setPosition(new google.maps.LatLng(coord.lat, coord.lng));
            marker.setMap(map);
        })
    }
    else if (climate == "neither" && season == "summer" && type == "beach") {
        document.getElementById("result").innerHTML = hotDestinations;
    }
    else if (climate === "hot" && season == "summer" && type == "city") {
        document.getElementById("result").innerHTML = cityBreaks;
    }
    else if (climate === "neither" && season == "summer" && type == "city") {
        document.getElementById("result").innerHTML = cityBreaks;
    }
    else if (climate == "cold" && season == "winter" && type == "city") {
        document.getElementById("result").innerHTML = cityBreaks;
    }
    else if (climate == "neither" && season == "winter" && type == "city") {
        document.getElementById("result").innerHTML = cityBreaks;
    }
    else if (climate == "hot" && season == "summer" && type == "nature") {
        document.getElementById("result").innerHTML = natureDestinations;
    }
    else if (climate == "neither" && season == "summer" && type == "nature") {
        document.getElementById("result").innerHTML = natureDestinations;
    }
    else if (climate == "hot" && season == "winter" && type == "nature") {
        document.getElementById("result").innerHTML = natureDestinations;
    }
    else if (climate == "cold" && season == "winter" && type == "nature") {
        document.getElementById("result").innerHTML = natureDestinations;
    }
    else if (climate == "neither" && season == "winter" && type == "nature") {
        document.getElementById("result").innerHTML = natureDestinations;
    }
    else if (climate == "cold" && season == "winter" && type == "ski") {
        document.getElementById("result").innerHTML = coldDestinations;
    }
    else if (climate == "neither" && season == "winter" && type == "ski") {
        document.getElementById("result").innerHTML = coldDestinations;
    }
    else {
        document.getElementById("result").innerHTML = errorTxt;
    }
}
