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
import { RoleRequest } from './role-request';
// May contain unused imports in some cases
// @ts-ignore
import { SortObject } from './sort-object';

/**
 * 
 * @export
 * @interface PageRoleRequest
 */
export interface PageRoleRequest {
    /**
     * 
     * @type {number}
     * @memberof PageRoleRequest
     */
    'totalElements'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageRoleRequest
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageRoleRequest
     */
    'size'?: number;
    /**
     * 
     * @type {Array<RoleRequest>}
     * @memberof PageRoleRequest
     */
    'content'?: Array<RoleRequest>;
    /**
     * 
     * @type {number}
     * @memberof PageRoleRequest
     */
    'number'?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageRoleRequest
     */
    'sort'?: SortObject;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageRoleRequest
     */
    'pageable'?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageRoleRequest
     */
    'first'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageRoleRequest
     */
    'last'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageRoleRequest
     */
    'numberOfElements'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageRoleRequest
     */
    'empty'?: boolean;
}

