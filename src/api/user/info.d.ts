import { TradingCodeVm, UserInfo } from "../models";

/**
 * Get user info by current user.
 * GET /api/user/me
 */
declare function me(): Promise<UserInfo>;

/**
 * Get user info by user id.
 * GET /api/user/{id}
 */
declare function getUserInfo(id: number): Promise<UserInfo>;

/**
 * Gen receipt code.
 * GET /api/user/me/receipt-code
 */
declare function genReceiptCode(): Promise<TradingCodeVm>;

/**
 * Gen payment code.
 * GET /api/user/me/payment-code
 */
declare function genPaymentCode(): Promise<TradingCodeVm>;

/**
 * Change the password of current user.
 * PUT /api/user/me/password
 */
declare function changePassword(
  oldPassword: String,
  newPassword: String
): Promise<any>;

/**
 * Delete current user.
 * DELETE /api/user/me
 */
declare function delete_(): Promise<any>;
