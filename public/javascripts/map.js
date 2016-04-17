var map;
var markers = [];


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -41.303, lng: 174.787},
    zoom: 15
    });

  if(document.getElementById("create")){
    map.addListener('click', function(e) {
      setMapOnAll(null)
      addMarker({lat: e.latLng.lat(), lng: e.latLng.lng()})
    })
  }
}

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  })
  markers.push(marker)
  document.getElementById('location_form').value = location.lat + " " + location.lng
}

function setMapOnAll (map) {
  for (var i = 0 ;i < markers.length; i++) {
    markers[i].setMap(map);
  }
}





