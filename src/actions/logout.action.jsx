import axios from "axios";

export const LOGOUT_USER = "LOGOUT_USER";

export function logout() {
  const request = axios.get("/user/logout");
  return {
    type: LOGOUT_USER,
    payload: request
  };
}
