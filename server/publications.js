Meteor.publish("nearbyPlaces", function () {
  Mongo.Collection._publishCursor( Places.find({}, {fields: {image: 1}}), this, 'placesNearby');
  this.ready();
});
