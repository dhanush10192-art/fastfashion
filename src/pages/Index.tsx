import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import VideoReels from "@/components/VideoReels";
import GalleryPreview from "@/components/GalleryPreview";
import Pricing from "@/components/Pricing";
import OrderForm from "@/components/OrderForm";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fastcolorfashion - Premium Direct to Film Printing Service</title>
        <meta
          name="description"
          content="Transform your designs into stunning, durable prints with our professional DTF printing service. Quality prints for apparel starting at ₹200."
        />
        <link rel="canonical" href="https://fastcolorfashion.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <ImageCarousel />
        <VideoReels />
        <GalleryPreview />
        <Pricing />
        <OrderForm />
        <CustomerReviews />
        <Footer />
      </main>
    </>
  );
};

export default Index;
