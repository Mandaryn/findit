if (Places.find({}).count() === 0) {
  Places.insert({
    name: "Farthest place",
    description: "Lorem ipsum dolor",
    image: 'place_1.jpeg',
    location: {
      type: "Point",
      coordinates: [51.772028, 19.414764]
    }
  });
  Places.insert({
    name: "Farther place",
    description: "Lorem ipsum dolor",
    image: 'place_1.jpeg',
    location: {
      type: "Point",
      coordinates: [51.775801, 19.4133239]
    }
  });
  Places.insert({
    name: "Close place",
    description: "Lorem ipsum dolor",
    image: 'place_1.jpeg',
    location: {
      type: "Point",
      coordinates: [51.777401, 19.4123239]
    }
  });
  Places.insert({
    name: "Right here",
    description: "Lorem ipsum dolor",
    image: 'place_1.jpeg',
    location: {
      type: "Point",
      coordinates: [51.7779007, 19.411222199999997]
    }
  });
}
