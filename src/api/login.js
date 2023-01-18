import request from "@/utils/request";

export function login(username, password) {
  const data = {
    username,
    password,
  };
  return request({
    url: "/login",
    headers: {
      isToken: false,
    },
    method: "post",
    data,
  });
}

export function register(username, password) {
  const data = {
    username,
    password,
  };
  return request({
    url: "/register",
    headers: {
      isToken: false,
    },
    method: "post",
    data,
  });
}

export function delete_(id) {
  return request({
    url: `/user/${encodeURIComponent(id)}`,
    method: "delete",
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "get",
  });
}
