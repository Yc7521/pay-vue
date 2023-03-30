import request from "@/utils/request";

/**
 *
 * @summary Remove a TradingCode by id if it\'s Finished.
 * @param {string} id
 * @param {*} [options] Override http request option.
 */
export function checkAndRemove(id, options = {}) {
  const path = `/api/code/{id}`.replace(
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
 * @summary Get a TradingCode by id.
 * @param {string} id
 * @param {*} [options] Override http request option.
 */
export function get2(id, options = {}) {
  const path = `/api/code/{id}`.replace(
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
 * @summary List TradingCode by userId.
 * @param {number} userId
 * @param {*} [options] Override http request option.
 */
export function getByUserId(userId, options = {}) {
  const path = `/api/code/user/{userId}`.replace(
    `{${"userId"}}`,
    encodeURIComponent(String(userId))
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
 * @summary Gen id, only test for admin users.
 * @param {*} [options] Override http request option.
 */
export function getId(options = {}) {
  const path = `/api/code/getId`;
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
 * @summary Exist a TradingCode by id.
 * @param {string} id
 * @param {*} [options] Override http request option.
 */
export function has(id, options = {}) {
  const path = `/api/code/has/{id}`.replace(
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
 * @summary List all TradingCode.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 */
export function list2(page = null, size = null, options = {}) {
  const path = `/api/code`;
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
/**
 *
 * @summary Submit a TradingCode.
 * @param {TradingCode} [tradingCode]
 * @param {*} [options] Override http request option.
 */
export function put(tradingCode = null, options = {}) {
  const path = `/api/code`;
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    data: tradingCode,
    ...options,
  });
}
