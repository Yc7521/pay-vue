import { PageSecretKey, SecretKey, SecretReqVm } from "../models";

/**
 *
 * @summary Create a SecretKey.
 * @param {number} id
 * @param {SecretKey} [secretKey]
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
export declare function createApiKey(
  id: number,
  secretKey?: SecretKey,
  options?: {}
): Promise<SecretKey>;

/**
 *
 * @summary Create a SecretKey for current user.
 * @param {SecretReqVm} [secretReqVm]
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
export declare function createApiKeyForMe(
  secretReqVm?: SecretReqVm,
  options?: {}
): Promise<SecretKey>;

/**
 *
 * @summary Delete a SecretKey by key.
 * @param {string} key
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
export declare function deleteApiKey(
  key: string,
  options?: {}
): Promise<object>;

/**
 *
 * @summary Test for admin.
 * @param {*} [options] Override http request option.
 * @deprecated
 * @memberof ApiApiKeyRequestApiInterface
 */
export declare function generateSecretKeyTest(options?: {}): Promise<string>;

/**
 *
 * @summary Get a SecretKey by id.
 * @param {string} key
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
export declare function getApiKey(
  key: string,
  options?: {}
): Promise<SecretKey>;

/**
 *
 * @summary List SecretKeys by user id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
export declare function getApiKeyByUserId(
  id: number,
  options?: {}
): Promise<Array<SecretKey>>;

/**
 *
 * @summary List all SecretKey.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
export declare function listApiKey(
  page?: number,
  size?: number,
  options?: {}
): Promise<PageSecretKey>;

/**
 *
 * @summary List SecretKeys for current user.
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
export declare function listApiKeyForMe(options?: {}): Promise<
  Array<SecretKey>
>;
