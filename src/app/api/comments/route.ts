import connectToDB from "@/configs/db";
import { NextRequest } from "next/server";
import { Types } from "mongoose";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const reqBody = await req.json();
    
    const { username, body, email, score, productID } = reqBody;

    if (!username || !body || !email || score === undefined || !productID) {
      return Response.json(
        { message: "فیلدهای الزامی (username, body, email, score, productID) ارسال نشده‌اند" },
        { status: 400 }
      );
    }

    // بررسی معتبر بودن ایدی محصول
    if (!Types.ObjectId.isValid(productID)) {
      return Response.json({ message: "شناسه محصول نامعتبر است" }, { status: 400 });
    }

    // بررسی منطقی بودن امتیاز (باید بین ۱ تا ۵ باشد)
    if (score < 1 || score > 5) {
      return Response.json({ message: "امتیاز باید بین ۱ تا ۵ باشد" }, { status: 400 });
    }

    const product = await ProductModel.findById(productID);
    if (!product) {
      return Response.json({ message: "محصولی با این شناسه یافت نشد" }, { status: 404 });
    }

    const comment = await CommentModel.create({
      username,
      body,
      email,
      score,
      isAccept: false,
      productID,
    });

    await ProductModel.findOneAndUpdate(
      { _id: productID },
      { $push: { comments: comment._id } }
    );

    return Response.json(
      { message: "دیدگاه شما با موفقیت ثبت شد", data: comment },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Comment creation error:", err);
    if (err.name === "ValidationError") {
      return Response.json(
        { message: "خطا در اعتبارسنجی داده‌ها", errors: err.errors },
        { status: 400 }
      );
    }
    return Response.json({ message: "خطای داخلی سرور" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const productID = searchParams.get("productID");
    const filter = productID ? { productID } : {};
    
    await CommentModel.findByIdAndUpdate({}, {
      isAccept: true,
    })
    const comments = await CommentModel.find(filter, "-__v").sort({ date: -1 });
    return Response.json(comments);
    
  } catch (err) {
    console.error("Comments fetch error:", err);
    return Response.json({ message: "خطای داخلی سرور" }, { status: 500 });
  }
}