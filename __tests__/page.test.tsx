import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from '@/app/page'

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('To get started, edit the page.tsx file.')
  })

  it('renders the Next.js logo', () => {
    render(<Home />)
    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Home />)
    const templatesLink = screen.getByText('Templates')
    const learningLink = screen.getByText('Learning')

    expect(templatesLink).toBeInTheDocument()
    expect(learningLink).toBeInTheDocument()
  })

  it('renders deploy button', () => {
    render(<Home />)
    const deployButton = screen.getByText('Deploy Now')
    expect(deployButton).toBeInTheDocument()
  })

  it('renders documentation link', () => {
    render(<Home />)
    const docLink = screen.getByText('Documentation')
    expect(docLink).toBeInTheDocument()
  })
})
