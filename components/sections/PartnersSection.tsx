'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'MongoDB',
    logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
    description: 'Database Solutions'
  },
  {
    name: 'AWS',
    logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
    description: 'Cloud Infrastructure'
  },
  {
    name: 'Vercel',
    logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
    description: 'Deployment Platform'
  },
  {
    name: 'OpenAI',
    logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
    description: 'AI Integration'
  },
  {
    name: 'Stripe',
    logo: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
    description: 'Payment Processing'
  },
  {
    name: 'Docker',
    logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
    description: 'Containerization'
  },
];

const technologies = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'MongoDB',
  'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'GraphQL',
  'React Native', 'Kotlin', 'OpenAI', 'n8n', 'Stripe', 'Vercel'
];

export function PartnersSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Technologies</span> & Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with industry-leading platforms and technologies to deliver 
            cutting-edge solutions that scale with your business.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative h-20 w-full mb-4 rounded-xl overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{partner.name.slice(0, 3)}</span>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Technologies We Master
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-700 font-medium shadow-md hover:shadow-lg hover:bg-teal-50 hover:text-teal-700 transition-all duration-200 cursor-default border border-gray-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '18+', label: 'Technologies Mastered', icon: '🔧' },
            { value: '50+', label: 'Integrations Built', icon: '🔗' },
            { value: '99.9%', label: 'System Uptime', icon: '📈' },
            { value: '24/7', label: 'Technical Support', icon: '💬' },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
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