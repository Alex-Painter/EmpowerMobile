/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('deviceready', getLocation(), false);
    document.addEventListener('deviceready', initNotifications(), false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');

  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
  }
};

function sendGet() {

  alert("Entered sendGet()");

  var url = "http://188.166.172.50/EmpowerWeb/public/issue";
  var dataType = "json";
  var data = "";
  var callbackData;

  $.getJSON(url, function( data ) {
    alert("GET was successful");
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "index" );
  });

  alert("Exiting sendGet()");
}

function sendPost(image) {
  alert("Entering Post");
  var lat = window.localStorage.getItem("lat");
  var long = window.localStorage.getItem("long");
  var regID = window.localStorage.getItem("registration");
  alert("regID: " + regID);
  //alert(coords);

  var data = {
    name: "Tom Sheedy",
    picture: image,
    lat: lat,
    long: long,
    regID: regID
  }

  var success;
  var dataType;
  var url = "http://192.168.0.4/EmpowerWeb/public/issue";

    $.post(url, data, function(){
      alert("Post successful");
    });
    alert("Leaving Post");
}

function home(){
  window.location="index.html#index";
}
