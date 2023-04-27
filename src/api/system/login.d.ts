// @ts-ignore
import { LoginRes, LoginVm, UserAccount, SecretLoginVm } from "../models";

/**
 *
 * @summary Delete user.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiSystemApiInterface
 */
export declare function deleteUser(id: number, options?: {}): Promise<object>;

/**
 *
 * @summary Login.
 * @param {LoginVm | SecretLoginVm} [loginVmSecretLoginVm]
 * @param {*} [options] Override http request option.
 * @memberof ApiSystemApiInterface
 */
export declare function login(
  loginVmSecretLoginVm?: LoginVm | SecretLoginVm,
  options?: {}
): Promise<LoginRes>;

/**
 *
 * @summary Logout.
 * @param {*} [options] Override http request option.
 * @memberof ApiSystemApiInterface
 */
export declare function logout(options?: {}): Promise<string>;

/**
 *
 * @summary Register.
 * @param {LoginVm} [loginVm]
 * @param {*} [options] Override http request option.
 * @memberof ApiSystemApiInterface
 */
export declare function register(
  loginVm?: LoginVm,
  options?: {}
): Promise<UserAccount>;
