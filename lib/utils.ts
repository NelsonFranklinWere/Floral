import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Format Kenyan phone number (assumes 07XXXXXXXX format)
  if (cleaned.startsWith('07') && cleaned.length === 10) {
    return `+254${cleaned.slice(1)}`
  }
  
  // If already has country code
  if (cleaned.startsWith('254') && cleaned.length === 12) {
    return `+${cleaned}`
  }
  
  return phone
}

export function generateWhatsAppMessage(
  name: string,
  phone: string,
  message?: string
): string {
  const greeting = `Hello! I'm ${name} and I'm interested in your floral services.`
  const contact = `My phone number is ${formatPhoneNumber(phone)}.`
  const customMessage = message ? `\n\nMessage: ${message}` : ''
  
  return encodeURIComponent(`${greeting} ${contact}${customMessage}`)
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
