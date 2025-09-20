'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Sparkles, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '5+', label: 'Years Experience' },
];

const floatingIcons = [
  { icon: Sparkles, delay: 0, x: 20, y: 30 },
  { icon: Zap, delay: 0.5, x: -30, y: 20 },
  { icon: Globe, delay: 1, x: 40, y: -20 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.6, 
              scale: 1,
              x: [0, item.x, 0],
              y: [0, item.y, 0],
            }}
            transition={{ 
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{ 
              top: `${20 + index * 15}%`, 
              left: `${10 + index * 20}%` 
            }}
          >
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <item.icon className="h-6 w-6 text-teal-600" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-medium text-teal-700 mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>Trusted by 50+ businesses worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Modern Web,{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Automation
            </span>{' '}
            <br className="hidden sm:block" />
            & AI Solutions
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We transform your digital presence with cutting-edge web development, 
            AI-powered automation, and seamless WordPress migrations to modern tech stacks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Free Scope Call</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="border-2 border-gray-300 hover:border-teal-500 px-8 py-6 text-lg rounded-2xl hover:bg-teal-50 transition-all duration-300">
              <Link href="/projects" className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-teal-600" />
                <span>See Our Work</span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-3xl transform rotate-2" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 border border-gray-200/50 backdrop-blur-sm">
                <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-gray-400 ml-4">CodeCraft Solutions - Terminal</span>
                  </div>
                  <div className="text-green-400">
                    <div className="mb-2">$ npm run build</div>
                    <div className="text-gray-500 mb-2">✓ Creating optimized production build...</div>
                    <div className="text-gray-500 mb-2">✓ Analyzing and optimizing bundles...</div>
                    <div className="text-blue-400 mb-2">✓ Build completed successfully!</div>
                    <div className="text-white">Ready for deployment 🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}