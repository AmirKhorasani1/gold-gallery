import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import WishlistModel from "@/models/Wishlist";
import connectToDB from "@/configs/db";
import { getCurrentUser } from "@/utils/serverHelpers";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { message: "ابتدا وارد شوید" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { product } = body;

    if (!product) {
      return NextResponse.json(
        { message: "product الزامی است" },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(product)) {
      return NextResponse.json(
        { message: "فرمت product معتبر نیست" },
        { status: 400 }
      );
    }

    const user = currentUser._id;

    const existing = await WishlistModel.findOne({ user, product });
    if (existing) {
      return NextResponse.json(
        { message: "این محصول قبلاً به علاقه‌مندی‌ها اضافه شده است" },
        { status: 409 }
      );
    }

    const wishlist = await WishlistModel.create({ user, product });

    return NextResponse.json(
      { message: "با موفقیت به علاقه‌مندی‌ها اضافه شد", data: wishlist },
      { status: 201 }
    );
  } catch (error) {
    console.error("Wishlist POST error:", error);
    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}