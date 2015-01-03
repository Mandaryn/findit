if (Places.find({}).count() === 0) {
  Places.insert({ name: "Farthest place", image: 'place_1.jpeg', latitude: 51.772028, longitude: 19.414764 });
  Places.insert({ name: "Farther place", image: 'place_1.jpeg', latitude: 51.775801, longitude: 19.4133239 });
  Places.insert({ name: "Close place", image: 'place_1.jpeg', latitude: 51.777401, longitude: 19.4123239 });
  Places.insert({ name: "Right here", image: 'place_1.jpeg', latitude: 51.7779007, longitude: 19.411222199999997 });
}
