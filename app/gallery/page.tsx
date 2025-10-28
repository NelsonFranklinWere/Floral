'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, ArrowRight, Heart, Star, MessageCircle, Phone } from 'lucide-react'
import { brandInfo, galleryImages } from '@/lib/theme'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  const categories = [
    { id: 'all', name: 'All', count: galleryImages.length },
    { id: 'bouquets', name: 'Bouquets', count: 8 },
    { id: 'money', name: 'Money Bouquets', count: 6 },
    { id: 'events', name: 'Events', count: 4 },
    { id: 'gifts', name: 'Gift Boxes', count: 5 },
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const customerStories = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Westlands",
      avatar: "S",
      quote: "The wedding bouquet was absolutely stunning! Every guest commented on how beautiful it was. Floral Whispers made my special day even more magical.",
      gradient: "from-primary-500 to-romantic-500"
    },
    {
      id: 2,
      name: "James K.",
      location: "Kilimani",
      avatar: "J",
      quote: "I've been ordering from Floral Whispers for over a year now. The money bouquet for my daughter's graduation was incredible - everyone was amazed!",
      gradient: "from-romantic-500 to-primary-500"
    },
    {
      id: 3,
      name: "Grace W.",
      location: "Karen",
      avatar: "G",
      quote: "The custom arrangement for my anniversary was perfect! The attention to detail and the beautiful presentation made it extra special.",
      gradient: "from-primary-500 to-romantic-500"
    },
    {
      id: 4,
      name: "Michael T.",
      location: "Lavington",
      avatar: "M",
      quote: "Same-day delivery saved my proposal! The bouquet was fresh, beautiful, and exactly what I envisioned. Thank you Floral Whispers!",
      gradient: "from-romantic-500 to-primary-500"
    },
    {
      id: 5,
      name: "Linda A.",
      location: "Rosslyn",
      avatar: "L",
      quote: "The event decoration was absolutely gorgeous! Professional, creative, and they made our corporate event unforgettable.",
      gradient: "from-primary-500 to-romantic-500"
    }
  ]

  // Auto-scroll effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % customerStories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [customerStories.length])

  const filteredImages = galleryImages.filter((image) => {
    if (activeCategory === 'all') return true
    return image.category === activeCategory
  })

  const handleWhatsAppOrder = (imageTitle: string) => {
    const message = encodeURIComponent(
      `Hello! I saw this beautiful ${imageTitle} in your gallery and I'd like to order something similar. Could you help me with pricing and availability?`
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
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Every bouquet tells a story — explore our collection of beautiful floral arrangements and gifts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${activeCategory}-${image.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <Heart className="w-6 h-6 text-primary-600" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-neutral-500">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Work Section */}
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
              Featured Work
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Some of our most popular and beloved arrangements that have brought joy to our customers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {galleryImages.slice(0, 6).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold mb-2 text-neutral-800">
                      {image.alt}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      A beautiful arrangement perfect for special occasions
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary-500 to-romantic-500 hover:from-primary-600 hover:to-romantic-600 text-white"
                      onClick={() => handleWhatsAppOrder(image.alt)}
                    >
                      Order Similar
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
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
              Customer Stories
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Real moments captured by our customers who experienced the magic of our arrangements
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6 pb-4"
                animate={{ 
                  x: -currentStoryIndex * (320 + 24) // 320px card width + 24px gap
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut" 
                }}
              >
                {customerStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-80"
                  >
                    <Card className={`h-full transition-all duration-300 group hover:-translate-y-2 ${
                      index === currentStoryIndex ? 'shadow-xl ring-2 ring-primary-200' : 'hover:shadow-xl'
                    }`}>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${story.gradient} rounded-full flex items-center justify-center`}>
                            <span className="text-white font-bold text-lg">{story.avatar}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{story.name}</h4>
                            <p className="text-neutral-600 text-sm">{story.location}</p>
                          </div>
                        </div>
                        <blockquote className="text-base text-neutral-700 leading-relaxed mb-4">
                          "{story.quote}"
                        </blockquote>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Story indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {customerStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStoryIndex 
                      ? 'bg-primary-500 scale-125' 
                      : 'bg-primary-200 hover:bg-primary-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Auto-scroll indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span>Stories change every 5 seconds</span>
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              </div>
            </div>
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
              Inspired by What You See?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let us create something beautiful for your special occasion. Browse our collections 
              or discuss a custom arrangement with our team.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-romantic-500 hover:bg-romantic-50 hover:text-romantic-600 shadow-2xl group flex-1 sm:flex-none"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hello! I saw your beautiful gallery and I'd like to order something similar. Could you help me choose the perfect arrangement?"
                  )
                  window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
                }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6 text-neutral-800" />
              </button>
              <img
                src={filteredImages[selectedImage]?.src}
                alt={filteredImages[selectedImage]?.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
