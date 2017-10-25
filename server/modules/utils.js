/**
 * 
 * @param {[trips:[]]} arrayOfTripsObject 
 * @param {string} id 
 */
function findTripById(id, arrayOfTripsObject) {
  for (let i = 0; i < arrayOfTripsObject.length; i++) {
    let trips = arrayOfTripsObject[i].trips;

    let matchedTrip = trips.find(trip => {
      return trip._id == id;
    });

    if (matchedTrip !== undefined) {
      return matchedTrip;
    }
  }
}

module.exports = {
  findTripById: findTripById
};
