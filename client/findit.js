// define basic places collection client side
var places = new Meteor.Collection(null);
places.insert({ name: "Farthest place", image: 'place_1.jpeg', latitude: 51.772028, longitude: 19.414764 });
places.insert({ name: "Farther place", image: 'place_1.jpeg', latitude: 51.775801, longitude: 19.4133239 });
places.insert({ name: "Close place", image: 'place_1.jpeg', latitude: 51.777401, longitude: 19.4123239 });
places.insert({ name: "Right here", image: 'place_1.jpeg', latitude: 51.7779007, longitude: 19.411222199999997 });

// access places collection in view
Template.registerHelper("places", function () {
  return places.find({}).fetch();
});
Template.registerHelper("roundGeo", function (number) {
  return Number(Math.round(number+'e4')+'e-4');
});
Template.registerHelper("roundGeo", function (number) {
  return Number(Math.round(number+'e4')+'e-4');
});

function getColorFromDistance(value){
    //value from 0 to 1
    var hue=((1-value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}

Template.place.helpers({
  distance: function() {
    if (!Geolocation.currentLocation()) {
      return '???';
    }
    return geolib.getDistance(Geolocation.currentLocation().coords, this);
  },
  distanceColorStyle: function() {
    var distance = geolib.getDistance(Geolocation.currentLocation().coords, this);
    var getColorFromPercent = function(value){
        //value from 0 to 1
        var hue=((1-value)*120).toString(10);
        return ["background-color: hsl(",hue,",100%,50%)"].join("");
    }
    return getColorFromPercent(distance/1000);
  }
});

// display live current location
Template.coordinates.helpers({
  currentCoordinates: Geolocation.latLng
});
