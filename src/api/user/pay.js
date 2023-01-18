import request from "@/utils/request.js";

export function list(page, size) {
  const params = {
    page,
    size,
  };
  return request({
    url: "/user/me/pay",
    method: "get",
    params,
  });
}

export function create(data) {
  return request({
    url: "/user/me/pay",
    method: "post",
    data,
  });
}

export function pay(id) {
  return request({
    url: `/user/me/pay/${decodeURIComponent(id)}`,
    method: "put",
  });
}

export function cancel(id) {
  return request({
    url: `/user/me/pay/${encodeURIComponent(id)}/cancel`,
    method: "put",
  });
}
