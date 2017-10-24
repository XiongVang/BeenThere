export const SET_TRIP_CREATED = "SET_TRIP_CREATED";
export function setTripCreated(bool) {
  return {
    type: SET_TRIP_CREATED,
    payload: bool
  };
}
