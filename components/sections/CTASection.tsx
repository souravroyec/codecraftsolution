'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, MessageCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500/20 to-blue-500/20" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-teal-400/30 to-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white mb-8">
            <Zap className="h-4 w-4 text-teal-400" />
            <span>Ready to Transform Your Business?</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need a modern web application, AI automation, or want to migrate 
            from WordPress to Next.js, we're here to turn your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              asChild 
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-10 py-8 text-lg rounded-2xl shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 border-0"
            >
              <Link href="/contact" className="flex items-center space-x-3">
                <Calendar className="h-6 w-6" />
                <span>Schedule Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-8 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/projects" className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>View Our Work</span>
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: 'Quick Response',
                description: 'Get a response within 24 hours',
                icon: '⚡',
              },
              {
                title: 'Free Consultation',
                description: 'No-obligation project discussion',
                icon: '💬',
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear, upfront project costs',
                icon: '💰',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}