// simple-todos.js
if (Meteor.isClient) {
  // define basic places collection client side
  var places = new Meteor.Collection(null);
  places.insert({ name: "First place", image: 'place_1.jpeg' });
  places.insert({ name: "Second place", image: 'place_1.jpeg' });
  places.insert({ name: "Third place", image: 'place_1.jpeg' });

  // access places collection in view
  Template.body.helpers({
    places: places.find({}).fetch()
  });

  // add callback to geolocation api
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  // display geoposition in site heading
  function showPosition(position) {
    $('.latitude').html(position.coords.latitude);
    $('.longitude').html(position.coords.longitude);
  };
  getLocation();
};
