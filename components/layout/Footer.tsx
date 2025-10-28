'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { brandInfo } from '@/lib/theme'
import { Instagram, Phone, Mail, MapPin, MessageCircle, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Fresh Bouquets', href: '/collections' },
      { name: 'Money Bouquets', href: '/collections' },
      { name: 'Custom Gifts', href: '/collections' },
      { name: 'Event Décor', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${brandInfo.instagram.replace('@', '')}`, '_blank')
  }

  const handleFacebookClick = () => {
    // TODO: Add Facebook link when provided
    window.open('#', '_blank')
  }

  const handleTikTokClick = () => {
    // TODO: Add TikTok link when provided
    window.open('#', '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your floral services. Could you please tell me more about your bouquets and delivery options?"
    )
    window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  const handlePhoneClick = () => {
    window.open(`tel:${brandInfo.phone}`, '_self')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${brandInfo.email}`, '_self')
  }

  return (
    <footer className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-romantic-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold">{brandInfo.name}</h3>
                  <p className="text-neutral-400">{brandInfo.tagline}</p>
                </div>
              </div>
              
              <p className="text-neutral-300 leading-relaxed mb-8 max-w-md">
                Bringing beauty and emotion to every special moment in Nairobi. 
                From intimate celebrations to grand events, we craft floral 
                arrangements that tell your story.
              </p>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-playfair font-semibold mb-6">Check Our Latest Updates</h4>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleInstagramClick}
                    className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                  
                  <button
                    onClick={handleFacebookClick}
                    className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </button>
                  
                  <button
                    onClick={handleTikTokClick}
                    className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    aria-label="Follow us on TikTok"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-playfair font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-playfair font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-playfair font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>{brandInfo.phone}</span>
                </button>
                
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>{brandInfo.email}</span>
                </button>
                
                <div className="flex items-center gap-3 text-neutral-300">
                  <MapPin className="w-5 h-5" />
                  <span>{brandInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-neutral-700 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-neutral-400">
                <span>© {currentYear} {brandInfo.name}</span>
                <span>|</span>
                <span>Designed by StriveGo</span>
              </div>
            </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
