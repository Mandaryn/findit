// define basic places collection client side
var places = new Meteor.Collection(null);
places.insert({ name: "First place", image: 'place_1.jpeg' });
places.insert({ name: "Second place", image: 'place_1.jpeg' });
places.insert({ name: "Third place", image: 'place_1.jpeg' });

// access places collection in view
Template.body.helpers({
  places: places.find({}).fetch()
});

// display live current location
Template.coordinates.helpers({
  currentCoordinates: Geolocation.latLng
});