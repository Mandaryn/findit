Meteor.publish("nearbyPlaces", function () {
  Mongo.Collection._publishCursor( Places.find(), this, 'placesNearby');
  this.ready();
});
