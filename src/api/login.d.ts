/* eslint-disable no-unused-vars */
import { LoginRes, UserAccount } from "./models";

/**
 * Login.
 * @param username username
 * @param password password
 */
declare function login(username: string, password: string): Promise<LoginRes>;

/**
 * Register.
 * @param username username
 * @param password password
 */
declare function register(
  username: string,
  password: string
): Promise<UserAccount>;

/**
 * Delete user.
 * @param id a id of UserAccount
 */
declare function delete_(id: number): Promise<any>;

/**
 * Logout.
 */
declare function logout(): Promise<any>;
