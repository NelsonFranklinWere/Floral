'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Flower2, Gift, Calendar, Truck, Sparkles, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react'
import { brandInfo, collections } from '@/lib/theme'

export default function CollectionsPage() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cardId)) {
        newSet.delete(cardId)
      } else {
        newSet.add(cardId)
      }
      return newSet
    })
  }
  const collectionDetails = [
    {
      id: 'bouquets',
      title: 'Fresh Flower Bouquets',
      icon: Flower2,
      description: 'Handcrafted floral arrangements for every occasion',
      features: [
        'Fresh flowers sourced daily',
        'Custom color combinations',
        'Professional arrangement techniques',
        'Beautiful presentation packaging',
        'Same-day delivery available'
      ],
      occasions: ['Birthdays', 'Anniversaries', 'Valentine\'s Day', 'Mother\'s Day', 'Graduations', 'Just Because'],
      priceRange: 'From KES 2,500',
      image: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower1.png'
    },
    {
      id: 'money-bouquets',
      title: 'Money Bouquets',
      icon: Gift,
      description: 'Creative money arrangements for special celebrations',
      features: [
        'Various denomination options',
        'Creative folding techniques',
        'Beautiful presentation boxes',
        'Custom message cards',
        'Secure packaging'
      ],
      occasions: ['Graduations', 'Birthdays', 'Weddings', 'Anniversaries', 'Achievements', 'Special Occasions'],
      priceRange: 'From KES 5,000',
      image: '/images/arrangements/100notesbouquet1.png'
    },
    {
      id: 'gift-boxes',
      title: 'Gift Boxes & Hampers',
      icon: Gift,
      description: 'Curated gift collections for birthdays and anniversaries',
      features: [
        'Premium gift selections',
        'Elegant packaging',
        'Customizable contents',
        'Personalized messages',
        'Corporate options available'
      ],
      occasions: ['Birthdays', 'Anniversaries', 'Corporate Events', 'Holidays', 'Thank You Gifts', 'Congratulations'],
      priceRange: 'From KES 3,500',
      image: '/images/collections/birthday,friend,gifts1.png'
    },
    {
      id: 'events',
      title: 'Event Décor & Setup',
      icon: Calendar,
      description: 'Wedding and event decoration services',
      features: [
        'Full event planning',
        'Venue decoration',
        'Centerpiece arrangements',
        'Bridal bouquets',
        'Professional setup and cleanup'
      ],
      occasions: ['Weddings', 'Corporate Events', 'Birthday Parties', 'Anniversaries', 'Graduations', 'Holiday Celebrations'],
      priceRange: 'From KES 15,000',
      image: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower2.png'
    },
    {
      id: 'delivery',
      title: 'Same-Day Delivery',
      icon: Truck,
      description: 'Fast and reliable delivery across Nairobi',
      features: [
        'Same-day delivery service',
        'Real-time tracking',
        'Careful handling',
        'Professional delivery team',
        'Flexible timing options'
      ],
      occasions: ['Emergency Orders', 'Last-Minute Surprises', 'Urgent Deliveries', 'Same-Day Events', 'Quick Gifts'],
      priceRange: 'KES 500 - 1,500',
      image: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower3.png'
    },
    {
      id: 'custom',
      title: 'Custom Surprise Packages',
      icon: Sparkles,
      description: 'Personalized arrangements for unique occasions',
      features: [
        'Fully customized designs',
        'Personal consultation',
        'Unique presentation ideas',
        'Special occasion planning',
        'Unlimited creativity'
      ],
      occasions: ['Proposals', 'Anniversaries', 'Surprise Parties', 'Special Achievements', 'Unique Celebrations'],
      priceRange: 'Custom Quote',
      image: '/images/collections/birthday,friend,gifts1.png'
    }
  ]

  const handleWhatsAppOrder = (collectionTitle: string) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in your ${collectionTitle} collection. Could you please tell me more about the available options and pricing?`
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
              Our Collections
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Gifting Redefined — Discover our carefully curated selection of floral arrangements and gifts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-12">
            {collectionDetails.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <collection.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 sm:p-8">
                    <h3 className="text-lg sm:text-2xl font-playfair font-bold mb-3 sm:mb-4 text-neutral-800">
                      {collection.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                      {collection.description}
                    </p>

                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="text-sm sm:text-lg font-semibold text-primary-600">
                        {collection.priceRange}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mb-4 border-primary-500 text-primary-500 hover:bg-primary-50 group"
                      onClick={() => toggleCard(collection.id)}
                    >
                      {expandedCards.has(collection.id) ? (
                        <>
                          Show Less
                          <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-y-1 transition-transform" />
                        </>
                      ) : (
                        <>
                          Learn More
                          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedCards.has(collection.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-4 sm:mb-6">
                            <h4 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-3 text-neutral-800">What's Included:</h4>
                            <ul className="space-y-1 sm:space-y-2">
                              {collection.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-4 sm:mb-6">
                            <h4 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-3 text-neutral-800">Perfect For:</h4>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {collection.occasions.map((occasion, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 sm:px-3 sm:py-1 bg-primary-50 text-primary-700 rounded-full text-xs sm:text-sm"
                                >
                                  {occasion}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Order Button */}
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary-500 to-romantic-500 hover:from-primary-600 hover:to-romantic-600 text-white shadow-2xl group text-xs sm:text-sm"
                      onClick={() => handleWhatsAppOrder(collection.title)}
                    >
                      Order
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="section-padding bg-gradient-to-br from-cream-50 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Looking for Something Unique?
            </h2>
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              We love custom ideas and creative challenges! Whether you have a specific vision in mind or need 
              inspiration for a unique occasion, our team is ready to bring your ideas to life.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-neutral-800">
                Custom Order Process
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mx-auto mb-2 sm:mb-3">
                    1
                  </div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Share Your Vision</h4>
                  <p className="text-xs sm:text-sm text-neutral-600">Tell us about your idea, occasion, and preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mx-auto mb-2 sm:mb-3">
                    2
                  </div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Design & Quote</h4>
                  <p className="text-xs sm:text-sm text-neutral-600">We create a custom design and provide pricing</p>
                </div>
                <div className="text-center md:col-span-1 col-span-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mx-auto mb-2 sm:mb-3">
                    3
                  </div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Create & Deliver</h4>
                  <p className="text-xs sm:text-sm text-neutral-600">We bring your vision to life and deliver it perfectly</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-500 to-romantic-500 hover:from-primary-600 hover:to-romantic-600 text-white shadow-2xl group"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello! I have a custom floral arrangement idea. Could we discuss creating something unique for my special occasion?"
                )
                window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
              }}
            >
              Discuss Custom Ideas
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              Ready to Make Someone's Day Special?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Browse our collections and find the perfect arrangement for your special occasion. 
              Same-day delivery available across Nairobi.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-romantic-500 hover:bg-romantic-50 hover:text-romantic-600 shadow-2xl group"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hello! I'd like to place an order from your collections. Could you help me choose the perfect arrangement?"
                  )
                  window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-romantic-500 shadow-2xl"
                onClick={() => window.open(`tel:${brandInfo.phone}`, '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
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
