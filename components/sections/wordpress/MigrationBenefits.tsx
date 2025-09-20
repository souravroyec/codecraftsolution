'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  DollarSign, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning-Fast Performance',
    description: 'Next.js delivers 300% faster loading times with optimized images, code splitting, and static generation.',
    metrics: ['0.8s avg load time', '95+ PageSpeed score', '50ms server response'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    title: 'Superior SEO Rankings',
    description: 'Server-side rendering and optimized performance boost your search engine visibility significantly.',
    metrics: ['40% better rankings', '90+ Core Web Vitals', 'Rich snippets support'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Eliminate WordPress vulnerabilities with a static, secure architecture that\'s virtually unhackable.',
    metrics: ['0 plugin vulnerabilities', '99.9% uptime', 'DDoS protection'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive, modern UI that looks perfect on all devices with touch-optimized interactions.',
    metrics: ['100% mobile friendly', '60fps animations', 'Touch gestures'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: DollarSign,
    title: 'Reduced Hosting Costs',
    description: 'Static hosting costs 90% less than traditional WordPress hosting with better performance.',
    metrics: ['90% cost reduction', 'CDN included', 'Auto-scaling'],
    color: 'from-teal-500 to-blue-500'
  },
  {
    icon: Globe,
    title: 'Better User Experience',
    description: 'Instant navigation, smooth animations, and modern interactions keep users engaged longer.',
    metrics: ['60% lower bounce rate', '+2min session time', '4.8/5 user rating'],
    color: 'from-red-500 to-pink-500'
  }
];

export function MigrationBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm font-medium text-green-700 mb-4">
            <CheckCircle className="h-4 w-4" />
            <span>Migration Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Migrate from{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              WordPress
            </span>{' '}
            to{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Next.js
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your website into a high-performance, secure, and scalable modern application 
            that delivers exceptional user experiences and drives better business results.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${benefit.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {benefit.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Real Performance Results
            </h3>
            <p className="text-gray-300 text-lg">
              See the dramatic improvements our clients experience after migration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Before WordPress */}
            <div className="text-center">
              <div className="bg-red-500/20 rounded-2xl p-6 mb-4">
                <h4 className="text-xl font-bold text-red-300 mb-4">WordPress Before</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Load Time:</span>
                    <span className="text-red-300 font-bold">3.2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PageSpeed:</span>
                    <span className="text-red-300 font-bold">45/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Score:</span>
                    <span className="text-red-300 font-bold">C-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Cost:</span>
                    <span className="text-red-300 font-bold">$50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                <ArrowRight className="h-12 w-12 text-teal-400 mb-2" />
                <span className="text-teal-400 font-semibold">MIGRATION</span>
              </div>
            </div>

            {/* After Next.js */}
            <div className="text-center">
              <div className="bg-green-500/20 rounded-2xl p-6 mb-4">
                <h4 className="text-xl font-bold text-green-300 mb-4">Next.js After</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Load Time:</span>
                    <span className="text-green-300 font-bold">0.8s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PageSpeed:</span>
                    <span className="text-green-300 font-bold">95/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Score:</span>
                    <span className="text-green-300 font-bold">A+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Cost:</span>
                    <span className="text-green-300 font-bold">$5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-teal-500/20 rounded-full px-6 py-3">
              <Zap className="h-5 w-5 text-teal-400" />
              <span className="text-teal-300 font-semibold">300% Performance Improvement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}