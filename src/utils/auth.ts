import { hash, compare } from "bcryptjs";
import { sign, verify, JwtPayload } from "jsonwebtoken";

export interface TokenPayload {
  userId: string;
  role: string;
}

// تبدیل پسورد خام به یک رشته غیرقابل برگشت (امنیت پسورد)
export const hashPassword = async ( password: string ): Promise<string> => {
  return hash(password, 12);
};

// (امنیت پسورد)
export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return compare(password, hashedPassword);
};

// ساخت توکن ورود
export const generateAccessToken = (payload: TokenPayload): string => {
  const secret = process.env.AccessTokenSecretKey;
  
  if (!secret) {
    throw new Error("AccessTokenSecretKey is not defined");
  }
  
  // ساخت توکن
  return sign(payload, secret, {expiresIn: "55d"});
};

// بررسی ورود
export const verifyAccessToken = (
  token: string // JWT که از کاربر می‌گیری
): TokenPayload & JwtPayload => { // ترکیب داده‌های خودت + داده‌های داخلی JWT
  const secret = process.env.AccessTokenSecretKey;

  if (!secret) {
    throw new Error("AccessTokenSecretKey is not defined");
  }
  
  //آیا این توکن معتبر است؟
  return verify(token, secret) as TokenPayload & JwtPayload;
};

// تمدید ورود
export const generateRefreshToken = (payload: TokenPayload): string => {
  const secret = process.env.RefreshTokenSecretKey;

  if (!secret) {
    throw new Error("RefreshTokenSecretKey is not defined");
  }

  return sign(payload, secret, {expiresIn: "7d"});
};

//بررسی اعتبار refresh token
export const verifyRefreshToken = (
  token: string
): TokenPayload & JwtPayload => {
  const secret = process.env.RefreshTokenSecretKey;

  if (!secret) {
    throw new Error("RefreshTokenSecretKey is not defined");
  }

  return verify(token, secret) as TokenPayload & JwtPayload;
};

// Validations
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^09\d{9}$/;
  return phoneRegex.test(phone.trim());
};

export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};