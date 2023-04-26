// @ts-ignore
import { RequestReq, RoleRequest, TradingCodeVm, UserInfo } from "../models";

/**
 *
 * @summary Apply for role.
 * @param {string} role
 * @param {RequestReq} [requestReq]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
export declare function applyForRole(
  role: string,
  requestReq?: RequestReq,
  options?: {}
): Promise<RoleRequest>;

/**
 *
 * @summary Change the password of current user.
 * @param {string} oldPassword
 * @param {string} newPassword
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
export declare function changePassword(
  oldPassword: string,
  newPassword: string,
  options?: {}
): Promise<object>;

/**
 *
 * @summary Delete current user.
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
export declare function deleteMe(options?: {}): Promise<object>;

/**
 *
 * @summary Gen payment code.
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
export declare function genPaymentCode(options?: {}): Promise<TradingCodeVm>;

/**
 *
 * @summary Gen receipt code.
 * @param {number} [money]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
export declare function genReceiptCode(
  money?: number,
  options?: {}
): Promise<TradingCodeVm>;

/**
 *
 * @summary Get user info by user id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
export declare function getInfo(id: number, options?: {}): Promise<UserInfo>;

/**
 *
 * @summary Get user info by current user.
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
export declare function me(options?: {}): Promise<UserInfo>;

/**
 *
 * @summary Update the nickname of current user.
 * @param {string} nickname
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
export declare function updateNickname(
  nickname: string,
  options?: {}
): Promise<UserInfo>;
