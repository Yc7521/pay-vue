/**
 *
 * @interface TradingCode
 */
export interface TradingCode {
  /**
   *
   * @type {number}
   * @memberof TradingCode
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof TradingCode
   */
  userInfoId?: number;
  /**
   *
   * @type {string}
   * @memberof TradingCode
   */
  tradingType?: TradingCodeTradingTypeEnum;
  /**
   *
   * @type {number}
   * @memberof TradingCode
   */
  money?: number;
  /**
   *
   * @type {string}
   * @memberof TradingCode
   */
  create?: string;
  /**
   *
   * @type {string}
   * @memberof TradingCode
   */
  state?: TradingCodeStateEnum;
  /**
   *
   * @type {number}
   * @memberof TradingCode
   */
  payId?: number;
}

/**
 * @enum {string}
 */
export enum TradingCodeTradingTypeEnum {
  /* eslint-disable no-unused-vars */
  Receipt = "Receipt",
  /* eslint-disable no-unused-vars */
  Payment = "Payment",
}
/**
 * @enum {string}
 */
export enum TradingCodeStateEnum {
  /* eslint-disable no-unused-vars */
  NotNotified = "NotNotified",
  /* eslint-disable no-unused-vars */
  Created = "Created",
  /* eslint-disable no-unused-vars */
  Finished = "Finished",
  /* eslint-disable no-unused-vars */
  Canceled = "Canceled",
}
