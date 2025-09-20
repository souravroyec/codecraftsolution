import Link from 'next/link';
import { Code, Mail, MapPin, Phone, Linkedin, Github, Twitter } from 'lucide-react';

const navigation = {
  services: [
    { name: 'MERN Stack Development', href: '/services#mern' },
    { name: 'Next.js Applications', href: '/services#nextjs' },
    { name: 'AI Automation & n8n', href: '/services#ai-automation' },
    { name: 'WordPress Migration', href: '/wordpress-migration' },
    { name: 'Mobile App Development', href: '/services#mobile' },
    { name: 'Bug Fixes & Maintenance', href: '/services#maintenance' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/codecraft-solutions', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/codecraft-solutions', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/codecraft_dev', icon: Twitter },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                CodeCraft <span className="text-teal-400">Solutions</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              We transform ideas into powerful digital experiences. Specializing in modern web development, 
              AI automation, and seamless WordPress migrations to cutting-edge technologies.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>Asansol, West Bengal, India (IST)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href="mailto:hello@codecraft-solutions.com" className="hover:text-teal-400 transition-colors">
                  hello@codecraft-solutions.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <a href="tel:+919876543210" className="hover:text-teal-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {navigation.social.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-800 hover:bg-teal-600 transition-colors duration-200 group"
                    >
                      <IconComponent className="h-4 w-4 text-gray-300 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CodeCraft Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}