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
 * @interface TradingCodeVm
 */
export interface TradingCodeVm {
    /**
     * 
     * @type {string}
     * @memberof TradingCodeVm
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof TradingCodeVm
     */
    'userInfoId'?: string;
    /**
     * 
     * @type {string}
     * @memberof TradingCodeVm
     */
    'tradingType'?: TradingCodeVmTradingTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TradingCodeVm
     */
    'money'?: number;
}

// @ts-ignore
export const TradingCodeVmTradingTypeEnum = {
    Receipt: 'Receipt',
    Payment: 'Payment'
} as const;

export type TradingCodeVmTradingTypeEnum = typeof TradingCodeVmTradingTypeEnum[keyof typeof TradingCodeVmTradingTypeEnum];


