'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import HeroSection from '@/components/sections/HeroSection'
import TrustBadgesSection from '@/components/sections/TrustBadgesSection'
import AboutSnippetSection from '@/components/sections/AboutSnippetSection'
import CollectionsSection from '@/components/sections/CollectionsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection'
import CallToActionBanner from '@/components/sections/CallToActionBanner'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>
      
      {/* Trust Badges */}
      <TrustBadgesSection />
      
      {/* About Snippet */}
      <AboutSnippetSection />
      
      {/* Featured Collections */}
      <CollectionsSection />
      
      {/* Customer Testimonials */}
      <TestimonialsSection />
      
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      
      {/* Gallery Preview */}
      <GalleryPreviewSection />
      
      {/* Call to Action Banner */}
      <CallToActionBanner />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
