import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import Categories from "@/components/templates/index/categories/Categories";
import CustomerReviews from "@/components/templates/index/customer-reviews/CustomerReviews";
import CollectionIntro from "@/components/templates/index/iran-collection/CollectionIntro";
import CollectionProducts from "@/components/templates/index/iran-collection/CollectionProducts";
import Latest from "@/components/templates/index/latest/Latest";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { Types } from "mongoose";
import connectToDB from "@/configs/db";

interface TokenPayload {
  userId: string;
  role: string;
}

interface UserDocument {
  _id: Types.ObjectId;
  name: string;
  phone: string;
  email?: string;
  role: string;
}

export default async function Home() {
  let user: UserDocument | null = null;

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (token?.value) {
      const tokenPayload = verifyAccessToken(token.value) as TokenPayload | null;

      if (tokenPayload?.userId) {
        await connectToDB();
        user = await UserModel.findById(
          new Types.ObjectId(tokenPayload.userId)
        ).lean<UserDocument>();
      }
    }
  } catch (err) {
    console.error("Auth check failed:", err);
    user = null;
  }

  return (
    <div className="flex flex-col gap-17 md:gap-25">
      <Navbar isLogin={!!user} />
      <Banner />
      <Latest />
      <Categories />
      <CollectionIntro />
      <CollectionProducts />
      <CustomerReviews />
      <Footer />
    </div>
  );
}