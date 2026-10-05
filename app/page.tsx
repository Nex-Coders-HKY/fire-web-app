'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Guidance } from '@/components/Guidance';
import { Catalogue } from '@/components/Catalogue';
import { Projects } from '@/components/Projects';
import { Refilling } from '@/components/Refilling';
import { Materials } from '@/components/Materials';
import { Reviews } from '@/components/Reviews';
import { QuoteWizard } from '@/components/QuoteWizard';
import { Footer } from '@/components/Footer';
import OwnerProfile from '@/components/OwnerProfile';
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white">
      {/* Navigation Header with Logo.png */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <OwnerProfile />
        <Hero />
        <Guidance />
        <Catalogue />
        <Projects />
        <Refilling />
        <Materials />
        <Reviews />
        <QuoteWizard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
