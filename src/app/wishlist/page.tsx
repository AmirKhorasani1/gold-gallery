import Link from "next/link";
import { GoHeart } from "react-icons/go";
import Navbar from "../../components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import { getCurrentUser } from "@/utils/serverHelpers";
import connectToDB from "@/configs/db";
import WishlistModel from "@/models/Wishlist";
import JewelryCard from "@/components/modules/jewelrycard/JewelryCard";
import "@/models/Product";

const EmptyWishlist = () => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl mt-8">
    <div className="w-20 h-20 rounded-full bg-[#10494b]/10 flex items-center justify-center mb-6">
      <GoHeart className="text-[#10494b] text-4xl" />
    </div>
    <h2 className="text-lg font-bold text-gray-800 mb-2 font-yekan">
      علاقه‌مندی‌ها خالی است
    </h2>
    <p className="text-sm text-neutral-500 mb-8 max-w-xs leading-7">
      محصولاتی که دوست دارید را به اینجا اضافه کنید تا بعداً راحت‌تر پیداشان
      کنید.
    </p>
    <Link
      href="/products"
      className="px-8 py-3 bg-[#10494b] text-white rounded-lg text-sm font-semibold hover:bg-[#0d3e40] transition-colors"
    >
      مشاهده محصولات
    </Link>
  </div>
);

const page = async () => {
  await connectToDB();
  const user = await getCurrentUser();

  const wishes = user
    ? await WishlistModel.find({ user: user._id })
        .populate("product", "title price weight img type")
        .lean()
    : [];

  return (
    <>
      <Navbar isLogin={!!user} />

      <div className="px-4.5 md:px-17 py-33">
        <Breadcrumb
          links={[
            { id: 1, title: "گالری طلا امیری", to: "/" },
            { id: 2, title: "علاقه مندی ها", to: "/wishlist" },
          ]}
        />

        {/* Content */}
        {wishes.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <div>

            {/* Header */}
            <div className="flex items-center justify-between my-7">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-neutral-900 font-yekan">
                  علاقه‌مندی‌ها
                </h1>
                {wishes.length > 0 && (
                  <p className="text-[13px] md:text-[15px] text-neutral-500">
                    {new Intl.NumberFormat("fa-IR").format(wishes.length)} محصول
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {wishes.map((wish: any) => {
                const product = wish.product;
                return (
                  <JewelryCard
                    key={wish._id.toString()}
                    id={product._id.toString()}
                    {...product}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default page;