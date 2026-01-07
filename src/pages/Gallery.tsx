import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Fastcolorfashion</title>
        <meta
          name="description"
          content="Explore our extensive gallery of premium DTF prints and custom fashion designs."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Gallery />
        <Footer />
      </main>
    </>
  );
};

export default GalleryPage;