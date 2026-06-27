import connectToDB from "@/configs/db";
import ContactModel from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "نام، ایمیل و پیام الزامی هستند" },
        { status: 400 }
      );
    }

    await ContactModel.create({ name, email, phone, company, message });

    return NextResponse.json(
      { message: "پیام شما با موفقیت ثبت شد" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json(
      { message: "خطای داخلی سرور" },
      { status: 500 }
    );
  }
}