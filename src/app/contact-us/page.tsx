import Navbar from '@/components/modules/navbar/Navbar'
import { getCurrentUser } from '@/utils/auth'
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import ContactForm from '@/components/templates/contact-us/ContactForm'
import ContactInformation from '@/components/templates/contact-us/ContactInformation'
import Maps from '@/components/templates/contact-us/Maps'

const ContactPage = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <Navbar isLogin={!!user} />
      <div className="px-4.5 md:px-17 pt-44 md:pt-38 flex flex-col gap-4.5 md:gap-8 mb-16">
        <Breadcrumb
          links={[
            { id: 1, title: "گالری طلا امیری", to: "/" },
            { id: 2, title: "تماس با ما", to: "/contact-us" },
          ]}
        />
        <main>
          <Maps />
        </main>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 md:gap-8">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;