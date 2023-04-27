import request from "@/utils/request";

/**
 * Update PayInfo to cancel this payment
 * @summary Cancel.
 * @param {number} id
 * @param {*} [options] Override http request option.
 */
export function cancelPay(id, options = {}) {
  const path = `/api/user/me/pay/{id}/cancel`.replace(
    `{${"id"}}`,
    encodeURIComponent(String(id))
  );
  const params = {};

  return request({
    url: path,
    method: "PUT",
    params,
    ...options,
  });
}

/**
 * Update PayInfo to cancel this payment by trading code
 * @summary Cancel.
 * @param {string} codeId
 * @param {*} [options] Override http request option.
 */
export function cancelPayCode(codeId, options = {}) {
  const path = `/api/user/me/pay/code/{codeId}/cancel`.replace(
    `{${"codeId"}}`,
    encodeURIComponent(String(codeId))
  );
  const params = {};

  return request({
    url: path,
    method: "PUT",
    params,
    ...options,
  });
}

/**
 * Update PayInfo and UserInfo to finish this payment
 * @summary Pay.
 * @param {number} id
 * @param {*} [options] Override http request option.
 */
export function confirmPay(id, options = {}) {
  const path = `/api/user/me/pay/{id}`.replace(
    `{${"id"}}`,
    encodeURIComponent(String(id))
  );
  const params = {};

  return request({
    url: path,
    method: "PUT",
    params,
    ...options,
  });
}

/**
 * Update PayInfo and UserInfo to finish this payment by trading code
 * @summary Pay.
 * @param {string} codeId
 * @param {*} [options] Override http request option.
 */
export function confirmPayCode(codeId, options = {}) {
  const path = `/api/user/me/pay/code/{codeId}`.replace(
    `{${"codeId"}}`,
    encodeURIComponent(String(codeId))
  );
  const params = {};

  return request({
    url: path,
    method: "PUT",
    params,
    ...options,
  });
}

/**
 * Pay to user
 * @summary Create PayInfo by userId.
 * @param {PayVm} [payVm]
 * @param {*} [options] Override http request option.
 */
export function createPayToUser(payVm = null, options = {}) {
  const path = `/api/user/me/pay/user`;
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    data: payVm,
    ...options,
  });
}

/**
 * Pay to user
 * @summary Create PayInfo with trading code.
 * @param {string} codeId
 * @param {number} [money]
 * @param {*} [options] Override http request option.
 */
export function createPayWithCode(codeId, money = null, options = {}) {
  const path = `/api/user/me/pay/code/{codeId}`.replace(
    `{${"codeId"}}`,
    encodeURIComponent(String(codeId))
  );
  const params = {
    money,
  };

  return request({
    url: path,
    method: "POST",
    params,
    ...options,
  });
}

/**
 *
 * @summary List all PayInfo.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 */
export function listPayInfo(page = null, size = null, options = {}) {
  const path = `/api/user/me/pay`;
  const params = {
    page,
    size,
  };

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}
