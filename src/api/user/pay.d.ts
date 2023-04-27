// @ts-ignore
import { PagePayInfo, PayInfo, PayVm } from "../models";

/**
 * Update PayInfo to cancel this payment
 * @summary Cancel.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
export declare function cancelPay(id: number, options?: {}): Promise<PayInfo>;

/**
 * Update PayInfo to cancel this payment by trading code
 * @summary Cancel.
 * @param {string} codeId
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
export declare function cancelPayCode(
  codeId: string,
  options?: {}
): Promise<PayInfo>;

/**
 * Update PayInfo and UserInfo to finish this payment
 * @summary Pay.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
export declare function confirmPay(id: number, options?: {}): Promise<PayInfo>;

/**
 * Update PayInfo and UserInfo to finish this payment by trading code
 * @summary Pay.
 * @param {string} codeId
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
export declare function confirmPayCode(
  codeId: string,
  options?: {}
): Promise<PayInfo>;

/**
 * Pay to user
 * @summary Create PayInfo by userId.
 * @param {PayVm} [payVm]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
export declare function createPayToUser(
  payVm?: PayVm,
  options?: {}
): Promise<PayInfo>;

/**
 * Pay to user
 * @summary Create PayInfo with trading code.
 * @param {string} codeId
 * @param {number} [money]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
export declare function createPayWithCode(
  codeId: string,
  money?: number,
  options?: {}
): Promise<PayInfo>;

/**
 *
 * @summary List all PayInfo.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
export declare function listPayInfo(
  page?: number,
  size?: number,
  options?: {}
): Promise<PagePayInfo>;
