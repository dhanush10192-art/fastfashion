import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";

const BlogsPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Fastcolorfashion</title>
        <meta
          name="description"
          content="Read our latest articles on direct to film printing, fashion trends, and printing tips."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Blogs />
        <Footer />
      </main>
    </>
  );
};

export default BlogsPage;