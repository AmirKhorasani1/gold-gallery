import { cookies } from "next/headers";
import { Types } from "mongoose";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { verifyAccessToken, CurrentUser } from "@/utils/auth";

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
    )
      .select("_id name phone email role")
      .lean<CurrentUser>();

    return user ?? null;
  } catch (err) {
    console.error("Auth check failed:", err);
    return null;
  }
};