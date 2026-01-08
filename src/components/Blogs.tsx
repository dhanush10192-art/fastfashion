import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'The Future of Direct to Film Printing',
      excerpt: 'Explore how DTF printing is revolutionizing custom apparel design with its versatility and quality.',
      date: 'January 8, 2026',
      readTime: '5 min read',
    },
    {
      title: 'Color Theory in Fashion Printing',
      excerpt: 'Learn how to choose the perfect colors for your designs to ensure vibrant and long-lasting prints.',
      date: 'January 5, 2026',
      readTime: '7 min read',
    },
    {
      title: 'Sustainable Printing Practices',
      excerpt: 'Discover eco-friendly printing methods and materials that are good for your business and the planet.',
      date: 'January 1, 2026',
      readTime: '6 min read',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in the world of custom printing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="flex justify-between text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="outline" size="sm">Read More</Button>
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