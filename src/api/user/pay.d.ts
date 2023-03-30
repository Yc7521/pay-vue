// @ts-ignore
import { PagePayInfo } from "../models";
// @ts-ignore
import { PayInfo } from "../models";
// @ts-ignore
import { PayVm } from "../models";

/**
 * Update PayInfo to cancel this payment
 * @summary Cancel.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
declare function cancel(id: number, options?: {}): Promise<PayInfo>;

/**
 *
 * @summary /api/user/me/pay/code/{codeId}/cancel
 * @param {string} codeId
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
declare function cancelWithCode(codeId: string, options?: {}): Promise<PayInfo>;

/**
 * Pay to user
 * @summary Create PayInfo by userId.
 * @param {PayVm} [payVm]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
declare function createPayment(payVm?: PayVm, options?: {}): Promise<PayInfo>;

/**
 *
 * @summary /api/user/me/pay/code/{codeId}
 * @param {string} codeId
 * @param {number} [money]
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
declare function createPaymentWithCode(
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
declare function list(
  page?: number,
  size?: number,
  options?: {}
): Promise<PagePayInfo>;

/**
 * Update PayInfo and UserInfo to finish this payment
 * @summary Pay.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
declare function pay(id: number, options?: {}): Promise<PayInfo>;

/**
 *
 * @summary /api/user/me/pay/code/{codeId}
 * @param {string} codeId
 * @param {*} [options] Override http request option.
 * @memberof ApiUserPayApiInterface
 */
declare function payWithCode(codeId: string, options?: {}): Promise<PayInfo>;
