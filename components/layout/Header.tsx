'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { brandInfo } from '@/lib/theme'
import { Menu, X, MessageCircle } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoErrored, setLogoErrored] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your floral services. Could you please tell me more about your bouquets and delivery options?"
    )
    window.open(`https://wa.me/${brandInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-neutral-200' 
            : 'bg-white/95 backdrop-blur-md shadow-lg'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {logoErrored ? (
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-romantic-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
              ) : (
                <picture>
                  <source srcSet="/images/florallogo.webp" type="image/webp" />
                  <source srcSet="/images/florallogo.png" type="image/png" />
                  <source srcSet="/images/florallogo.jpg" type="image/jpeg" />
                  <img
                    src="/images/florallogo.jpeg"
                    alt={`${brandInfo.name} logo`}
                    className="w-10 h-10 rounded-lg object-contain"
                    loading="eager"
                    onError={() => setLogoErrored(true)}
                  />
                </picture>
              )}
              <div>
                <h1 className="font-playfair font-bold text-xl text-neutral-800 transition-colors duration-300">
                  {brandInfo.name}
                </h1>
                <p className="text-xs text-neutral-600 transition-colors duration-300">
                  {brandInfo.tagline}
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="font-medium transition-colors duration-300 hover:text-primary-500 text-neutral-700"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="outline"
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-700 transition-colors duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700 transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              className="absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left py-3 px-4 text-neutral-700 font-medium hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-neutral-200">
                  <Button
                    className="w-full"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order on WhatsApp
                  </Button>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
