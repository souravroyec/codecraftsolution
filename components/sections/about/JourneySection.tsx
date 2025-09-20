'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, Rocket, Star } from 'lucide-react';

const milestones = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Subhrajit and Saurav met during their computer science studies and discovered their shared passion for web development.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2020',
    title: 'First Collaboration',
    description: 'Started working together on freelance projects, building websites for local businesses and learning the ropes of client management.',
    icon: Rocket,
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: '2021',
    title: 'Skill Expansion',
    description: 'Expanded expertise into mobile app development, AI integration, and modern frameworks like Next.js and React Native.',
    icon: Star,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '2022',
    title: 'CodeCraft Solutions',
    description: 'Officially founded CodeCraft Solutions, establishing our brand and focusing on delivering high-quality digital solutions.',
    icon: Trophy,
    color: 'from-orange-500 to-red-500'
  },
  {
    year: '2023',
    title: 'Growth & Recognition',
    description: 'Reached 30+ successful projects, expanded our service offerings, and built a reputation for excellence in the industry.',
    icon: MapPin,
    color: 'from-teal-500 to-blue-500'
  },
  {
    year: '2024',
    title: 'Innovation Focus',
    description: 'Specialized in AI automation, WordPress migrations, and cutting-edge web technologies, serving 50+ satisfied clients.',
    icon: Calendar,
    color: 'from-indigo-500 to-purple-500'
  }
];

export function JourneySection() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From college friends to business partners, here's how we built CodeCraft Solutions 
            into a trusted name in web development and digital innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-blue-400 transform -translate-x-px" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-teal-600 shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 lg:w-1/2 ml-6 lg:ml-0 ${
                index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
              }`}>
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border-l-4 border-teal-400 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                      {milestone.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-teal-600 font-bold bg-teal-50 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4" />
                      <span>{milestone.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-teal-200"
        >
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Today & Beyond
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We continue to push boundaries, embrace new technologies, and help businesses 
              transform their digital presence. Our journey is just getting started!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}