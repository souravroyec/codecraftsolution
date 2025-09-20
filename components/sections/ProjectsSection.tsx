'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Banking Application',
    description: 'Modern digital banking platform with real-time transactions, account management, and comprehensive financial dashboard.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    metrics: { users: '10K+', uptime: '99.9%', performance: '95' },
    category: 'Web Application',
    featured: true
  },
  {
    id: 2,
    title: 'Zomato Clone with Reels',
    description: 'Food delivery app with Instagram-style reels for restaurants, real-time ordering, and social features.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'MERN', 'Socket.io', 'AWS'],
    metrics: { users: '5K+', orders: '50K+', rating: '4.8' },
    category: 'Mobile App',
    featured: true
  },
  {
    id: 3,
    title: 'AI Shorts Generator',
    description: 'AI-powered platform that automatically generates short-form videos from long content using machine learning.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'OpenAI', 'FFmpeg', 'AWS'],
    metrics: { videos: '100K+', users: '15K+', accuracy: '92%' },
    category: 'AI/ML',
    featured: true
  },
  {
    id: 4,
    title: 'Enterprise LMS',
    description: 'Comprehensive learning management system with course creation, progress tracking, and analytics.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: { students: '25K+', courses: '500+', completion: '85%' },
    category: 'Enterprise',
    featured: false
  },
  {
    id: 5,
    title: 'E-commerce Backend',
    description: 'Scalable microservices architecture for high-traffic e-commerce with inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Node.js', 'Microservices', 'Kubernetes', 'Redis'],
    metrics: { requests: '1M+', latency: '50ms', availability: '99.9%' },
    category: 'Backend',
    featured: false
  },
  {
    id: 6,
    title: 'WordPress to Next.js Migration',
    description: 'Complete migration of a high-traffic blog from WordPress to Next.js with 300% performance improvement.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Headless CMS', 'SEO', 'Performance'],
    metrics: { improvement: '300%', seo: '+40%', bounce: '-60%' },
    category: 'Migration',
    featured: false
  },
];

const categories = ['All', 'Web Application', 'Mobile App', 'AI/ML', 'Enterprise', 'Backend', 'Migration'];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
            <Star className="h-4 w-4" />
            <span>Award-Winning Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence 
            with innovative solutions and cutting-edge technology.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4" />
                          <span className="font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" asChild className="group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <Link href={`/projects/${project.id}`} className="flex items-center space-x-2">
                    <span>View Case Study</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/projects/${project.id}`} className="flex items-center space-x-1">
                      <span>Details</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                  <div className="flex space-x-2">
                    <ExternalLink className="h-4 w-4 text-gray-400 hover:text-teal-600 cursor-pointer transition-colors" />
                    <Github className="h-4 w-4 text-gray-400 hover:text-teal-600 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
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
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/projects" className="flex items-center space-x-2">
                <span>View All Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-gray-300 hover:border-teal-500 px-8 py-6 rounded-2xl hover:bg-teal-50 transition-all duration-300">
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}