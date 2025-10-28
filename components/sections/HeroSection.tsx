'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { brandInfo } from '@/lib/theme'
import { MessageCircle, Phone } from 'lucide-react'

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in your floral services. Please tell me more about your bouquets and delivery options.`
    )
    window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  const handleCallClick = () => {
    window.open(`tel:${brandInfo.phone}`, '_self')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Beautiful flower arrangements"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/hero/1flower.png"
          alt="Floating flower"
          width={80}
          height={80}
          className="opacity-80"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/hero/2flower.png"
          alt="Floating flower"
          width={100}
          height={100}
          className="opacity-80"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-balance">
            {brandInfo.name}
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-poppins font-light mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {brandInfo.tagline}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-poppins font-normal mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Delivering fresh flowers, money bouquets, and heartfelt gifts across Nairobi — crafted with love, elegance, and care.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="bg-white text-primary-500 hover:bg-primary-50 hover:text-primary-600 shadow-2xl"
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Collections
            </Button>
            
            <Button
              size="lg"
              variant="secondary"
              className="shadow-2xl"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Order on WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default HeroSection
