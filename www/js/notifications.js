function initNotifications() {
  alert("entered initNotifications");
  var push = PushNotification.init({
    android: {
        senderID: "831928532696"
    }
});

push.on('registration', function(data) {
    alert("Sucessfully registered with GCM");
    alert(data.registrationId);
    var regID = data.registrationId;
    window.localStorage.removeItem("regID");
    window.localStorage.setItem("regID", redID);
});

push.on('notification', function(data) {
    alert("received notification");
    alert(data.message);
    // data.message,
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData

    push.finish(function () {
      alert('finish successfully called');
    });
});

push.on('error', function(e) {
  alert(e.message);
    // e.message
});
}
