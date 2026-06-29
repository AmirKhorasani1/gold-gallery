import { hash, compare } from "bcryptjs";
import { sign, verify, JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";

export interface TokenPayload {
  userId: string;
  role: string;
}

export interface CurrentUser {
  _id: Types.ObjectId;
  name: string;
  phone: string;
  email?: string;
  role: string;
}

export const hashPassword = async (password: string): Promise<string> => {
  return hash(password, 12);
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return compare(password, hashedPassword);
};

export const generateAccessToken = (payload: TokenPayload): string => {
  const secret = process.env.AccessTokenSecretKey;
  if (!secret) throw new Error("AccessTokenSecretKey is not defined");
  return sign(payload, secret, { expiresIn: "55d" });
};

export const verifyAccessToken = (
  token: string
): (TokenPayload & JwtPayload) | null => {
  const secret = process.env.AccessTokenSecretKey;
  if (!secret) throw new Error("AccessTokenSecretKey is not defined");
  try {
    return verify(token, secret) as TokenPayload & JwtPayload;
  } catch {
    // TokenExpiredError یا JsonWebTokenError — هر دو null برمی‌گردانند
    return null;
  }
};

export const generateRefreshToken = (payload: TokenPayload): string => {
  const secret = process.env.RefreshTokenSecretKey;
  if (!secret) throw new Error("RefreshTokenSecretKey is not defined");
  return sign(payload, secret, { expiresIn: "7d" });
};

export const verifyRefreshToken = (
  token: string
): (TokenPayload & JwtPayload) | null => {
  const secret = process.env.RefreshTokenSecretKey;
  if (!secret) throw new Error("RefreshTokenSecretKey is not defined");
  try {
    return verify(token, secret) as TokenPayload & JwtPayload;
  } catch {
    return null;
  }
};