import axios from "axios";

export const AUTHENTICATION = "AUTHENTICATION";
export const USER_LOGOUT = "LOGOUT_USER";
export const USER_LOGIN = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export function authenticate() {
  const request = axios.get("/auth");

  return {
    type: AUTHENTICATION,
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
  const request = axios.put("/auth", user);

  return {
    type: USER_LOGIN,
    payload: request
  };
}

export function register(user) {
  let request = axios.post("/auth", user);

  return {
    type: REGISTER_USER,
    payload: request
  };
}
