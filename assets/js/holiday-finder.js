let hotDestinations = ['Gran Canaria', 'Ibiza', 'Morroco', 'Tenerife', 'Mallorca'];
let coldDestinations = ['Zakopane', 'Poland', 'Innsbruch', 'Austria', 'Charmonix, France', 'Beitostolen, Norway'];
let cityBreaks = ['Paris-France', 'Prague-Czech Republic', 'Berlin-Germany', 'Warsaw-Poland', 'Poznan-Poland'];
let natureDestinations = ['Chile', 'Madagascar', 'New Zealand', 'Ecuador', 'Costa Rica'];
let errorTxt = ['Sorry we cannot find any destinations for you at this time, please check back at a later date for more holiday destinations'];
let destinations = [
    {
        name: 'Gran Canaria',
        climate:'hot',
        season:'summer',
        type: 'beach',
        location: {
            lat: 40.785091,
            lng: -73.968285
        }
    },
    {
        name: 'Ibiza',
        climate:'hot',
        season:'summer',
        type: 'beach',
        location: {
        lat: 41.084045,
        lng: -73.874256
    }
    },
    {
        name: 'Zakopane, Poland',
        climate:'cold',
        season:'winter',
        type: 'ski',
        location: {
        lat: 40.754932,
        lng: -73.984016
    }
    },

]
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

        const selectedDestinations = destinations.filter(dest => dest.climate === climate && 
            dest.type === type && dest.season === season)
            const myString = JSON.stringify(selectedDestinations);
        document.getElementById("result").innerHTML = myString;
        selectedDestinations.forEach(dest => {
            var marker = new google.maps.Marker();
            marker.setPosition(new google.maps.LatLng(dest.location.lat,dest.location.lng));
            marker.setMap(map);
        })
}

