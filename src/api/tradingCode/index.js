import request from "@/utils/request.js";

export function list(page, size) {
  const params = {
    page,
    size,
  };
  return request({
    url: "/code",
    method: "get",
    params,
  });
}

export function create(data) {
  return request({
    url: "/code",
    method: "post",
    data,
  });
}

export function get(id) {
  return request({
    url: `/code/${encodeURIComponent(id)}`,
    method: "get",
  });
}

export function delete_(id) {
  return request({
    url: `/code/${encodeURIComponent(id)}`,
    method: "delete",
  });
}

export function getByUser(userId) {
  return request({
    url: `/code/user/${encodeURIComponent(userId)}`,
    method: "get",
  });
}

export function exist(id) {
  return request({
    url: `/code/has/${encodeURIComponent(id)}`,
    method: "get",
  });
}

export function getId() {
  return request({
    url: "/code/getId",
    method: "get",
  });
}
