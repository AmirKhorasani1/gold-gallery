import ProductGallery from "@/components/templates/product/ProductGallery";
import ProductHeader from "@/components/templates/product/ProductHeader";
import WeightSelector from "@/components/templates/product/WeightSelector";
import ProductFeatures from "@/components/templates/product/ProductFeatures";
import ProductTabs from "@/components/templates/product/ProductTabs";
import SellerSidebar from "@/components/templates/product/SellerSidebar";
import RelatedProducts from "@/components/templates/product/RelatedProducts";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Navbar from "@/components/modules/navbar/Navbar"
import Footer from "@/components/modules/footer/Footer"
import ProductModel from "@/models/Product";
import "@/models/Comment";
import connectToDB from "@/configs/db";
import { JewelryItem } from "@/components/modules/jewelrycard/JewelryCard";
import { notFound } from "next/navigation";
import { Types } from "mongoose";
import { getCurrentUser } from "@/utils/auth";
import { serializeDoc } from "@/lib/serializeProduct";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  if (!Types.ObjectId.isValid(id)) {
    notFound();
  }

  await connectToDB();
  
  const productDoc = await ProductModel.findOne({ _id: id })
    .populate("comments") // تمام کامنت‌های مربوط به محصول نیز از کالکشن کامنت‌ها بیرون کشیده
    .lean(); // سرعت کوئری را بالا می‌برد 
  
  if (!productDoc) {
    notFound();
  }

  const product = serializeDoc(productDoc as any);

  const comments = Array.isArray(product.comments) ? product.comments : [];
  const reviewsCount = comments.filter((comment: any) => comment.isAccept).length;

  const images: string[] =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.img];

  // دریافت محصولات مرتبط
  const relatedDocs = await ProductModel.find({
    type: product.type,
    _id: { $ne: (productDoc as any)._id },
  })
    .limit(4)
    .lean();

  const related: JewelryItem[] = relatedDocs.map((doc: any) => ({
    id: String(doc._id),
    title: doc.title,
    price: doc.price,
    weight: doc.weight,
    img: doc.img,
    type: doc.type,
  }));

  const user = await getCurrentUser();

  return (
    <div>
      <Navbar isLogin={!!user} />
      <div className="px-4.5 md:px-17 pt-44 md:pt-38 flex flex-col gap-4 md:gap-8">
        <Breadcrumb
          links={[
            { id: 1, title: "گالری طلا امیری", to: "/" },
            { id: 2, title: "فروشگاه", to: "/" },
            { id: 3, title: product.type, to: "/" },
            { id: 4, title: product.title, to: `/product/${product.id}` },
          ]}
        />

        {/* Main grid: sidebar | info | gallery */}
        <div className="grid md:grid-cols-[1fr_1fr_350px] gap-4 md:gap-8">
          {/* Gallery */}
          <div>
            <ProductGallery images={images} title={product.title} />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <ProductHeader
              title={product.title}
              rating={product.rating}
              reviewsCount={reviewsCount}
              questionsCount={product.questionsCount}
            />

            <div className="h-px bg-neutral-100" />

            {product.weights && product.weights.length > 0 && (
              <WeightSelector weights={product.weights} defaultWeight={product.weight} />
            )}

            {product.features && product.features.length > 0 && (
              <ProductFeatures features={product.features} />
            )}
          </div>

          {/* Sidebar */}
          <div>
            <SellerSidebar
              seller={product.seller || "گالری طلا"}
              price={product.price}
              stock={product.stock}
            />
          </div>
        </div>

        <div className="h-px bg-neutral-200" />

        {/* Tabs: description / specs / comments / questions */}
        <ProductTabs
          productId={product.id}
          description={product.description}
          specs={product.specs}
          comments={comments}
        />

        <div className="h-px bg-neutral-200" />

        {/* Related products */}
        <RelatedProducts products={related} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;