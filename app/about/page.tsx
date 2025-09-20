import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { FoundersSection } from '@/components/sections/about/FoundersSection';
import { JourneySection } from '@/components/sections/about/JourneySection';
import { ValuesSection } from '@/components/sections/about/ValuesSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Us | CodeCraft Solutions',
  description: 'Meet the founders of CodeCraft Solutions - Subhrajit Mukherjee and Saurav Roy. Learn about our journey, values, and passion for creating exceptional digital experiences.',
  keywords: 'about CodeCraft Solutions, Subhrajit Mukherjee, Saurav Roy, web development team, MERN stack developers',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHero />
      <FoundersSection />
      <JourneySection />
      <ValuesSection />
      <CTASection />
    </div>
  );
}