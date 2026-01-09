import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();

  // Mock blog data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Direct to Film Printing',
      content: `
        <p>Direct to Film (DTF) printing is revolutionizing the custom apparel industry. This innovative technology allows for high-quality, full-color prints on a wide variety of fabrics without the limitations of traditional screen printing.</p>
        
        <h2>How DTF Works</h2>
        <p>The DTF process involves printing designs onto a special film using water-based inks, then transferring the design to fabric using heat and pressure. This method offers several advantages over traditional printing techniques.</p>
        
        <h2>Benefits of DTF Printing</h2>
        <ul>
          <li>Vibrant, long-lasting colors</li>
          <li>Compatible with various fabric types</li>
          <li>No minimum order quantities</li>
          <li>Fast turnaround times</li>
          <li>Eco-friendly water-based inks</li>
        </ul>
        
        <p>As technology continues to advance, DTF printing is becoming the go-to choice for custom apparel designers and businesses looking to create unique, high-quality products.</p>
      `,
      date: 'January 8, 2026',
      readTime: '5 min read',
      author: 'FastColor Team',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      tags: ['DTF Printing', 'Technology', 'Fashion']
    },
    {
      id: 2,
      title: 'Color Theory in Fashion Printing',
      content: `
        <p>Understanding color theory is crucial for creating visually appealing and effective fashion prints. The right color combinations can make your designs stand out and convey the right message.</p>
        
        <h2>Basic Color Theory</h2>
        <p>Color theory involves the study of how colors interact and the psychological effects they have on viewers. In fashion printing, colors can influence mood, brand perception, and design effectiveness.</p>
        
        <h2>Choosing Colors for Printing</h2>
        <ul>
          <li>Consider your brand identity</li>
          <li>Think about the target audience</li>
          <li>Account for fabric color absorption</li>
          <li>Test color combinations on different materials</li>
        </ul>
        
        <p>Mastering color theory will help you create prints that not only look great but also resonate with your customers.</p>
      `,
      date: 'January 5, 2026',
      readTime: '7 min read',
      author: 'Design Expert',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      tags: ['Color Theory', 'Design', 'Fashion']
    },
    {
      id: 3,
      title: 'Sustainable Printing Practices',
      content: `
        <p>Sustainability is becoming increasingly important in the fashion and printing industry. Eco-friendly practices not only benefit the environment but also appeal to conscious consumers.</p>
        
        <h2>Eco-Friendly Printing Methods</h2>
        <p>Modern printing technologies offer more sustainable alternatives to traditional methods. Water-based inks, recycled materials, and energy-efficient processes are just some of the options available.</p>
        
        <h2>Benefits of Sustainable Printing</h2>
        <ul>
          <li>Reduced environmental impact</li>
          <li>Appeal to eco-conscious customers</li>
          <li>Potential cost savings</li>
          <li>Compliance with regulations</li>
        </ul>
        
        <p>Adopting sustainable printing practices is not just good for the planet—it's also good for business.</p>
      `,
      date: 'January 1, 2026',
      readTime: '6 min read',
      author: 'Sustainability Specialist',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
      tags: ['Sustainability', 'Eco-Friendly', 'Business']
    },
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Blog Not Found - Fastcolorfashion</title>
        </Helmet>
        <main className="min-h-screen">
          <Navbar />
          <div className="container mx-auto py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-lg mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blogs">Back to Blogs</Link>
            </Button>
          </div>
          <Footer />
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Fastcolorfashion</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />

        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="outline" asChild className="mb-4">
                <Link to="/blogs">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </Link>
              </Button>
            </div>

            {/* Hero Image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
};

export default BlogDetail;