import { hash, compare } from "bcryptjs";
import { sign, verify, JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { Types } from "mongoose";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

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
): TokenPayload & JwtPayload => {
  const secret = process.env.AccessTokenSecretKey;
  if (!secret) throw new Error("AccessTokenSecretKey is not defined");
  return verify(token, secret) as TokenPayload & JwtPayload;
};

export const generateRefreshToken = (payload: TokenPayload): string => {
  const secret = process.env.RefreshTokenSecretKey;
  if (!secret) throw new Error("RefreshTokenSecretKey is not defined");
  return sign(payload, secret, { expiresIn: "7d" });
};

export const verifyRefreshToken = (
  token: string
): TokenPayload & JwtPayload => {
  const secret = process.env.RefreshTokenSecretKey;
  if (!secret) throw new Error("RefreshTokenSecretKey is not defined");
  return verify(token, secret) as TokenPayload & JwtPayload;
};

export const getCurrentUser = async (): Promise<CurrentUser | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token?.value) return null;

    const tokenPayload = verifyAccessToken(token.value);
    if (!tokenPayload?.userId) return null;

    await connectToDB();
    const user = await UserModel.findById(
      new Types.ObjectId(tokenPayload.userId)
    ).lean<CurrentUser>();

    return user ?? null;
  } catch (err) {
    console.error("Auth check failed:", err);
    return null;
  }
};