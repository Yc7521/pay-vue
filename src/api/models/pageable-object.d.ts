import { SortObject } from "./sort-object";

/**
 *
 * @interface PageableObject
 */
export interface PageableObject {
  /**
   *
   * @type {SortObject}
   * @memberof PageableObject
   */
  sort?: SortObject;
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  offset?: number;
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  pageNumber?: number;
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  pageSize?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageableObject
   */
  paged?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageableObject
   */
  unpaged?: boolean;
}
