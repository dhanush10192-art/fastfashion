import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - Fastcolorfashion</title>
        <meta
          name="description"
          content="Explore our range of professional printing services including DTF printing, custom apparel, and bulk orders."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Services />
        <Footer />
      </main>
    </>
  );
};

export default ServicesPage;