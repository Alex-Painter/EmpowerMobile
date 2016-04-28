function getLocation(){
  alert("Entered get location");
  navigator.geolocation.getCurrentPosition(gotGeo, notGotGeo);
}

function gotGeo(position) {
  alert("entered location on success");
  var lat = position.coords.latitude;
  var long = position.coords.longitude;

  var coords = lat + ", " + long;


    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    alert(coords);

    window.localStorage.setItem("lat", lat);
    window.localStorage.setItem("long", long);
}


  // onError Callback receives a PositionError object
  //
  function notGotGeo(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }
  /*function getLocation(){

      var options = {
        timeout: 10000,
        enableHighAccuracy: true,
      };
      alert("Entered get location");

      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }
  // onSuccess Callback
  // This method accepts a Position object, which contains the
  // current GPS coordinates
  //
  var onSuccess = function(position) {
      alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
  };

  // onError Callback receives a PositionError object
  //
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }*/
