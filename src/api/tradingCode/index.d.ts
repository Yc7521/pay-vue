// @ts-ignore
import { PageTradingCodeVm, TradingCode, TradingCodeVm } from "../models";

/**
 *
 * @summary Remove a TradingCode by id if it\'s Finished.
 * @param {string} id
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
export declare function checkAndRemove(
  id: string,
  options?: {}
): Promise<object>;

/**
 *
 * @summary Get a TradingCode by id.
 * @param {string} id
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
export declare function getTradingCode(
  id: string,
  options?: {}
): Promise<TradingCode>;

/**
 *
 * @summary List TradingCode by userId.
 * @param {number} userId
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
export declare function getTradingCodeByUserId(
  userId: number,
  options?: {}
): Promise<TradingCodeVm>;

/**
 *
 * @summary Gen id, only test for admin users.
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
export declare function getId(options?: {}): Promise<number>;

/**
 *
 * @summary Exist a TradingCode by id.
 * @param {string} id
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
export declare function has(id: string, options?: {}): Promise<object>;

/**
 *
 * @summary List all TradingCode.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
export declare function listTradingCode(
  page?: number,
  size?: number,
  options?: {}
): Promise<PageTradingCodeVm>;

/**
 *
 * @summary Submit a TradingCode.
 * @param {TradingCode} [tradingCode]
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
export declare function put(
  tradingCode?: TradingCode,
  options?: {}
): Promise<TradingCodeVm>;
