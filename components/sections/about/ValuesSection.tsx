'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Zap, Users, Target, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Client-Centric Approach',
    description: 'We put our clients at the heart of everything we do, ensuring their success is our primary goal.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    description: 'We deliver robust, secure, and scalable solutions that stand the test of time.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Innovation & Excellence',
    description: 'We stay ahead of the curve, embracing new technologies and best practices.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, fostering open communication and collaboration.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that drive your business forward.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'We constantly evolve our skills and knowledge to provide cutting-edge solutions.',
    color: 'from-teal-500 to-blue-500'
  }
];

export function ValuesSection() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide every decision we make and every project we undertake. 
            They're not just words on a page – they're the foundation of who we are.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-teal-900 to-blue-900 rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500/20 to-blue-500/20" />
              <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-teal-400/30 to-blue-400/30 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto opacity-90">
                "To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting value in an ever-evolving digital landscape."
              </p>
              
              <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-teal-300" />
                </div>
                <div className="text-teal-300 font-medium">
                  Built with passion, delivered with excellence
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}