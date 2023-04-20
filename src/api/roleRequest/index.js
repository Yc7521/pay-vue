import request from "@/utils/request";

/**
 *
 * @summary Apply for a role.
 * @param {RoleReq} [roleReq]
 * @param {*} [options] Override http request option.
 */
export function apply(roleReq = null, options = {}) {
  const path = `/api/request/role`;
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    data: roleReq,
    ...options,
  });
}
/**
 *
 * @summary Approve a RoleRequest by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 */
export function approve(id, options = {}) {
  const path = `/api/request/role/{id}/approve`.replace(
    `{${"id"}}`,
    encodeURIComponent(String(id))
  );
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    ...options,
  });
}
/**
 *
 * @summary Get a RoleRequest by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 */
export function getRoleRequest(id, options = {}) {
  const path = `/api/request/role/{id}`.replace(
    `{${"id"}}`,
    encodeURIComponent(String(id))
  );
  const params = {};

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}
/**
 *
 * @summary List all RoleRequest.
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 */
export function listRoleRequest(page = null, size = null, options = {}) {
  const path = `/api/request/role`;
  const params = {
    page,
    size,
  };

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}
/**
 *
 * @summary List RoleRequest by applicantId.
 * @param {number} applicantId
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 */
export function listByApplicantId(
  applicantId,
  page = null,
  size = null,
  options = {}
) {
  const path = `/api/request/role/applicant/{applicantId}`.replace(
    `{${"applicantId"}}`,
    encodeURIComponent(String(applicantId))
  );
  const params = {
    page,
    size,
  };

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}
/**
 *
 * @summary List RoleRequest by state.
 * @param {string} state
 * @param {number} [page]
 * @param {number} [size]
 * @param {*} [options] Override http request option.
 */
export function listByState(state, page = null, size = null, options = {}) {
  const path = `/api/request/role/state/{state}`.replace(
    `{${"state"}}`,
    encodeURIComponent(String(state))
  );
  const params = {
    page,
    size,
  };

  return request({
    url: path,
    method: "GET",
    params,
    ...options,
  });
}
/**
 *
 * @summary Reject a RoleRequest by id.
 * @param {number} id
 * @param {*} [options] Override http request option.
 */
export function reject(id, options = {}) {
  const path = `/api/request/role/{id}/reject`.replace(
    `{${"id"}}`,
    encodeURIComponent(String(id))
  );
  const params = {};

  return request({
    url: path,
    method: "POST",
    params,
    ...options,
  });
}
