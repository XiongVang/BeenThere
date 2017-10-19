import axios from "axios";

export const REGISTER_USER = "REGISTER_USER";

export function register(user) {
  let request = axios.post("/register", user);

  return {
    type: REGISTER_USER,
    payload: request
  };
}
