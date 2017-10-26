import axios from "axios";

export const AUTHENTICATION = "AUTHENTICATION";
export const USER_LOGOUT = "LOGOUT_USER";
export const USER_LOGIN = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export function authenticate() {
  console.log("***> AUTHENTICATION ACTION<***");
  const request = axios.get("/auth");
  return {
    type: AUTHENTICATION,
    payload: request
  };
}

export function logout() {
  console.log("***> LOGOUT_USER ACTION<***");
  const request = axios.get("/user/logout");
  return {
    type: USER_LOGOUT,
    payload: request
  };
}

/**
 * 
 * @param {username: string, password: string} user 
 */
export function login(user) {
  console.log("***> LOGIN_USER ACTION<***");
  const request = axios.put("/auth", user);

  return {
    type: USER_LOGIN,
    payload: request
  };
}

/**
 * 
 * @param {username: string, password: string} user 
 */
export function register(user) {
  console.log("auth.action register() user:", user);
  let request = axios.post("/auth", user);

  return {
    type: REGISTER_USER,
    payload: request
  };
}
