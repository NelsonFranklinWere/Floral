'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Users, Award, Clock } from 'lucide-react'
import { brandInfo } from '@/lib/theme'

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Happy Customers', icon: Users },
    { number: '1000+', label: 'Deliveries Made', icon: Heart },
    { number: '5★', label: 'Average Rating', icon: Award },
    { number: '24/7', label: 'Customer Support', icon: Clock },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mwangi',
      location: 'Westlands',
      text: 'Floral Whispers transformed my wedding day with the most beautiful arrangements. Their attention to detail and professionalism exceeded all my expectations.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'James Kimani',
      location: 'Kilimani',
      text: 'I\'ve been ordering from Floral Whispers for over a year now. Every bouquet is fresh, beautiful, and delivered on time. They never disappoint!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      location: 'Lavington',
      text: 'The money bouquet they created for my daughter\'s graduation was absolutely stunning. Everyone was amazed by the creativity and presentation.',
      rating: 5,
      avatar: '👩‍🎓',
    },
    {
      id: 4,
      name: 'David Ochieng',
      location: 'Karen',
      text: 'Their event decoration service is outstanding. They turned our corporate event into something truly memorable with their floral arrangements.',
      rating: 5,
      avatar: '👨‍💻',
    },
  ]

  const team = [
    {
      name: 'Our Creative Team',
      role: 'Floral Designers',
      description: 'Our talented designers bring years of experience and passion to every arrangement.',
    },
    {
      name: 'Customer Care Team',
      role: 'Support Specialists',
      description: 'Dedicated professionals ensuring every customer experience is exceptional.',
    },
    {
      name: 'Delivery Team',
      role: 'Logistics Experts',
      description: 'Reliable delivery specialists who ensure your flowers arrive fresh and on time.',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-romantic-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500 rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-romantic-500 rounded-full" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-gradient">
              About Floral Whispers Gifts
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind Nairobi's most trusted floral and gift brand
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
                Our Story
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Founded in Nairobi, Floral Whispers Gifts began with a dream to make gift-giving personal again.
              </p>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We started with simple bouquets and have since grown into one of Nairobi's trusted flower and gift brands 
                known for creativity, reliability, and care. What began as a small passion project has evolved into a 
                comprehensive floral service that touches hearts across the city.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our journey has been marked by countless smiles, tears of joy, and moments of celebration. From intimate 
                birthday surprises to grand wedding ceremonies, we've had the privilege of being part of life's most 
                precious moments. Each arrangement tells a story, and we're honored to be the storytellers.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Today, we continue to innovate and expand our services while maintaining the personal touch that has 
                made us a beloved part of the Nairobi community. Our commitment to quality, freshness, and exceptional 
                service remains unchanged.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-br from-cream-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-romantic-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-romantic-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-playfair font-bold mb-4 text-gradient">Our Mission</h3>
                    </div>
                    <p className="text-lg text-neutral-700 leading-relaxed text-center">
                      To craft moments that connect hearts through flowers and gifts. We believe that every 
                      arrangement should tell a story and create lasting memories that bring people closer together.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-romantic-100 to-primary-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-romantic-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-playfair font-bold mb-4 text-gradient">Our Vision</h3>
                    </div>
                    <p className="text-lg text-neutral-700 leading-relaxed text-center">
                      To be Kenya's leading brand in meaningful gifting, setting the standard for creativity, 
                      quality, and customer service in the floral industry while spreading joy throughout our communities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              The Floral Whispers Experience
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes our service exceptional and our team extraordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-playfair font-bold mb-6 text-gradient">Our Process</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Consultation & Planning</h4>
                    <p className="text-neutral-600">We listen to your needs and preferences to understand the perfect arrangement for your occasion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Design & Creation</h4>
                    <p className="text-neutral-600">Our skilled florists handcraft each arrangement with fresh flowers and artistic precision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quality Check & Delivery</h4>
                    <p className="text-neutral-600">Every arrangement undergoes quality inspection before being carefully delivered to your doorstep.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-playfair font-bold mb-6 text-gradient">Our People</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
                {team.map((member, index) => (
                  <div key={index} className="bg-gradient-to-r from-primary-50 to-romantic-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 text-neutral-800">{member.name}</h4>
                    <p className="text-primary-600 font-medium mb-2 text-sm sm:text-base">{member.role}</p>
                    <p className="text-neutral-600 text-sm sm:text-base">{member.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-romantic-500">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
              Our Impact
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 group hover:scale-105">
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/90 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
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

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: testimonial.id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-50 to-romantic-50 rounded-full -translate-y-12 translate-x-12 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                        ))}
                      </div>
                      <blockquote className="text-lg text-neutral-700 mb-6 leading-relaxed text-center">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="text-center">
                        <div className="text-4xl mb-3">{testimonial.avatar}</div>
                        <h4 className="font-playfair font-semibold text-lg text-neutral-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-neutral-600 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
              Ready to Experience the Art of Gifting?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let us help you create beautiful moments and lasting memories with our exceptional floral arrangements.
            </p>
            <Button
              size="lg"
              className="bg-white text-romantic-500 hover:bg-romantic-50 hover:text-romantic-600 shadow-2xl group"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello! I'd like to learn more about your floral services and place an order."
                )
                window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
              }}
            >
              Order Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
