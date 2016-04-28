function takePicture() {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: false,
    encodingType: Camera.EncodingType.JPEG,
  });
}

function onSuccess(imageURL) {
  var image = document.getElementById('picture');
  image.src = "data:image/jpeg;base64," + imageURL;
  window.location="index.html#pictureSuccess";

  sendPost(imageURL);
}

function onFail(message) {
  alert('Failed because: ' + message);
}
