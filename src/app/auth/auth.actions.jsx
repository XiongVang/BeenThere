import axios from "axios";

export const AUTHENTICATE = "AUTHENTICATE";
export const USER_LOGOUT = "LOGOUT_USER";
export const USER_LOGIN = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export function authenticate() {
  const request = axios.get("/user");

  return {
    type: AUTHENTICATE,
    payload: request
  };
}

export function logout() {
  const request = axios.get("/user/logout");
  return {
    type: USER_LOGOUT,
    payload: request
  };
}

export function login(user) {
  const request = axios.put("/", user);

  return {
    type: USER_LOGIN,
    payload: request
  };
}

export function register(user) {
  let request = axios.post("/", user);

  return {
    type: REGISTER_USER,
    payload: request
  };
}
