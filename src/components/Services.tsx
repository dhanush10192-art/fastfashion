import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Direct to Film Printing',
      description: 'High-quality DTF printing for vibrant, durable designs on various fabrics.',
      price: 'Starting at ₹200',
    },
    {
      title: 'Custom Apparel Printing',
      description: 'Personalized printing on t-shirts, hoodies, and more with your designs.',
      price: 'Custom pricing',
    },
    {
      title: 'Bulk Orders',
      description: 'Discounted rates for large quantity orders. Perfect for businesses and events.',
      price: 'Contact for quote',
    },
    {
      title: 'Design Consultation',
      description: 'Expert advice on design optimization for best printing results.',
      price: 'Free initial consultation',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional printing services to bring your creative visions to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <p className="text-lg font-semibold text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;