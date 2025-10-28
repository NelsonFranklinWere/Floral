'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const AboutSnippetSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Crafted with Care, Delivered with Love
            </h2>
            
            <p className="text-xl text-neutral-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              At Floral Whispers Gifts, every bouquet is more than a gift — it's a whisper of emotion. 
              We combine creativity, freshness, and Kenyan elegance to turn simple moments into 
              unforgettable memories.
            </p>

            <Button
              size="lg"
              variant="outline"
              className="group"
              onClick={() => window.location.href = '/about'}
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSnippetSection
