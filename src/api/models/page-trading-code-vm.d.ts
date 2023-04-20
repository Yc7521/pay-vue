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


// May contain unused imports in some cases
// @ts-ignore
import { PageableObject } from './pageable-object';
// May contain unused imports in some cases
// @ts-ignore
import { SortObject } from './sort-object';
// May contain unused imports in some cases
// @ts-ignore
import { TradingCodeVm } from './trading-code-vm';

/**
 * 
 * @export
 * @interface PageTradingCodeVm
 */
export interface PageTradingCodeVm {
    /**
     * 
     * @type {number}
     * @memberof PageTradingCodeVm
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageTradingCodeVm
     */
    'totalElements'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageTradingCodeVm
     */
    'size'?: number;
    /**
     * 
     * @type {Array<TradingCodeVm>}
     * @memberof PageTradingCodeVm
     */
    'content'?: Array<TradingCodeVm>;
    /**
     * 
     * @type {number}
     * @memberof PageTradingCodeVm
     */
    'number'?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageTradingCodeVm
     */
    'sort'?: SortObject;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageTradingCodeVm
     */
    'pageable'?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageTradingCodeVm
     */
    'first'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageTradingCodeVm
     */
    'last'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageTradingCodeVm
     */
    'numberOfElements'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageTradingCodeVm
     */
    'empty'?: boolean;
}

