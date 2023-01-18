/**
 *
 * @interface TradingCodeVm
 */
export interface TradingCodeVm {
  /**
   *
   * @type {number}
   * @memberof TradingCodeVm
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof TradingCodeVm
   */
  userInfoId?: number;
  /**
   *
   * @type {string}
   * @memberof TradingCodeVm
   */
  tradingType?: TradingCodeVmTradingTypeEnum;
  /**
   *
   * @type {number}
   * @memberof TradingCodeVm
   */
  money?: number;
}

/**
 * @enum {string}
 */
export enum TradingCodeVmTradingTypeEnum {
  /* eslint-disable no-unused-vars */
  Receipt = "Receipt",
  /* eslint-disable no-unused-vars */
  Payment = "Payment",
}
