import axios from "axios";

export const CREATE_TRIP = "CREATE_TRIP";
export const FETCH_USER = "FETCH_USER";
export const SET_DETAILS = "SET_DETAILS";

// create new trip
/**
 * 
 * @param {title: string, startDate: date, endDate: date} trip 
 */
export function createTrip(trip) {
  let request = axios.post("/user/create/trip", trip);

  return {
    type: CREATE_TRIP,
    payload: request
  };
}

// get all trips
export function fetchUser() {
  let request = axios.get("/user");

  return {
    type: FETCH_USER,
    payload: request
  };
}

export function setDetails(tripId) {
  return {
    type: SET_DETAILS,
    payload: tripId
  };
}
