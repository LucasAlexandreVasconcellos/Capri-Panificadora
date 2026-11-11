import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { ShowcaseSection } from './components/ShowcaseSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { SpecialOrderModal } from './components/SpecialOrderModal';

export default function App() {
  const [isSpecialOrderOpen, setIsSpecialOrderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-[#C99B2E]/30 selection:text-[#F3E5AB]">
      {/* Header (Top Bar Contract: Brand - Nav Links - Action) */}
      <Header onOpenOrderModal={() => setIsSpecialOrderOpen(true)} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section with Real Photo & Trust Proof */}
        <Hero onOpenOrderModal={() => setIsSpecialOrderOpen(true)} />

        {/* Quick Info Bar: Hours, Address, Price, Phone */}
        <QuickInfoBar />

        {/* Business Specialties & Real Showcase Gallery */}
        <ShowcaseSection onOpenOrderModal={() => setIsSpecialOrderOpen(true)} />

        {/* History, Tradition & Essence */}
        <AboutSection />

        {/* Google Reviews 4.3★ & Testimonials */}
        <ReviewsSection />

        {/* Routes, Address, Coordinates & Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Special Catering / Cake Order Modal */}
      <SpecialOrderModal
        isOpen={isSpecialOrderOpen}
        onClose={() => setIsSpecialOrderOpen(false)}
      />
    </div>
  );
}
