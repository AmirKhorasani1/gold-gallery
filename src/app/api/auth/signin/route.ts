import {
  generateAccessToken,
  generateRefreshToken,
  verifyPassword,
} from "@/utils/auth";
import { NextRequest } from "next/server";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = await req.json();
    const { phoneOrEmail, password } = body;

    if (!phoneOrEmail || !password) {
      return Response.json(
        { message: "شماره همراه/ایمیل و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({
      $or: [{ email: phoneOrEmail }, { phone: phoneOrEmail }],
    });

    if (!user) {
      return Response.json(
        { message: "کاربری با این مشخصات یافت نشد" },
        { status: 404 }
      );
    }

    const isCorrectPassword = await verifyPassword(
      password,
      user.password as string
    );

    if (!isCorrectPassword) {
      return Response.json(
        { message: "شماره همراه/ایمیل یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({
      userId: user._id.toString(),
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user._id.toString(),
      role: user.role,
    });

    await UserModel.findOneAndUpdate(
      { _id: user._id },
      { $set: { refreshToken } }
    );

    return Response.json(
      { message: "ورود با موفقیت انجام شد" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${accessToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 55}`,
        },
      }
    );
  } catch (err) {
    console.log("Login Error:", err);
    return Response.json(
      { message: "خطای داخلی سرور" },
      { status: 500 }
    );
  }
}