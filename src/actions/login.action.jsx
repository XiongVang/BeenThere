import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";

export function login(user) {
  const request = axios.post("/", user);
  return {
    type: LOGIN_USER,
    payload: request
  };
}
