'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { brandInfo } from '@/lib/theme'
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react'

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Hello! My name is ${formData.name} (${formData.phone}). ${formData.message || 'I would like to know more about your floral services.'}`
    )
    window.open(`https://wa.me/+254729xxxxxx?text=${message}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your floral services. Could you please tell me more about your bouquets and delivery options?"
    )
    window.open(`https://wa.me/+254729xxxxxx?text=${message}`, '_blank')
  }

  const handleCallClick = () => {
    window.open(`tel:${brandInfo.phone}`, '_self')
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Order & Contact
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring beauty to your special moment? Get in touch with us today 
            and let us create something magical for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Card hover className="text-center p-6">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">WhatsApp Order</h3>
                <p className="text-neutral-600 mb-4">Quick and easy ordering</p>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={handleWhatsAppClick}
                >
                  Order Now
                </Button>
              </Card>

              <Card hover className="text-center p-6">
                <div className="bg-romantic-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-romantic-600" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Call Us</h3>
                <p className="text-neutral-600 mb-4">Speak directly with us</p>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={handleCallClick}
                >
                  Call Now
                </Button>
              </Card>
            </div>

            {/* Contact Information */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-playfair">Get in Touch</CardTitle>
              </CardHeader>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Phone</p>
                    <p className="text-neutral-600">{brandInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Email</p>
                    <p className="text-neutral-600">{brandInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Location</p>
                    <p className="text-neutral-600">{brandInfo.address}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary-100 to-romantic-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                  <p className="text-neutral-600 font-medium">Nairobi, Kenya</p>
                  <p className="text-sm text-neutral-500">Interactive map coming soon</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-playfair">Send us a Message</CardTitle>
                <p className="text-neutral-600">We'll get back to you within 24 hours</p>
              </CardHeader>

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
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="07XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message / Order Request
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your order or any special requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary-500 to-romantic-500 hover:from-primary-600 hover:to-romantic-600 text-white shadow-2xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
