Meteor.publish("nearbyPlaces", function () {
  Places._ensureIndex({location: "2dsphere"});
  self = this;
  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

  var pipeline = [{
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [51.772028,19.414764]
      },
      distanceField: "distance",
      spherical: true
    }
  }];

  var nearbyPlaces = Places.aggregate(pipeline);
  _(nearbyPlaces).each(function(place) {
    console.log(place.image);
    self.added('placesNearby', Random.id(), {image: place.image, distance: place.distance});
  });
  self.ready();
});
