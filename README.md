# Floral Whispers Gifts - Modern Floral Website

A beautiful, modern website for Floral Whispers Gifts, a Nairobi-based flower and gift brand. Built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## 🌸 Features

- **Modern Design**: Clean, elegant, and emotionally appealing design
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG AA compliant with proper semantic HTML and ARIA labels
- **Performance**: Optimized images, lazy loading, and smooth animations
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **WhatsApp Integration**: Direct ordering through WhatsApp
- **Interactive Gallery**: Lightbox image viewer with navigation
- **Smooth Animations**: Subtle Framer Motion animations throughout

## 🎨 Design System

- **Colors**: Soft green (#4CAF50), Romantic red (#E53935), Cream (#FFF8F0)
- **Typography**: Playfair Display (headings), Poppins (body)
- **Spacing**: 8px base unit system
- **Shadows**: Soft, medium, and strong elevation levels
- **Animations**: Fade-ins, slides, and gentle hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FloralWhispers
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   ├── layout/           # Layout components
│   └── common/           # Common components
├── lib/                  # Utilities and configuration
│   ├── utils.ts          # Helper functions
│   └── theme.ts          # Design tokens and data
├── public/               # Static assets
│   └── images/          # Image assets
└── __tests__/           # Test files
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🎯 Key Components

### Sections
- **HeroSection**: Full-width banner with call-to-action buttons
- **AboutSection**: Brand story and values
- **CollectionsSection**: Product categories showcase
- **WhyChooseUsSection**: Key differentiators with stats
- **GallerySection**: Interactive image gallery with lightbox
- **ContactSection**: Contact form and information

### Layout
- **Header**: Responsive navigation with mobile menu
- **Footer**: Links, contact info, and social media
- **WhatsAppButton**: Floating WhatsApp ordering button

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance (WCAG AA)
- Screen reader friendly
- Reduced motion support

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts` and `lib/theme.ts`:

```typescript
colors: {
  primary: '#4CAF50',    // Soft green
  romantic: '#E53935',   // Romantic red
  cream: '#FFF8F0',      // Cream background
}
```

### Content
Update brand information in `lib/theme.ts`:

```typescript
export const brandInfo = {
  name: 'Floral Whispers Gifts',
  tagline: 'Feel the Beauty and Blossom',
  phone: '0729 xxx xxx',
  // ... other brand details
}
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

The project includes:
- Unit tests for components
- Accessibility testing
- Responsive design testing

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** if needed
3. **Deploy** - Vercel will automatically build and deploy

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+254729xxxxxx
NEXT_PUBLIC_PHONE_NUMBER=0729 xxx xxx
NEXT_PUBLIC_EMAIL=info@floralwhispersgifts.com
```

## 📈 Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Caching**: Static assets cached with proper headers

## 🔧 Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow ESLint and Prettier configurations
- Use semantic commit messages
- Write tests for new components

### Component Guidelines
- Use functional components with hooks
- Implement proper prop types
- Add accessibility attributes
- Include error boundaries where needed

## 📞 Support

For questions or support:
- **Email**: info@floralwhispersgifts.com
- **Phone**: 0729 xxx xxx
- **WhatsApp**: +254729xxxxxx

## 📄 License

© 2025 Floral Whispers Gifts | Designed by StriveGo

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
# Floral
