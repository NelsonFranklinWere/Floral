'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Palette, Shield, Gift } from 'lucide-react'

const TrustBadgesSection: React.FC = () => {
  const badges = [
    {
      icon: Truck,
      title: 'Same-Day Delivery Nairobi-Wide',
      description: 'Fast and reliable delivery across the city',
    },
    {
      icon: Palette,
      title: 'Custom Floral Arrangements',
      description: 'Personalized designs for every occasion',
    },
    {
      icon: Shield,
      title: 'Secure & Easy Payments',
      description: 'Safe transactions with multiple options',
    },
    {
      icon: Gift,
      title: 'Surprise Setup Packages',
      description: 'Complete surprise delivery solutions',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-romantic-50">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-romantic-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-playfair font-semibold mb-2 text-neutral-800">
                  {badge.title}
                </h3>
                
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBadgesSection
