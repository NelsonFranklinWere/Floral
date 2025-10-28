'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle, ShoppingBag } from 'lucide-react'
import { brandInfo } from '@/lib/theme'

const CallToActionBanner: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to order flowers or gifts. Could you please help me with your available options?"
    )
    window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  const handleCollectionsClick = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full" />
        <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full" />
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-white rounded-full" />
        <div className="absolute bottom-32 right-10 w-20 h-20 bg-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
            Make Someone Smile Today
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            It takes one message to deliver joy — let us help you create a moment that will be remembered forever.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-white text-romantic-500 hover:bg-romantic-50 hover:text-romantic-600 shadow-2xl group"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Order Now on WhatsApp
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-romantic-500 shadow-2xl group"
              onClick={handleCollectionsClick}
            >
              <ShoppingBag className="w-6 h-6 mr-3" />
              Explore Collections
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span className="font-medium">Same-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span className="font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-medium">5-Star Service</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToActionBanner
