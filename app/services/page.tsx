'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Flower2, Gift, Calendar, Truck, Sparkles, MessageCircle, Phone, CheckCircle, Users, Clock, Award } from 'lucide-react'
import { brandInfo } from '@/lib/theme'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set())

  const toggleServiceExpand = (serviceId: string) => {
    setExpandedServices(prev => {
      const next = new Set(prev)
      if (next.has(serviceId)) {
        next.delete(serviceId)
      } else {
        next.add(serviceId)
      }
      return next
    })
  }

  const coreServices = [
    {
      id: 'custom-bouquets',
      title: 'Customized Bouquets',
      icon: Flower2,
      description: 'Personalized floral arrangements tailored to your specific needs and preferences.',
      features: [
        'Fresh flowers sourced daily',
        'Custom color combinations',
        'Professional arrangement techniques',
        'Beautiful presentation packaging'
      ],
      price: 'From KES 2,500'
    },
    {
      id: 'money-bouquets',
      title: 'Money Bouquets',
      icon: Gift,
      description: 'Creative money arrangements for graduations, birthdays, and special celebrations.',
      features: [
        'Various denomination options',
        'Creative folding techniques',
        'Beautiful presentation boxes',
        'Custom message cards'
      ],
      price: 'From KES 5,000'
    },
    {
      id: 'corporate-gifts',
      title: 'Corporate Gift Packages',
      icon: Users,
      description: 'Professional gift packages for corporate events, client appreciation, and team celebrations.',
      features: [
        'Premium gift selections',
        'Elegant packaging',
        'Customizable contents',
        'Bulk order discounts'
      ],
      price: 'From KES 3,500'
    },
    {
      id: 'event-decor',
      title: 'Event Décor & Floral Setup',
      icon: Calendar,
      description: 'Complete event decoration services for weddings, parties, and corporate events.',
      features: [
        'Full event planning',
        'Venue decoration',
        'Centerpiece arrangements',
        'Professional setup and cleanup'
      ],
      price: 'From KES 15,000'
    },
    {
      id: 'same-day-delivery',
      title: 'Same-Day Delivery',
      icon: Truck,
      description: 'Fast and reliable delivery service across Nairobi with real-time tracking.',
      features: [
        'Same-day delivery service',
        'Real-time tracking',
        'Careful handling',
        'Flexible timing options'
      ],
      price: 'KES 500 - 1,500'
    },
    {
      id: 'custom-surprise',
      title: 'Custom Surprise Planning',
      icon: Sparkles,
      description: 'Personalized surprise packages and special occasion planning services.',
      features: [
        'Fully customized designs',
        'Personal consultation',
        'Unique presentation ideas',
        'Special occasion planning'
      ],
      price: 'Custom Quote'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Choose',
      description: 'Select a product or share your custom idea with us',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'Design & Confirm',
      description: 'We create a design and confirm all details with you',
      icon: Award
    },
    {
      step: 3,
      title: 'Delivery',
      description: 'Fresh delivery made on time to your specified location',
      icon: Truck
    }
  ]

  const handleWhatsAppService = (serviceTitle: string) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in your ${serviceTitle} service. Could you please tell me more about pricing and availability?`
    )
    window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              We go beyond flowers — we help you design unforgettable experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
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
              Core Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive floral and gift services designed to make every occasion special
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-romantic-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold mb-3 text-neutral-800">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 text-neutral-800">What's Included:</h4>
                      {expandedServices.has(service.id) && (
                        <div className="mb-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-neutral-600 mb-2">
                              <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary-500 text-primary-500 hover:bg-primary-50"
                        onClick={() => toggleServiceExpand(service.id)}
                      >
                        {expandedServices.has(service.id) ? 'Show less' : 'Read more'}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-xl font-semibold text-primary-600">
                        {service.price}
                      </div>
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg group rounded-full px-6 py-3 font-semibold"
                      onClick={() => handleWhatsAppService(service.title)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      WhatsApp Us
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Simple, efficient, and designed to deliver exactly what you need
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-romantic-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{step.step}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-neutral-800">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Partner With Us
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Are you a hotel, salon, event planner, or business looking to enhance your services 
              with beautiful floral arrangements? We'd love to partner with you to deliver unique 
              flower setups for your brand and clients.
            </p>
            
            <div className="bg-gradient-to-br from-primary-50 to-romantic-50 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-neutral-800">
                Partnership Benefits
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-neutral-700">Competitive wholesale pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-neutral-700">Reliable delivery service</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-neutral-700">Custom branding options</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-neutral-700">Flexible payment terms</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl group rounded-full px-8 py-4 font-semibold"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello! I'm interested in partnering with Floral Whispers Gifts for my business. Could we discuss partnership opportunities and wholesale pricing?"
                )
                window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </Button>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let us help you create something beautiful for your next special occasion. 
              Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl group flex-1 sm:flex-none rounded-full px-6 py-4 font-semibold"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hello! I'd like to learn more about your services. Could you help me choose the right service for my needs?"
                  )
                  window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
                }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">WhatsApp Us</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-romantic-500 shadow-2xl group flex-1 sm:flex-none"
                onClick={() => window.open(`tel:${brandInfo.phone}`, '_self')}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Call Us</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
