import { UserInfo } from "./user-info";

/**
 *
 * @interface PayInfo
 */
export interface PayInfo {
  /**
   *
   * @type {number}
   * @memberof PayInfo
   */
  id?: number;
  /**
   *
   * @type {UserInfo}
   * @memberof PayInfo
   */
  payingUser?: UserInfo;
  /**
   *
   * @type {UserInfo}
   * @memberof PayInfo
   */
  receivingUser?: UserInfo;
  /**
   *
   * @type {string}
   * @memberof PayInfo
   */
  state?: PayInfoStateEnum;
  /**
   *
   * @type {number}
   * @memberof PayInfo
   */
  money?: number;
  /**
   *
   * @type {string}
   * @memberof PayInfo
   */
  create?: string;
  /**
   *
   * @type {string}
   * @memberof PayInfo
   */
  finish?: string;
  /**
   *
   * @type {string}
   * @memberof PayInfo
   */
  goodsInfo?: string;
  /**
   *
   * @type {string}
   * @memberof PayInfo
   */
  goodsType?: string;
  /**
   *
   * @type {string}
   * @memberof PayInfo
   */
  remarks?: string;
}

/**
 * @enum {string}
 */
export enum PayInfoStateEnum {
  /* eslint-disable no-unused-vars */
  Unpaid = "Unpaid",
  /* eslint-disable no-unused-vars */
  Paid = "Paid",
  /* eslint-disable no-unused-vars */
  Cancelled = "Cancelled",
  /* eslint-disable no-unused-vars */
  Refunded = "Refunded",
}
