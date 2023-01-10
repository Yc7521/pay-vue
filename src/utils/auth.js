import { local } from "@/plugins/cache";

const TokenKey = "Admin-Token";

/**
 * get token
 * @returns {string} token, or null if the given key does not exist.
 */
export function getToken() {
  return local.get(TokenKey);
}

/**
 * set token
 * @param {string} token token
 */
export function setToken(token) {
  return local.set(TokenKey, token);
}

export function removeToken() {
  return local.remove(TokenKey);
}
