import request from "@/utils/request";

/**
 *
 * @summary Apply for role.
 * @param {string} role
 * @param {RoleReq} [roleReq]
 * @param {*} [options] Override http request option.
 */
export function applyForRole(role, roleReq = null, options = {}) {
  const path = `/api/user/me/to/{role}`.replace(
    `{${"role"}}`,
    encodeURIComponent(String(role))
  );
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    data: roleReq,
    ...options,
  });
}

/**
 *
 * @summary Update the nickname of current user.
 * @param {string} nickname
 * @param {*} [options] Override http request option.
 */
export function changeNickname(nickname, options = {}) {
  const path = `/api/user/me`;
  const params = {
    nickname,
  };

  return request({
    url: path,
    method: "PUT",
    params,
    ...options,
  });
}

/**
 *
 * @summary Change the password of current user.
 * @param {string} oldPassword
 * @param {string} newPassword
 * @param {*} [options] Override http request option.
 */
export function changePassword(oldPassword, newPassword, options = {}) {
  const path = `/api/user/me/password`;
  const params = {
    oldPassword,
    newPassword,
  };

  return request({
    url: path,
    method: "PUT",
    params,
    ...options,
  });
}

/**
 *
 * @summary Delete current user.
 * @param {*} [options] Override http request option.
 */
export function deleteMe(options = {}) {
  const path = `/api/user/me`;
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
 * @summary Gen payment code.
 * @param {*} [options] Override http request option.
 */
export function genPaymentCode(options = {}) {
  const path = `/api/user/me/payment-code`;
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
 * @summary Gen receipt code.
 * @param {number} [money]
 * @param {*} [options] Override http request option.
 */
export function genReceiptCode(money = null, options = {}) {
  const path = `/api/user/me/receipt-code`;
  const params = {
    money,
  };

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}

/**
 *
 * @summary Get user info by user id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 */
export function getUserInfo(id, options = {}) {
  const path = `/api/user/{id}`.replace(
    `{${"id"}}`,
    encodeURIComponent(String(id))
  );
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
 * @summary Get user info by current user.
 * @param {*} [options] Override http request option.
 */
export function me(options = {}) {
  const path = `/api/user/me`;
  const params = {};

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}
