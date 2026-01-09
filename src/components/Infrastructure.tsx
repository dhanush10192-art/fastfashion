import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Wrench, Building, Cpu } from 'lucide-react';

const Infrastructure = () => {
  const infrastructureItems = [
    {
      title: 'Advanced Printing Technology',
      description: 'State-of-the-art DTF printers capable of producing high-resolution, vibrant prints on various fabrics.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
    },
    {
      title: 'Professional Workspace',
      description: 'Clean, organized workspace designed for efficient production and quality control.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
    },
    {
      title: 'Specialized Tools & Equipment',
      description: 'Comprehensive set of tools for design preparation, printing, and finishing processes.',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80',
    },
    {
      title: 'High-Performance Computers',
      description: 'Powerful workstations for design processing and print management software.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80',
    },
  ];

  return (
    <section id="infrastructure" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold text-gray-900 mb-4">Our Infrastructure</h2>
          <p className="text-fluid-p text-gray-600 max-w-2xl mx-auto">
            Discover the cutting-edge technology and facilities that power our printing operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infrastructureItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-8 h-8 text-primary" />
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-gray-600">{item.description}</CardDescription>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;