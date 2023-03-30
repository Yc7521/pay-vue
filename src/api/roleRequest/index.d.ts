// @ts-ignore
import { PageRoleRequest } from "../models";
// @ts-ignore
import { RequestReq } from "../models";
// @ts-ignore
import { RoleRequest } from "../models";

/**
 *
 * @summary Apply for a role.
 * @param {RequestReq} [requestReq]
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
declare function apply(
  requestReq?: RequestReq,
  options?: {}
): Promise<RoleRequest>;

/**
 *
 * @summary Approve a RoleRequest by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
declare function approve(id: number, options?: {}): Promise<RoleRequest>;

/**
 *
 * @summary Get a RoleRequest by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
declare function get1(id: number, options?: {}): Promise<RoleRequest>;

/**
 *
 * @summary List all RoleRequest.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 * @memberof ApiRoleRequestApiInterface
 */
declare function list1(
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
declare function listByApplicantId(
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
declare function listByState(
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
declare function reject(id: number, options?: {}): Promise<RoleRequest>;
