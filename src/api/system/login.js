import request from "@/utils/request";

/**
 *
 * @summary Delete user.
 * @param {number} id
 * @param {*} [options] Override http request option.
 */
export function deleteUser(id, options = {}) {
  const path = `/api/user/{id}`.replace(
    `{${"id"}}`,
    encodeURIComponent(String(id))
  );
  const params = {};

  return request({
    url: path,
    method: "DELETE",
    params,
    ...options,
  });
}

/**
 *
 * @summary Login.
 * @param {LoginVm | SecretLoginVm} [loginVmSecretLoginVm]
 * @param {*} [options] Override http request option.
 */
export function login(loginVmSecretLoginVm = null, options = {}) {
  const path = `/api/login`;
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    data: loginVmSecretLoginVm,
    ...options,
  });
}

/**
 *
 * @summary Logout.
 * @param {*} [options] Override http request option.
 */
export function logout(options = {}) {
  const path = `/api/logout`;
  const params = {};

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}

/**
 *
 * @summary Register.
 * @param {LoginVm} [loginVm]
 * @param {*} [options] Override http request option.
 */
export function register(loginVm = null, options = {}) {
  const path = `/api/register`;
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    data: loginVm,
    ...options,
  });
}
