Deps.autorun(function() {
  if (!Geolocation.latLng()) return;
  console.log("Your location is " + Geolocation.latLng());
  Meteor.subscribe("nearbyPlaces", Geolocation.latLng());
});

// access places collection in view
Template.registerHelper("places", function () {
  return PlacesNearby.find({}).fetch();
});
Template.registerHelper("checkinPlace", function () {
  return Session.get("checkinPlace");
});
Template.registerHelper("roundGeo", function (number) {
  return Number(Math.round(number+'e4')+'e-4');
});

Template.place.helpers({
  isClose: function() {
    return (this.distance < 50);
  },
  distanceColorStyle: function() {
    var getColorFromPercent = function(value){
        //value from 0 to 1
        var hue=((1-value)*120).toString(10);
        return ["background-color: hsl(",hue,",100%,50%)"].join("");
    }
    return getColorFromPercent(this.distance/1000);
  }
});

Template.place.events({
  "click .place button": function (event, template) {
    Session.set("checkinPlace", template.data);
  }
});

// display live current location
Template.coordinates.helpers({
  currentCoordinates: Geolocation.latLng
});
