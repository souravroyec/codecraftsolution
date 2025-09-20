'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code2, 
  Smartphone, 
  Bot, 
  Wrench, 
  Palette, 
  Repeat,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Code2,
    title: 'MERN & Next.js Apps',
    description: 'Full-stack web applications with modern React frameworks, MongoDB, Express, and Node.js for scalable solutions.',
    features: ['React/Next.js Frontend', 'Node.js Backend', 'MongoDB Database', 'RESTful APIs'],
    color: 'from-blue-500 to-cyan-500',
    href: '/services#mern'
  },
  {
    icon: Bot,
    title: 'AI Automation & n8n',
    description: 'Streamline your workflows with intelligent automation using n8n, AI integrations, and custom business logic.',
    features: ['Workflow Automation', 'AI Integration', 'API Connections', 'Custom Triggers'],
    color: 'from-purple-500 to-pink-500',
    href: '/services#ai-automation'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps using React Native and native Android development with Kotlin.',
    features: ['React Native', 'Kotlin Android', 'Cross-platform', 'Native Performance'],
    color: 'from-green-500 to-emerald-500',
    href: '/services#mobile'
  },
  {
    icon: Repeat,
    title: 'WordPress → Next.js',
    description: 'Transform your WordPress site into a lightning-fast, modern Next.js application with headless CMS.',
    features: ['Content Migration', 'Performance Boost', 'Modern UI', 'SEO Optimization'],
    color: 'from-orange-500 to-red-500',
    href: '/wordpress-migration'
  },
  {
    icon: Palette,
    title: 'Landing Pages',
    description: 'High-converting landing pages optimized for performance, SEO, and user experience.',
    features: ['Conversion Optimization', 'Fast Loading', 'Mobile First', 'A/B Testing'],
    color: 'from-teal-500 to-blue-500',
    href: '/services#landing-pages'
  },
  {
    icon: Wrench,
    title: 'Bug Fixes & Maintenance',
    description: 'Keep your applications running smoothly with our comprehensive maintenance and bug fixing services.',
    features: ['Code Debugging', '24/7 Monitoring', 'Performance Tuning', 'Security Updates'],
    color: 'from-gray-500 to-gray-700',
    href: '/services#maintenance'
  },
];

export function ServicesSection() {
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
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-medium text-teal-700 mb-4">
            <CheckCircle className="h-4 w-4" />
            <span>Complete Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end development services 
            that drive growth and innovation for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-4">
                  <Button variant="ghost" size="sm" asChild className="w-full group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                    <Link href={service.href} className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <Link href="/contact" className="flex items-center space-x-2">
              <span>Get Custom Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}