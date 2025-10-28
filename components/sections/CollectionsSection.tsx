'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { collections } from '@/lib/theme'
import { ArrowRight } from 'lucide-react'

const CollectionsSection: React.FC = () => {
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
    <section id="collections" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Our Collections
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of floral arrangements and gifts, 
            each designed to bring joy and beauty to your special moments.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {collections.map((collection, index) => (
            <motion.div key={collection.id} variants={itemVariants}>
              <Card hover className="h-full group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {collection.id.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold mb-3 text-neutral-800">
                    {collection.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500"
                    onClick={() => {
                      if (collection.href === '#contact') {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    View More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-romantic-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-playfair font-bold mb-4 text-neutral-800">
              Need Something Special?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              We love creating custom arrangements for unique occasions. 
              Let us know what you have in mind and we'll bring your vision to life.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-500 to-romantic-500 hover:from-primary-600 hover:to-romantic-600 text-white shadow-2xl"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello! I'd like to discuss a custom floral arrangement. Could you please tell me more about your custom options?"
                )
                window.open(`https://wa.me/+254729xxxxxx?text=${message}`, '_blank')
              }}
            >
              Request Custom Order
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollectionsSection
