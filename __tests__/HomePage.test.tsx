import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '@/app/page'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('has proper accessibility structure', () => {
    render(<HomePage />)
    
    // Check for main landmark
    expect(screen.getByRole('main')).toBeInTheDocument()
    
    // Check for navigation
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('contains brand name', () => {
    render(<HomePage />)
    expect(screen.getByText('Floral Whispers Gifts')).toBeInTheDocument()
  })

  it('contains tagline', () => {
    render(<HomePage />)
    expect(screen.getByText('Feel the Beauty and Blossom')).toBeInTheDocument()
  })
})
