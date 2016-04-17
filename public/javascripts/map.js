
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
      firebase.on('child_added', function(snapshot, prevChildKey){
        var newPosition = snapshot.val();
        var latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        })
      })

  }

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  })
  markers.push(marker)
  document.getElementById('lat_form').value = location.lat
  document.getElementById('lng_form').value = location.lng
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

