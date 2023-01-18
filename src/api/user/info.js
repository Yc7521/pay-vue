import request from "@/utils/request";

export function me() {
  return request({
    url: "/user/me",
    method: "get",
  });
}

export function getUserInfo(id) {
  return request({
    url: `/user/${encodeURIComponent(id)}`,
    method: "get",
  });
}

export function genReceiptCode() {
  return request({
    url: "/user/me/receipt-code",
    method: "get",
  });
}

export function genPaymentCode() {
  return request({
    url: "/user/me/payment-code",
    method: "get",
  });
}

export function changePassword(oldPassword, newPassword) {
  const params = {
    oldPassword,
    newPassword,
  };
  return request({
    url: "/user/me/password",
    method: "put",
    params,
  });
}

export function delete_() {
  return request({
    url: "/user/me",
    method: "delete",
  });
}
