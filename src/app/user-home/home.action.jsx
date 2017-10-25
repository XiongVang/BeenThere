import axios from "axios";

export const CREATE_TRIP = "CREATE_TRIP";
export const FETCH_USER = "FETCH_USER";

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

export function fetchUser() {
  let request = axios.get("/user");

  return {
    type: FETCH_USER,
    payload: request
  };
}
