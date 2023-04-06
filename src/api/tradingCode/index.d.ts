// @ts-ignore
import { PageTradingCodeVm } from "../models";
// @ts-ignore
import { TradingCode } from "../models";
// @ts-ignore
import { TradingCodeVm } from "../models";

/**
 *
 * @summary Remove a TradingCode by id if it\'s Finished.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function checkAndRemove(id: number, options?: {}): Promise<object>;

/**
 *
 * @summary Get a TradingCode by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function get2(id: number, options?: {}): Promise<TradingCode>;

/**
 *
 * @summary List TradingCode by userId.
 * @param {number} userId
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function getByUserId(
  userId: number,
  options?: {}
): Promise<TradingCodeVm>;

/**
 *
 * @summary Gen id, only test for admin users.
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function getId(options?: {}): Promise<number>;

/**
 *
 * @summary Remove a TradingCode by id if it\'s Finished.
 * @param {string} id
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function checkAndRemove(id: string, options?: {}): Promise<object>;

/**
 *
 * @summary Get a TradingCode by id.
 * @param {string} id
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function get2(id: string, options?: {}): Promise<TradingCode>;

/**
 *
 * @summary List TradingCode by userId.
 * @param {number} userId
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function getByUserId(
  userId: number,
  options?: {}
): Promise<TradingCodeVm>;

/**
 *
 * @summary Gen id, only test for admin users.
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function getId(options?: {}): Promise<number>;

/**
 *
 * @summary Exist a TradingCode by id.
 * @param {string} id
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function has(id: string, options?: {}): Promise<object>;

/**
 *
 * @summary List all TradingCode.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 * @memberof ApiTradingCodeApiInterface
 */
declare function list2(
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
declare function put(
  tradingCode?: TradingCode,
  options?: {}
): Promise<TradingCodeVm>;
