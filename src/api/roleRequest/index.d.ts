// @ts-ignore
import { PageRoleRequest, RoleReq, RoleRequest } from "../models";

/**
 *
 * @summary Apply for a role.
 * @param {RoleReq} [roleReq]
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
export declare function applyRoleRequest(
  roleReq?: RoleReq,
  options?: {}
): Promise<RoleRequest>;

/**
 *
 * @summary Approve a RoleRequest by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
export declare function approveRoleRequest(
  id: number,
  options?: {}
): Promise<RoleRequest>;

/**
 *
 * @summary Get a RoleRequest by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
export declare function getRoleRequest(
  id: number,
  options?: {}
): Promise<RoleRequest>;

/**
 *
 * @summary List all RoleRequest.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
export declare function listRoleRequest(
  page?: number,
  size?: number,
  options?: {}
): Promise<PageRoleRequest>;

/**
 *
 * @summary List RoleRequest by applicantId.
 * @param {number} applicantId
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
export declare function listRoleRequestByApplicantId(
  applicantId: number,
  page?: number,
  size?: number,
  options?: {}
): Promise<Array<RoleRequest>>;

/**
 *
 * @summary List RoleRequest by state.
 * @param {string} state
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
export declare function listRoleRequestByState(
  state: string,
  page?: number,
  size?: number,
  options?: {}
): Promise<Array<RoleRequest>>;

/**
 *
 * @summary Reject a RoleRequest by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
export declare function rejectRoleRequest(
  id: number,
  options?: {}
): Promise<RoleRequest>;
