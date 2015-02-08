Meteor.publish("nearbyPlaces", function (currentCoordinates) {
  console.log("Query for places near lat: " + currentCoordinates.lat + ", lng: " + currentCoordinates.lng);
  Places._ensureIndex({location: "2dsphere"});
  self = this;
  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

  var pipeline = [{
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [currentCoordinates.lat, currentCoordinates.lng]
      },
      maxDistance: 1000,
      distanceField: "distance",
      spherical: true
    }
  }];

  var nearbyPlaces = Places.aggregate(pipeline);
  _(nearbyPlaces).each(function(place) {
    self.added('placesNearby', Random.id(), {image: place.image, distance: place.distance});
  });
  self.ready();
});
