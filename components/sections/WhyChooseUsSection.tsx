'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { whyChooseUs } from '@/lib/theme'

const WhyChooseUsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
            Why Choose Us?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're committed to making your floral experience exceptional, 
            from the moment you place your order to the joy of delivery.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/30 hover:bg-white/30 transition-all duration-300 group-hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                
                <p className="text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/90">Happy Customers</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-white/90">Deliveries Made</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/90">Customer Support</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5★</div>
            <div className="text-white/90">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
