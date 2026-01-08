import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      title: 'Our Mission',
      description: 'To provide exceptional custom printing services that bring our clients\' creative visions to life with unmatched quality and innovation.',
      icon: Target,
    },
    {
      title: 'Our Vision',
      description: 'To be the leading provider of direct-to-film printing services, setting new standards in the custom apparel industry.',
      icon: Eye,
    },
    {
      title: 'Quality Excellence',
      description: 'Committed to delivering prints that exceed expectations, using the latest technology and premium materials.',
      icon: Award,
    },
    {
      title: 'Customer Focused',
      description: 'Building lasting relationships through personalized service, timely delivery, and outstanding customer support.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About FastColor Fashion</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We are a premier custom printing company specializing in Direct-to-Film (DTF) technology.
            With years of experience and a passion for quality, we transform ideas into stunning,
            durable prints that make a lasting impression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{highlight.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
              <p className="text-gray-600">Our team of skilled professionals brings years of experience in custom printing and design.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">We stay at the forefront of printing technology to offer the best solutions for our clients.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Reliability</h4>
              <p className="text-gray-600">Count on us for consistent quality, timely delivery, and exceptional customer service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;