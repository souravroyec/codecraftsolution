import { Metadata } from 'next';
import { WordPressMigrationHero } from '@/components/sections/wordpress/WordPressMigrationHero';
import { MigrationBenefits } from '@/components/sections/wordpress/MigrationBenefits';
import { MigrationProcess } from '@/components/sections/wordpress/MigrationProcess';
import { MigrationComparison } from '@/components/sections/wordpress/MigrationComparison';
import { MigrationCTA } from '@/components/sections/wordpress/MigrationCTA';

export const metadata: Metadata = {
  title: 'WordPress to Next.js Migration | CodeCraft Solutions',
  description: 'Transform your WordPress site into a lightning-fast Next.js application. 300% faster loading, better SEO, enhanced security, and modern UI.',
  keywords: 'WordPress migration, Next.js, headless CMS, website performance, SEO optimization',
};

export default function WordPressMigrationPage() {
  return (
    <div className="pt-20">
      <WordPressMigrationHero />
      <MigrationBenefits />
      <MigrationComparison />
      <MigrationProcess />
      <MigrationCTA />
    </div>
  );
}