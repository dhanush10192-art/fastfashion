import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Direct to Film Printing',
      excerpt: 'Explore how DTF printing is revolutionizing custom apparel design with its versatility and quality.',
      date: 'January 8, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
    },
    {
      id: 2,
      title: 'Color Theory in Fashion Printing',
      excerpt: 'Learn how to choose the perfect colors for your designs to ensure vibrant and long-lasting prints.',
      date: 'January 5, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    },
    {
      id: 3,
      title: 'Sustainable Printing Practices',
      excerpt: 'Discover eco-friendly printing methods and materials that are good for your business and the planet.',
      date: 'January 1, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold text-gray-900 mt-4 mb-4">Latest from Our Blog</h2>
          <p className="text-fluid-p text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in the world of custom printing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="flex justify-between text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/blogs/${post.id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button>View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;