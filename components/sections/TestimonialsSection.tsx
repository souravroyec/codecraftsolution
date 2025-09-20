'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    company: 'TechFlow Solutions',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'CodeCraft Solutions transformed our WordPress site into a blazing-fast Next.js application. The performance improvement was incredible - 300% faster load times and our SEO rankings skyrocketed. Their expertise in modern web technologies is unmatched.',
    project: 'WordPress to Next.js Migration'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, FoodieApp',
    company: 'FoodieApp Inc.',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'The team built our food delivery app with innovative reels feature that set us apart from competitors. The MERN stack implementation was flawless, and their attention to user experience was exceptional. We saw 10K+ downloads in the first month.',
    project: 'Zomato-style Food App with Reels'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CTO, EduLearn',
    company: 'EduLearn Platform',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'Our enterprise LMS handles 25,000+ students seamlessly thanks to CodeCraft\'s scalable architecture. The AI-powered automation they implemented reduced our manual work by 80%. Truly professional team with deep technical knowledge.',
    project: 'Enterprise Learning Management System'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'VP Engineering, FinTech Pro',
    company: 'FinTech Pro',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'The banking application they developed exceeded all our expectations. Security, performance, and user experience are all top-notch. The real-time transaction system handles thousands of concurrent users without any issues. Highly recommended!',
    project: 'Digital Banking Platform'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director, ContentAI',
    company: 'ContentAI Studios',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'The AI shorts generator platform has revolutionized our content creation process. We\'ve generated over 100K videos with 92% accuracy. The integration with OpenAI and custom ML models shows their expertise in cutting-edge technology.',
    project: 'AI-Powered Content Generator'
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 text-sm font-medium text-yellow-700 mb-4">
            <Star className="h-4 w-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and innovators 
            say about working with CodeCraft Solutions.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-teal-100">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                <Quote className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Content */}
            <blockquote className="text-center mb-8">
              <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium">
                "{currentTestimonial.content}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                <AvatarFallback className="bg-gradient-to-r from-teal-500 to-blue-500 text-white text-lg font-bold">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</div>
                <div className="text-teal-600 font-medium">{currentTestimonial.role}</div>
                <div className="text-gray-600 text-sm">{currentTestimonial.company}</div>
              </div>
            </div>

            {/* Project */}
            <div className="mt-6 text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 text-sm font-medium text-teal-700 border border-teal-200">
                Project: {currentTestimonial.project}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button
            variant="outline"
            size="lg"
            onClick={prevTestimonial}
            className="h-12 w-12 rounded-full border-2 hover:bg-teal-50 hover:border-teal-500 transition-all duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-teal-600 w-8'
                    : 'bg-gray-300 hover:bg-teal-400'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={nextTestimonial}
            className="h-12 w-12 rounded-full border-2 hover:bg-teal-50 hover:border-teal-500 transition-all duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto text-center"
        >
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '100%', label: 'Satisfaction Rate' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}