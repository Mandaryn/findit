// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    places: [
      { name: "First place", image: 'place_1.jpeg' },
      { name: "Second place", image: 'place_1.jpeg' },
      { name: "Third place", image: 'place_1.jpeg' }
    ]
  });
}
