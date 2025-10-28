'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { brandInfo } from '@/lib/theme'

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your floral services. Could you please tell me more about your bouquets and delivery options?"
    )
    window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  if (!isVisible) return null

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      onClick={handleClick}
      aria-label="WhatsApp Us"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  )
}

export default WhatsAppButton
