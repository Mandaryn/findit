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

Template.place.helpers({
  distance: function() {
    if (!Geolocation.currentLocation()) {
      return '???';
    }
    return geolib.getDistance(Geolocation.currentLocation().coords, this);
  },
  distanceClass: function() {
    var distance = geolib.getDistance(Geolocation.currentLocation().coords, this);
    switch (true) {
      case (distance < 100):
        return "close";
      case (distance < 500):
        return "medium";
      case (distance < 1000):
        return "far";
      default:
        return "out_of_range";
    };
  }
});

// display live current location
Template.coordinates.helpers({
  currentCoordinates: Geolocation.latLng
});

Router.configure({
  loadingTemplate: 'loading',
  layoutTemplate: 'mainLayout'
});

Router.route('/', function () {
  this.render('findit');
});

Router.route('/faq', function () {
  this.render('faq');
});