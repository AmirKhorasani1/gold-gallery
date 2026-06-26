import connectToDB from "@/configs/db";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { Types } from "mongoose";

export async function GET() {
  try {
    await connectToDB();
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token?.value) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const tokenPayload = verifyAccessToken(token.value);
    // ✅ استفاده از userId به جای email
    if (!tokenPayload?.userId) {
      return Response.json({ message: "Invalid token" }, { status: 401 });
    }

    const user = await UserModel.findById(
      new Types.ObjectId(tokenPayload.userId),
      "-password -refreshToken -__v"
    ).lean();

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(user);
  } catch {
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}