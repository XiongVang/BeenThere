import axios from "axios";

export const CREATE_TRIP = "CREATE_TRIP";
export const GET_USER = "GET_USER";

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

export function getUser() {
  let request = axios.get("/user");

  return {
    type: GET_USER,
    payload: request
  };
}
