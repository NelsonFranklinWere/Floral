'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { brandInfo } from '@/lib/theme'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to get in touch about your floral services. Could you please provide more information about your offerings?"
    )
    window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  const handlePhoneClick = () => {
    window.open(`tel:${brandInfo.phone}`, '_self')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${brandInfo.email}`, '_blank')
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: brandInfo.phone,
      action: handlePhoneClick,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick and easy messaging',
      value: 'Chat Now',
      action: handleWhatsAppClick,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      value: brandInfo.email,
      action: handleEmailClick,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come see us in person',
      value: brandInfo.address,
      action: () => {},
      color: 'from-red-500 to-red-600',
    },
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 5:00 PM' },
  ]

  const faqs = [
    {
      question: 'Do you offer same-day delivery?',
      answer: 'Yes! We offer same-day delivery across Nairobi for orders placed before 2:00 PM. Delivery fees range from KES 500-1,500 depending on location.',
    },
    {
      question: 'Can I customize my flower arrangement?',
      answer: 'Absolutely! We love creating custom arrangements. Contact us with your ideas and we\'ll work together to bring your vision to life.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept M-Pesa, bank transfers, and cash on delivery. All payments are secure and processed safely.',
    },
    {
      question: 'How far in advance should I place my order?',
      answer: 'For regular orders, 24 hours notice is ideal. For weddings and large events, we recommend at least one week in advance.',
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Let's create something special together — we're here to help with all your floral needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Get in Touch
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to reach us. We're always happy to help!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={method.action}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-playfair font-semibold mb-2 text-neutral-800">
                      {method.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium text-primary-600">
                      {method.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-to-br from-cream-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold mb-6 text-gradient">
                    Send us a Message
                  </h3>
                  
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h4>
                      <p className="text-neutral-600">Thank you for contacting us. We'll get back to you soon!</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="+254 700 000 000"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tell us about your floral needs, occasion, or any questions you have..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary-500 to-romantic-500 hover:from-primary-600 hover:to-romantic-600 text-white shadow-2xl group"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Business Hours */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-romantic-500 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-neutral-800">
                        Business Hours
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0">
                          <span className="font-medium text-neutral-700">{schedule.day}</span>
                          <span className="text-neutral-600">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-neutral-800">
                        Our Location
                      </h3>
                    </div>
                    <p className="text-neutral-700 leading-relaxed mb-4">
                      {brandInfo.address}
                    </p>
                    <p className="text-sm text-neutral-600">
                      We're located in the heart of Nairobi, easily accessible by public transport and with parking available nearby.
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-neutral-800 mb-4">
                      Quick Actions
                    </h3>
                    <div className="flex flex-row gap-3">
                      <Button
                        size="lg"
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                        <span className="text-sm sm:text-base">Chat on WhatsApp</span>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="flex-1"
                        onClick={handlePhoneClick}
                      >
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                        <span className="text-sm sm:text-base">Call Now</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services and ordering process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-800 mb-2 sm:mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-100 to-neutral-200">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Find Us
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Visit us at our location in Nairobi or use the map to plan your route
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-96 bg-gradient-to-br from-primary-100 to-romantic-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-neutral-800 mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-neutral-600 mb-4">
                  {brandInfo.address}
                </p>
                <Button
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(brandInfo.address)}`, '_blank')}
                  className="bg-primary-500 hover:bg-primary-600 text-white"
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
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
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us today and let's discuss how we can make your special occasion even more memorable.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-romantic-500 hover:bg-romantic-50 hover:text-romantic-600 shadow-2xl flex-1 sm:flex-none"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Start Chatting</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-romantic-500 shadow-2xl flex-1 sm:flex-none"
                onClick={handlePhoneClick}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Call Now</span>
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
