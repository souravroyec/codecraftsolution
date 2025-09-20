'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Give us a call for immediate assistance',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email and we\'ll respond quickly',
    value: 'hello@codecraft-solutions.com',
    href: 'mailto:hello@codecraft-solutions.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat with us on WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Calendar,
    title: 'Schedule Call',
    description: 'Book a free consultation call',
    value: 'Schedule Now',
    href: '/schedule',
    color: 'from-purple-500 to-pink-500',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/codecraft-solutions',
    icon: Linkedin,
    color: 'hover:bg-blue-600',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/codecraft-solutions',
    icon: Github,
    color: 'hover:bg-gray-800',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/codecraft_dev',
    icon: Twitter,
    color: 'hover:bg-blue-400',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block group"
            >
              <Card className="hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} p-3 group-hover:scale-110 transition-transform duration-200`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                      <p className="text-teal-600 font-medium">{method.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Office Info */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-gray-900">
            <MapPin className="h-5 w-5 text-teal-600" />
            <span>Our Office</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-gray-900 font-medium mb-1">CodeCraft Solutions</p>
            <p className="text-gray-600">Asansol, West Bengal, India</p>
            <p className="text-sm text-gray-500">Timezone: IST (UTC +5:30)</p>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-4 w-4 text-teal-600" />
            <span className="text-sm">Mon - Fri: 9:00 AM - 7:00 PM IST</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-4 w-4 text-teal-600" />
            <span className="text-sm">Sat - Sun: Emergency support only</span>
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900">Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-gray-100 text-gray-600 transition-all duration-200 ${social.color} hover:text-white hover:scale-110`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Stay updated with our latest projects and insights
          </p>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-blue-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
          <div className="space-y-3">
            {[
              { label: 'Response Time', value: '< 24 hours' },
              { label: 'Project Success Rate', value: '100%' },
              { label: 'Client Satisfaction', value: '5/5 stars' },
              { label: 'Years of Experience', value: '5+' },
            ].map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600">{stat.label}</span>
                <span className="font-semibold text-teal-600">{stat.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}