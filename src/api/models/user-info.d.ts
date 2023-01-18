/**
 *
 * @interface UserInfo
 */
export interface UserInfo {
  /**
   *
   * @type {number}
   * @memberof UserInfo
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof UserInfo
   */
  money?: number;
  /**
   *
   * @type {boolean}
   * @memberof UserInfo
   */
  credible?: boolean;
  /**
   *
   * @type {string}
   * @memberof UserInfo
   */
  userType?: UserInfoUserTypeEnum;
}

/**
 * @enum {string}
 */
export enum UserInfoUserTypeEnum {
  /* eslint-disable no-unused-vars */
  Personal = "Personal",
  /* eslint-disable no-unused-vars */
  Business = "Business",
  /* eslint-disable no-unused-vars */
  Admin = "Admin",
}
