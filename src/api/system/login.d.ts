// @ts-ignore
import { LoginRes } from "../models";
// @ts-ignore
import { LoginVm } from "../models";
// @ts-ignore
import { UserAccount } from "../models";

/**
 *
 * @summary Delete user.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiSystemApiInterface
 */
declare function _delete(id: number, options?: {}): Promise<object>;

/**
 *
 * @summary Login.
 * @param {LoginVm} [loginVm]
 * @param {*} [options] Override http request option.
 * @memberof ApiSystemApiInterface
 */
declare function login(loginVm?: LoginVm, options?: {}): Promise<LoginRes>;

/**
 *
 * @summary Logout.
 * @param {*} [options] Override http request option.
 * @memberof ApiSystemApiInterface
 */
declare function logout(options?: {}): Promise<string>;

/**
 *
 * @summary Register.
 * @param {LoginVm} [loginVm]
 * @param {*} [options] Override http request option.
 * @memberof ApiSystemApiInterface
 */
declare function register(
  loginVm?: LoginVm,
  options?: {}
): Promise<UserAccount>;
