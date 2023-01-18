import { PageableObject } from "./pageable-object";
import { SortObject } from "./sort-object";
import { TradingCode } from "./trading-code";

/**
 *
 * @interface PageTradingCode
 */
export interface PageTradingCode {
  /**
   *
   * @type {number}
   * @memberof PageTradingCode
   */
  totalPages?: number;
  /**
   *
   * @type {number}
   * @memberof PageTradingCode
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageTradingCode
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageTradingCode
   */
  sort?: SortObject;
  /**
   *
   * @type {number}
   * @memberof PageTradingCode
   */
  size?: number;
  /**
   *
   * @type {Array<TradingCode>}
   * @memberof PageTradingCode
   */
  content?: Array<TradingCode>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageTradingCode
   */
  pageable?: PageableObject;
  /**
   *
   * @type {boolean}
   * @memberof PageTradingCode
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageTradingCode
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageTradingCode
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageTradingCode
   */
  empty?: boolean;
}
