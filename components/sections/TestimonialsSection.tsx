'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Kevin',
      location: 'Westlands',
      text: 'Their bouquet was stunning — my wife loved it!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Alice',
      location: 'Lavington',
      text: 'Same-day delivery saved my anniversary!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 3,
      name: 'Brian',
      location: 'Kilimani',
      text: 'Perfect service, beautiful gifts!',
      rating: 5,
      avatar: '👨‍💻',
    },
  ]

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
    <section className="section-padding bg-gradient-to-br from-cream-50 to-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            What Our Customers Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real customers who experienced the magic of Floral Whispers Gifts
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card hover className="h-full">
                <CardContent className="p-8 text-center">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-neutral-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Avatar */}
                  <div className="text-4xl mb-3">{testimonial.avatar}</div>

                  {/* Customer Info */}
                  <div>
                    <h4 className="font-playfair font-semibold text-lg text-neutral-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
