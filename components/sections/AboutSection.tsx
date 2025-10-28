'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-cream-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Crafted with Care, Delivered with Love
            </h2>
            
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                At Floral Whispers Gifts, we believe that every moment deserves to be celebrated 
                with beauty and emotion. Our passion for floral artistry transforms ordinary occasions 
                into extraordinary memories.
              </p>
              
              <p>
                From intimate birthday surprises to grand wedding celebrations, we bring the perfect 
                blend of fresh blooms, creative arrangements, and heartfelt service to every order. 
                Our handcrafted bouquets and custom gifts are designed to convey your emotions 
                when words fall short.
              </p>
              
              <p>
                Based in Nairobi, we serve the entire city with same-day delivery, ensuring your 
                special moments are never missed. Every arrangement tells a story, and we're 
                honored to be part of yours.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-primary-600">
                <span className="text-2xl">🌸</span>
                <span className="font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <span className="text-2xl">🎨</span>
                <span className="font-medium">Handcrafted</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <span className="text-2xl">💝</span>
                <span className="font-medium">Personalized</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card hover className="overflow-hidden">
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/images/arrangements/amazing, beatiful,mixedmoneyboquetflower1.png"
                  alt="Beautiful floral arrangement crafted with care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-playfair font-semibold mb-2">
                    Signature Arrangement
                  </h3>
                  <p className="text-neutral-600">
                    Our most popular mixed bouquet, featuring seasonal blooms and elegant styling
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-romantic-200 rounded-full opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
