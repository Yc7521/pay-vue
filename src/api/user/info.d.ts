// @ts-ignore
import { RequestReq } from "../models";
// @ts-ignore
import { RoleRequest } from "../models";
// @ts-ignore
import { TradingCodeVm } from "../models";
// @ts-ignore
import { UserInfo } from "../models";

/**
 *
 * @summary Apply for role.
 * @param {string} role
 * @param {RequestReq} [requestReq]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
declare function applyForRole(
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
declare function changePassword(
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
declare function deleteMe(options?: {}): Promise<object>;

/**
 *
 * @summary Gen payment code.
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
declare function genPaymentCode(options?: {}): Promise<TradingCodeVm>;

/**
 *
 * @summary Gen receipt code.
 * @param {number} [money]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
declare function genReceiptCode(
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
declare function get(id: number, options?: {}): Promise<UserInfo>;

/**
 *
 * @summary Get user info by current user.
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
declare function me(options?: {}): Promise<UserInfo>;

/**
 *
 * @summary Update the nickname of current user.
 * @param {string} nickname
 * @param {*} [options] Override http request option.
 * @memberof ApiUserInfoApiInterface
 */
declare function updateNickname(
  nickname: string,
  options?: {}
): Promise<UserInfo>;
