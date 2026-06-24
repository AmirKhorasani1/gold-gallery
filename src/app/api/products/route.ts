import connectToDB from "@/configs/db";
import { NextRequest } from "next/server";
import ProductModel from "@/models/Product";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = await req.json();
    const {
      title,
      price,
      weight,
      img,
      type,
      category,
      seller,
      stock,
      rating,
      comments,
      questionsCount,
      weights,
      features,
      description,
      specs,
    } = body;

    if (!title || price === undefined || weight === undefined || !img || !type) {
      return Response.json(
        { message: "فیلدهای الزامی (title, price, weight, img, type) ارسال نشده‌اند" },
        { status: 400 }
      );
    }

    const product = await ProductModel.create({
      title,
      price,
      weight,
      img,
      type,
      category,
      seller,
      stock,
      rating,
      comments,
      questionsCount,
      weights,
      features,
      description,
      specs,
    });


    return Response.json(
      { message: "product created successfully ;)", product },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating product:", error);
    if (error.name === "ValidationError") {
      return Response.json(
        { message: "خطا در اعتبارسنجی داده‌ها", errors: error.errors },
        { status: 400 }
      );
    }
    return Response.json(
      { message: "خطایی در سرور رخ داد" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const products = await ProductModel.find({}, "-__v").populate("comments");
  return Response.json(products)
}