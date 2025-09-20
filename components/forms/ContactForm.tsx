'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const services = [
  'MERN Stack Development',
  'Next.js Application',
  'AI Automation & n8n',
  'WordPress Migration',
  'Mobile App Development',
  'Bug Fixes & Maintenance',
  'Custom Solution',
];

const budgets = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $30,000',
  '$30,000 - $50,000',
  'Above $50,000',
  'Not Sure Yet',
];

const timelines = [
  'ASAP (Rush)',
  '1-2 weeks',
  '1 month',
  '2-3 months',
  '3-6 months',
  'Flexible',
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="shadow-2xl border-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Get Your Free Project Quote
        </CardTitle>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Doe"
                required
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="john@company.com"
                required
                className="h-12"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Your Company"
                className="h-12"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <Label>Service Required *</Label>
            <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Estimated Budget</Label>
              <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgets.map((budget) => (
                    <SelectItem key={budget} value={budget}>
                      {budget}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Project Timeline</Label>
              <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="When do you need this?" />
                </SelectTrigger>
                <SelectContent>
                  {timelines.map((timeline) => (
                    <SelectItem key={timeline} value={timeline}>
                      {timeline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Project Description *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              rows={5}
              required
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Thank you! We'll get back to you within 24 hours.</span>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
            >
              <AlertCircle className="h-5 w-5" />
              <span>There was an error sending your message. Please try again.</span>
            </motion.div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={status === 'loading'}
            className="w-full h-14 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {status === 'loading' ? (
              <>
                <Loader className="h-5 w-5 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Message & Get Quote
              </>
            )}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy. 
            We'll never share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}