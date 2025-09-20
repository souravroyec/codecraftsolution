'use client';

import { motion } from 'framer-motion';
import { 
  Download, 
  Database, 
  Code, 
  Search, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Content Export & Analysis',
    description: 'We extract all your WordPress content, media, and analyze the site structure to plan the migration.',
    duration: '1-2 days',
    details: [
      'Export posts, pages, and custom fields',
      'Download all media files and optimize',
      'Analyze current site architecture',
      'Identify custom functionality to recreate'
    ]
  },
  {
    icon: Database,
    title: 'Headless CMS Setup',
    description: 'Set up a modern headless CMS (Sanity, Contentful, or Strapi) and migrate your content seamlessly.',
    duration: '2-3 days',
    details: [
      'Choose the best CMS for your needs',
      'Configure content models and schemas',
      'Migrate all content with metadata',
      'Set up content management workflows'
    ]
  },
  {
    icon: Code,
    title: 'Next.js Development',
    description: 'Build your new Next.js application with modern design, optimized performance, and enhanced features.',
    duration: '5-10 days',
    details: [
      'Responsive design implementation',
      'Component-based architecture',
      'Performance optimizations',
      'Modern UI/UX improvements'
    ]
  },
  {
    icon: Search,
    title: 'SEO & Performance Optimization',
    description: 'Implement SEO best practices, set up redirects, and optimize for maximum search engine visibility.',
    duration: '2-3 days',
    details: [
      '301 redirects for all URLs',
      'Meta tags and structured data',
      'Site map generation',
      'Core Web Vitals optimization'
    ]
  },
  {
    icon: Rocket,
    title: 'Launch & Monitoring',
    description: 'Deploy your new site, configure monitoring, and provide training on the new content management system.',
    duration: '1-2 days',
    details: [
      'Domain setup and DNS configuration',
      'SSL certificate installation',
      'Performance monitoring setup',
      'CMS training and documentation'
    ]
  }
];

export function MigrationProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            <Clock className="h-4 w-4" />
            <span>Migration Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Your Website
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step migration process ensures zero downtime, preserved SEO rankings, 
            and a seamless transition to your new Next.js website.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-blue-400 transform -translate-x-px" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-bold text-teal-600 shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 lg:w-1/2 ml-6 lg:ml-0 ${
                index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
              }`}>
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border-l-4 border-teal-400">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-teal-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Complete Migration Timeline
            </h3>
            <p className="text-lg text-gray-600">
              Typical migration completes in 2-3 weeks with zero downtime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">2-3 weeks</div>
              <div className="text-gray-600 font-medium">Total Timeline</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">0% downtime</div>
              <div className="text-gray-600 font-medium">Site Availability</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100% preserved</div>
              <div className="text-gray-600 font-medium">SEO & Content</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}