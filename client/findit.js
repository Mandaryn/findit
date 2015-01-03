Meteor.subscribe("places");

// access places collection in view
Template.registerHelper("places", function () {
  return Places.find({}).fetch();
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
