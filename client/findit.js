// define basic places collection client side
var places = new Meteor.Collection(null);
places.insert({ name: "Close place", image: 'place_1.jpeg', latitude: 51.777401, longitude: 19.4123239 });
places.insert({ name: "Farther place", image: 'place_1.jpeg', latitude: 51.775801, longitude: 19.4133239 });
places.insert({ name: "Farthest place", image: 'place_1.jpeg', latitude: 51.772028, longitude: 19.414764 });

// access places collection in view
Template.body.helpers({
  places: places.find({}).fetch()
});

Template.place.helpers({
  distance: function() {
    if (!Geolocation.currentLocation()) {
      return '???';
    }
    return geolib.getDistance(Geolocation.currentLocation().coords, this);
  }
});

// display live current location
Template.coordinates.helpers({
  currentCoordinates: Geolocation.latLng
});