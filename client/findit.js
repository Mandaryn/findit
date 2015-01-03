Meteor.subscribe("nearbyPlaces");

// access places collection in view
Template.registerHelper("places", function () {
  return PlacesNearby.find({}).fetch();
});
Template.registerHelper("roundGeo", function (number) {
  return Number(Math.round(number+'e4')+'e-4');
});

Template.place.helpers({
  distanceColorStyle: function() {
    var getColorFromPercent = function(value){
        //value from 0 to 1
        var hue=((1-value)*120).toString(10);
        return ["background-color: hsl(",hue,",100%,50%)"].join("");
    }
    return getColorFromPercent(this.distance/1000);
  },
});

// display live current location
Template.coordinates.helpers({
  currentCoordinates: Geolocation.latLng
});
