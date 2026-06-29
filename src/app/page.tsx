import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import Categories from "@/components/templates/index/categories/Categories";
import CustomerReviews from "@/components/templates/index/customer-reviews/CustomerReviews";
import CollectionIntro from "@/components/templates/index/iran-collection/CollectionIntro";
import CollectionProducts from "@/components/templates/index/iran-collection/CollectionProducts";
import Latest from "@/components/templates/index/latest/Latest";
import WhyUs from "@/components/templates/index/why-us/WhyUs";
import { getCurrentUser } from "@/utils/serverHelpers";

const Home = async () => {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col gap-17 md:gap-25">
      <Navbar isLogin={!!user} />
      <Banner />
      <Latest />
      <Categories />
      <CollectionIntro />
      <CollectionProducts />
      <WhyUs />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default Home