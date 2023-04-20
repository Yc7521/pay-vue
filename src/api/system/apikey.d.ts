/**
 *
 * @summary Create a SecretKey.
 * @param {number} id
 * @param {SecretKey} [secretKey]
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
declare function create(
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
declare function createForMe(
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
declare function deleteSecretKey(key: string, options?: {}): Promise<object>;

/**
 *
 * @summary Test for admin.
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
declare function generateSecretKeyTest(options?: {}): Promise<string>;

/**
 *
 * @summary Get a SecretKey by id.
 * @param {string} key
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
declare function getSecretKey(key: string, options?: {}): Promise<SecretKey>;

/**
 *
 * @summary Get a SecretKey by user id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiApiKeyRequestApiInterface
 */
declare function getSecretKeyByUserId(
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
declare function listSecretKey(
  page?: number,
  size?: number,
  options?: {}
): Promise<PageSecretKey>;
