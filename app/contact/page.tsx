import { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | CodeCraft Solutions',
  description: 'Get in touch with our expert development team. Free consultation, transparent pricing, and quick response guaranteed.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Start Your <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Project</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch for a free consultation 
            and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}