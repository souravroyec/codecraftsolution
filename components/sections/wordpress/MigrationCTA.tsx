'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const guarantees = [
  'Zero downtime migration',
  'SEO rankings preserved',
  'Content migration included',
  '30-day support included',
  'Performance guarantee',
  'Money-back guarantee'
];

export function MigrationCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/20 to-red-500/20" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-400/30 to-blue-400/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white mb-8"
          >
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Limited Time: Free Migration Audit</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform
            <br />
            Your{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              WordPress
            </span>{' '}
            Site?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Get a free migration audit and discover how much faster, safer, and more cost-effective 
            your website could be with Next.js. No obligations, just insights.
          </motion.p>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
          >
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-300">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">{guarantee}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button 
              size="lg" 
              asChild 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-8 text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 border-0"
            >
              <Link href="/contact" className="flex items-center space-x-3">
                <Calendar className="h-6 w-6" />
                <span>Get Free Migration Audit</span>
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
                <span>See Migration Examples</span>
              </Link>
            </Button>
          </motion.div>

          {/* Pricing Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Basic Migration</h3>
                <div className="text-3xl font-bold text-white mb-2">$2,500</div>
                <p className="text-gray-300 text-sm">Simple blog/brochure sites</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-400/50 transform scale-105">
              <div className="text-center">
                <div className="inline-block bg-orange-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
                  Most Popular
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Complete Migration</h3>
                <div className="text-3xl font-bold text-white mb-2">$5,000</div>
                <p className="text-gray-300 text-sm">Full sites with custom features</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-white mb-2">Custom</div>
                <p className="text-gray-300 text-sm">Large, complex sites</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm mt-8 max-w-2xl mx-auto"
          >
            * Pricing varies based on site complexity. All migrations include content transfer, 
            SEO preservation, performance optimization, and 30-day support.
          </motion.p>
        </div>
      </div>
    </section>
  );
}