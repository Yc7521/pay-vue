import { PageableObject } from "./pageable-object";
import { PayInfo } from "./pay-info";
import { SortObject } from "./sort-object";

/**
 *
 * @interface PagePayInfo
 */
export interface PagePayInfo {
  /**
   *
   * @type {number}
   * @memberof PagePayInfo
   */
  totalPages?: number;
  /**
   *
   * @type {number}
   * @memberof PagePayInfo
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PagePayInfo
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PagePayInfo
   */
  sort?: SortObject;
  /**
   *
   * @type {number}
   * @memberof PagePayInfo
   */
  size?: number;
  /**
   *
   * @type {Array<PayInfo>}
   * @memberof PagePayInfo
   */
  content?: Array<PayInfo>;
  /**
   *
   * @type {PageableObject}
   * @memberof PagePayInfo
   */
  pageable?: PageableObject;
  /**
   *
   * @type {boolean}
   * @memberof PagePayInfo
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PagePayInfo
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PagePayInfo
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PagePayInfo
   */
  empty?: boolean;
}
