/* tslint:disable */
/* eslint-disable */
/**
 * pay
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
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
   * @type {string}
   * @memberof UserInfo
   */
  nickname?: string;
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
  /**
   *
   * @type {boolean}
   * @memberof UserInfo
   */
  deleted?: boolean;
}

export const UserInfoUserTypeEnum = {
  Personal: "Personal",
  Business: "Business",
  Admin: "Admin",
} as const;

export type UserInfoUserTypeEnum =
  (typeof UserInfoUserTypeEnum)[keyof typeof UserInfoUserTypeEnum];
