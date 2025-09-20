'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Zap,
    title: '300% Faster',
    description: 'Lightning-fast loading times'
  },
  {
    icon: TrendingUp,
    title: 'Better SEO',
    description: '40% improvement in rankings'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'No more WordPress vulnerabilities'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Perfect responsive design'
  }
];

export function WordPressMigrationHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full px-4 py-2 text-sm font-medium text-orange-700 mb-8"
          >
            <Zap className="h-4 w-4" />
            <span>WordPress to Next.js Transformation</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Your{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              WordPress
            </span>
            <br className="hidden sm:block" />
            Into Modern{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Next.js
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Say goodbye to slow loading times, security vulnerabilities, and outdated designs. 
            We migrate your WordPress site to a blazing-fast, secure, and modern Next.js application.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 p-3">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</div>
                <div className="text-sm text-gray-600">{benefit.description}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Request Migration Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="border-2 border-gray-300 hover:border-orange-500 px-8 py-6 text-lg rounded-2xl hover:bg-orange-50 transition-all duration-300">
              <Link href="/projects" className="flex items-center space-x-2">
                <span>View Success Stories</span>
              </Link>
            </Button>
          </motion.div>

          {/* Before/After Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before - WordPress */}
              <div className="relative">
                <div className="absolute -top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                  Before: WordPress
                </div>
                <div className="bg-gray-100 rounded-2xl p-6 border-2 border-red-200 shadow-lg">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                    <div className="h-32 bg-gray-300 rounded animate-pulse"></div>
                    <div className="flex space-x-2">
                      <div className="h-3 bg-red-300 rounded flex-1"></div>
                      <div className="h-3 bg-red-300 rounded flex-1"></div>
                    </div>
                    <div className="text-center text-red-600 text-sm font-medium">
                      Loading... 3.2s ⚠️
                    </div>
                  </div>
                </div>
              </div>

              {/* After - Next.js */}
              <div className="relative">
                <div className="absolute -top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                  After: Next.js
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border-2 border-teal-200 shadow-xl">
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-teal-300 to-blue-300 rounded w-3/4"></div>
                    <div className="h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded flex items-center justify-center">
                      <div className="text-teal-600 font-semibold">✨ Instant Load</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 bg-green-400 rounded flex-1"></div>
                      <div className="h-3 bg-green-400 rounded flex-1"></div>
                    </div>
                    <div className="text-center text-green-600 text-sm font-medium">
                      Loaded! 0.8s ⚡
                    </div>
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