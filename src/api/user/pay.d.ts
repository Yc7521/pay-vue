import { PagePayInfo, PayInfo, PayVm } from "../models";

/**
 * List all PayInfo.
 * GET /api/user/me/pay
 */
declare function list(
  page?: number | null,
  size?: number | null
): Promise<PagePayInfo>;

/**
 * Create PayInfo by userId.
 * POST /api/user/me/pay
 */
declare function create(data: PayVm): Promise<PayInfo>;

/**
 * Pay.
 * Update PayInfo and UserInfo to finish this payment
 * Will not delete the TradingCode
 * PUT /api/user/me/pay/{id}
 */
declare function pay(id: number): Promise<PayInfo>;

/**
 * Cancel.
 * Update PayInfo to cancel this payment
 * Will not delete the TradingCode
 * PUT /api/user/me/pay/{id}/cancel
 */
declare function cancel(id: number): Promise<PayInfo>;
