import { NextRequest } from "next/server";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    const { name, phone, email, password } = body;

    if (!name || !phone || !email || !password) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return Response.json(
        { message: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ name }, { phone }, { email }],
    });

    if (isUserExist) {
      return Response.json(
        { message: "Username, phone or email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const users = await UserModel.find({});

    const newUser = await UserModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: users.length > 0 ? Role.USER : Role.ADMIN,
    });

    const accessToken = generateAccessToken({
      userId: newUser._id.toString(),
      role: newUser.role,
    });

    return Response.json(
      { message: "User created successfully" },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${accessToken}; path=/; HttpOnly; SameSite=Strict`,
        },
      }
    );
  } catch (error) {
    console.error("Register Error:", error);

    return Response.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}