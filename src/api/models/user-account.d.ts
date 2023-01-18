import { UserInfo } from "./user-info";

/**
 *
 * @interface UserAccount
 */
export interface UserAccount {
  /**
   *
   * @type {number}
   * @memberof UserAccount
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof UserAccount
   */
  username?: string;
  /**
   *
   * @type {string}
   * @memberof UserAccount
   */
  password?: string;
  /**
   *
   * @type {UserInfo}
   * @memberof UserAccount
   */
  userInfo?: UserInfo;
}
