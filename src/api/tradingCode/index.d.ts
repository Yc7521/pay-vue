import { PageTradingCode, TradingCode } from "../models";

/**
 * List all TradingCode.
 * GET /api/code
 */
declare function list(
  page?: number | null,
  size?: number | null
): Promise<PageTradingCode>;

/**
 * Submit a TradingCode.
 * POST /api/code
 */
declare function create(data: TradingCode): Promise<TradingCode>;

/**
 * Get a TradingCode by id.
 * GET /api/code/{id}
 */
declare function get(id: number): Promise<TradingCode>;

/**
 * Remove a TradingCode by id if it's Finished.
 * DELETE /api/code/{id}
 */
declare function delete_(id: number): Promise<any>;

/**
 * List TradingCode by userId.
 * GET /api/code/user/{userId}
 */
declare function getByUser(userId: number): Promise<TradingCode>;

/**
 * Exist a TradingCode by id.
 * GET /api/code/has/{id}
 */
declare function exist(id: number): Promise<boolean>;

/**
 * Gen id, only test for admin users.
 * GET /api/code/getId
 */
declare function getId(): Promise<number>;
