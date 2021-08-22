// var map;
// var service;
// var infowindow;

// var x = document.getElementById("demo");
// var xCoord;
// var yCoord;
// var randomLocation;
// var initialLocation;
// var distance;
// var ratingUser = 0;

// var e = document.getElementById("distancefg");
// distance = e.value;

// var a = document.getElementById("ratingUser");
// ratingUser = a.value;

// //newly added
// $(".btn").click(function () {
//   getLocation();
//   returnRestaurant();
// });

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser. Please enter your postal code.";
//   }
// }

// function showPosition(position) {
//   window.xCoord = position.coords.latitude;
//   window.yCoord = position.coords.longitude;

//   window.initialLocation = new google.maps.LatLng(xCoord, yCoord);

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: initialLocation,
//     zoom: 15
//   });

//   var fixedDistance = "" + distance;

//   var request = {
//     location: initialLocation,
//     radius: fixedDistance,
//     query: 'Restaurant',
//     openNow: true
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }

// function createMarker(placeresult) {
//   const marker = new google.maps.Marker({
//     position: placeresult.geometry.location,
//     title: placeresult.name,
//     map: map,
//   });
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     var places = [];
//     for (var i = 0; i < results.length; i++) {
//       if (results[i].rating >= ratingUser) {
//         places.push(results[i]);
//       }
//     }
//   }
//   if (places.length == 0) {
//     console.log("No locations open near you");
//   } else {
//     randomNum = generateRandomInteger(results.length)
//     window.randomLocation = places[randomNum];
//     createMarker(randomLocation);
//     returnRestaurant();
//   }
// }


// function generateRandomInteger(max) {
//   return Math.floor(Math.random() * max);
// }

// function returnRestaurant() {
//   //address, name, opening hours 
//   console.log(randomLocation.name);
//   console.log(randomLocation.formatted_address);
//   console.log(randomLocation.rating);
// }

var map;
var service;
var infowindow;

var x = document.getElementById("demo");
var xCoord;
var yCoord;
var randomLocation;
var initialLocation;
var distance;
var ratingUser = 0;

var e = document.getElementById("distancefg");
distance = e.value;

var a = document.getElementById("ratingUser");
ratingUser = a.value;

//newly added
$(".btn").click(function () {
  getLocation();
  returnRestaurant();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser. Please enter your postal code.";
  }
}

function showPosition(position) {
  window.xCoord = position.coords.latitude;
  window.yCoord = position.coords.longitude;

  window.initialLocation = new google.maps.LatLng(xCoord, yCoord);

  map = new google.maps.Map(document.getElementById('map'), {
    center: initialLocation,
    zoom: 15
  });

  var fixedDistance = "" + distance;

  var request = {
    location: initialLocation,
    radius: fixedDistance,
    query: 'Restaurant',
    openNow: true
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function createMarker(placeresult) {
    const marker = new google.maps.Marker({
      position: placeresult.geometry.location,
      title: placeresult.name,
      map: map,
    });
    var infowindow = new google.maps.InfoWindow({
      content: "FOOD IS HERE : " + placeresult.name
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
  

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var places = [];
    for (var i = 0; i < results.length; i++) {
      if (results[i].rating >= ratingUser) {
        places.push(results[i]);
      }
    }
  }
  if (places.length == 0) {
    console.log("No locations open near you");
  } else {
    randomNum = generateRandomInteger(results.length)
    window.randomLocation = places[randomNum];
    createMarker(randomLocation);
    returnRestaurant();
  }
}


function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

function returnRestaurant() {
  //address, name, opening hours
  console.log(randomLocation.name);
  console.log(randomLocation.formatted_address);
  console.log(randomLocation.rating);
  replace();
}
function replace(){
  document.getElementById("name").innerHTML = randomLocation.name;
  document.getElementById("rating").innerHTML= randomLocation.rating;
  document.getElementById("address").innerHTML = randomLocation.formatted_address;
}
