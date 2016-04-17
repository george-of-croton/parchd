
var map;
var markers = [];
var firebase = new Firebase("https://parchd.firebaseio.com/")


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -41.303, lng: 174.787},
    zoom: 15
    });

  if(document.getElementById("create")){
    map.addListener('click', function(e) {
      addMarker({lat: e.latLng.lat(), lng: e.latLng.lng()})
    })
  }
}
  if(document.getElementById('water')){
      console.log(getMarkers())
  }

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  })
  markers.push(marker)
  document.getElementById('location_form').value = "lat: " + location.lat + " lng: " + location.lng
}

function setMapOnAll (map) {
  for (var i = 0 ;i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function getMarkers() {
  var script = document.createElement('a');
    script.href = ('water/marker')
    document.getElementsByTagName('head')[0].appendChild(script)
}

