export const SET_IS_REGISTERED = "SET_IS_REGISTERED";
export function setIsRegistered(bool) {
  return {
    type: SET_IS_REGISTERED,
    payload: bool
  };
}
