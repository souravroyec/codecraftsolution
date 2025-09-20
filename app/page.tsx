import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}