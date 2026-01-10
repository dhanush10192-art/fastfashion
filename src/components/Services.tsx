import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Printer, Shirt, Package, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Direct to Film Printing',
      description: 'High-quality DTF printing for vibrant, durable designs on various fabrics.',
      price: 'Starting at ₹200',
      icon: Printer,
    },
    {
      title: 'Custom Apparel Printing',
      description: 'Personalized printing on t-shirts, hoodies, and more with your designs.',
      price: 'Custom pricing',
      icon: Shirt,
    },
    {
      title: 'Bulk Orders',
      description: 'Discounted rates for large quantity orders. Perfect for businesses and events.',
      price: 'Contact for quote',
      icon: Package,
    },
    {
      title: 'Design Consultation',
      description: 'Expert advice on design optimization for best printing results.',
      price: 'Free initial consultation',
      icon: Palette,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold text-gray-900 mt-4 mb-4">Our Services</h2>
          <p className="text-fluid-p text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional printing services to bring your creative visions to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/50 backdrop-blur-sm hover:bg-white hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-base leading-relaxed">{service.description}</CardDescription>
                <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;