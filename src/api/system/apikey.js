import request from "@/utils/request";

/**
 *
 * @summary Create a SecretKey.
 * @param {number} id
 * @param {SecretKey} [secretKey]
 * @param {*} [options] Override http request option.
 */
export function createApiKey(id, secretKey = null, options = {}) {
  const path = `/api/request/secret/user/{id}`.replace(
    `{${"id"}}`,
    encodeURIComponent(String(id))
  );
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    data: secretKey,
    ...options,
  });
}

/**
 *
 * @summary Create a SecretKey for current user.
 * @param {SecretReqVm} [secretReqVm]
 * @param {*} [options] Override http request option.
 */
export function createApiKeyForMe(secretReqVm = null, options = {}) {
  const path = `/api/request/secret/user/me`;
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    data: secretReqVm,
    ...options,
  });
}

/**
 *
 * @summary Delete a SecretKey by key.
 * @param {string} key
 * @param {*} [options] Override http request option.
 */
export function deleteApiKey(key, options = {}) {
  const path = `/api/request/secret/{key}`.replace(
    `{${"key"}}`,
    encodeURIComponent(String(key))
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
 * @summary Test for admin.
 * @param {*} [options] Override http request option.
 * @deprecated
 */
export function generateSecretKeyTest(options = {}) {
  const path = `/api/request/secret/test`;
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
 * @summary Get a SecretKey by id.
 * @param {string} key
 * @param {*} [options] Override http request option.
 */
export function getApiKey(key, options = {}) {
  const path = `/api/request/secret/{key}`.replace(
    `{${"key"}}`,
    encodeURIComponent(String(key))
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
 * @summary List SecretKeys by user id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 */
export function getApiKeyByUserId(id, options = {}) {
  const path = `/api/request/secret/user/{id}`.replace(
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
 * @summary List all SecretKey.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 */
export function listApiKey(page = null, size = null, options = {}) {
  const path = `/api/request/secret`;
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
 * @summary List SecretKeys for current user.
 * @param {*} [options] Override http request option.
 */
export function listApiKeyForMe(options = {}) {
  const path = `/api/request/secret/user/me`;
  const params = {};

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}
