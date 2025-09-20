'use client';

import { motion } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const comparisons = [
  {
    feature: 'Loading Speed',
    wordpress: '3-5 seconds',
    nextjs: '0.8-1.2 seconds',
    wordpressGood: false,
    nextjsGood: true
  },
  {
    feature: 'SEO Performance',
    wordpress: 'Basic SEO plugins',
    nextjs: 'Built-in SEO optimization',
    wordpressGood: false,
    nextjsGood: true
  },
  {
    feature: 'Security',
    wordpress: 'Plugin vulnerabilities',
    nextjs: 'Static & secure',
    wordpressGood: false,
    nextjsGood: true
  },
  {
    feature: 'Hosting Cost',
    wordpress: '$20-100/month',
    nextjs: '$0-10/month',
    wordpressGood: false,
    nextjsGood: true
  },
  {
    feature: 'Maintenance',
    wordpress: 'Regular updates needed',
    nextjs: 'Minimal maintenance',
    wordpressGood: false,
    nextjsGood: true
  },
  {
    feature: 'Mobile Performance',
    wordpress: 'Theme dependent',
    nextjs: 'Mobile-first optimized',
    wordpressGood: false,
    nextjsGood: true
  },
  {
    feature: 'Scalability',
    wordpress: 'Server limitations',
    nextjs: 'Auto-scaling CDN',
    wordpressGood: false,
    nextjsGood: true
  },
  {
    feature: 'Content Management',
    wordpress: 'Familiar interface',
    nextjs: 'Modern headless CMS',
    wordpressGood: true,
    nextjsGood: true
  }
];

export function MigrationComparison() {
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
          <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-700 mb-4">
            <Zap className="h-4 w-4" />
            <span>Side by Side Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            WordPress vs{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Next.js
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the clear advantages of migrating from WordPress to a modern Next.js application.
            Every metric shows significant improvement.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature Column */}
            <div className="hidden lg:block">
              <Card className="h-full">
                <CardHeader className="bg-gray-50 rounded-t-lg">
                  <CardTitle className="text-center text-gray-900">Features</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {comparisons.map((item, index) => (
                    <div key={index} className="p-4 border-b border-gray-100 last:border-b-0">
                      <div className="font-medium text-gray-900">{item.feature}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* WordPress Column */}
            <div>
              <Card className="h-full border-red-200">
                <CardHeader className="bg-red-50 rounded-t-lg border-b border-red-200">
                  <CardTitle className="text-center text-red-700 flex items-center justify-center space-x-2">
                    <span>WordPress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {comparisons.map((item, index) => (
                    <div key={index} className="p-4 border-b border-gray-100 last:border-b-0">
                      <div className="lg:hidden font-medium text-gray-900 mb-2">{item.feature}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">{item.wordpress}</span>
                        {item.wordpressGood ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Next.js Column */}
            <div>
              <Card className="h-full border-green-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-t-lg border-b border-green-200">
                  <CardTitle className="text-center bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent flex items-center justify-center space-x-2">
                    <span>Next.js</span>
                    <Zap className="h-5 w-5 text-teal-600" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {comparisons.map((item, index) => (
                    <div key={index} className="p-4 border-b border-gray-100 last:border-b-0 bg-gradient-to-r from-green-50/50 to-blue-50/50">
                      <div className="lg:hidden font-medium text-gray-900 mb-2">{item.feature}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">{item.nextjs}</span>
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { metric: '300%', label: 'Faster Loading', color: 'from-yellow-500 to-orange-500' },
            { metric: '40%', label: 'Better SEO', color: 'from-green-500 to-emerald-500' },
            { metric: '90%', label: 'Cost Reduction', color: 'from-blue-500 to-cyan-500' },
            { metric: '99.9%', label: 'Uptime', color: 'from-purple-500 to-pink-500' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.metric}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}