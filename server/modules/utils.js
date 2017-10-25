module.exports = {
  findMatchedTrip: function(id, arrayOfTripsObject) {
    for (let i = 0; i < arrayOfTripsObject.length; i++) {
      let trips = arrayOfTripsObject[i].trips;
      for (let j = 0; j < trips.length; j++) {
        if (trips[j]._id == id) {
          return trips[j];
        }
      }
    }
  }
};
