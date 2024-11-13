'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ChevronDown, ShoppingBag } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'
import { useState } from 'react'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className={`min-h-screen bg-[#051b2c] relative overflow-hidden ${playfair.className}`}>
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className="relative">
        <header className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-16 flex items-center justify-between">
              {/* Mobile menu button */}
              <Button 
                variant="ghost" 
                className="lg:hidden text-gray-400 hover:text-[#23b9d6]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                <Button variant="ghost" className="group px-4 py-2 text-gray-400 hover:text-[#23b9d6]">
                  Music
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
                <Button variant="ghost" className="px-4 py-2 text-gray-400 hover:text-[#23b9d6]">
                  Shop
                </Button>
                <Button variant="ghost" className="px-4 py-2 text-gray-400 hover:text-[#23b9d6]">
                  Tour
                </Button>
                <Button variant="ghost" className="px-4 py-2 text-gray-400 hover:text-[#23b9d6]">
                  Videos
                </Button>
              </nav>

              {/* Desktop Icons */}
              <div className="hidden lg:flex items-center space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#23b9d6]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#23b9d6]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#23b9d6]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#23b9d6]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#23b9d6]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <Button variant="ghost" className="text-gray-400 hover:text-[#23b9d6]">
                  <ShoppingBag className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden py-4 border-t border-white/10">
                <nav className="flex flex-col space-y-2">
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-gray-400 hover:text-[#23b9d6]">
                    Music
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-gray-400 hover:text-[#23b9d6]">
                    Shop
                  </Button>
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-gray-400 hover:text-[#23b9d6]">
                    Tour
                  </Button>
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-gray-400 hover:text-[#23b9d6]">
                    Videos
                  </Button>
                </nav>
                
                <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-white/10">
                  {/* Social icons for mobile menu */}
                  {/* Copy the social icon links from above */}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Rest of the content */}
        <div className="relative max-w-6xl mx-auto px-4 py-12 sm:py-20">
          <main className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                Ramé Sivano
              </h2>
              <p className="text-xl sm:text-2xl text-[#23b9d6] font-semibold">
                Chapter 1: The Beginning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-[#23b9d6] hover:bg-[#1fa3bd] text-white w-full sm:w-auto">
                  Listen Now
                </Button>
                <Button variant="outline" className="border-[#ff6b3d] text-[#ff6b3d] hover:bg-[#ff6b3d] hover:text-white w-full sm:w-auto">
                  Tour Dates
                </Button>
              </div>
            </div>

            <Card className="bg-black/20 backdrop-blur-sm border-0 overflow-hidden relative group mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#23b9d6]/20 to-[#ff6b3d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-13%20at%2012.35.05_007fabdd.jpg-oonnWn9Y8Qb9BxxtMyjq5Hqm2lWqie.jpeg"
                alt="Atmospheric portrait of Ramé Sivano in blue and orange lighting"
                className="w-full aspect-auto sm:h-[600px] object-contain sm:object-cover"
              />
              <Button 
                className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3"
                aria-label="Play featured track"
              >
                <Play className="w-6 h-6" />
              </Button>
            </Card>
          </main>

          <section className="mt-12 sm:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">Latest Release</h3>
            <div className="aspect-video w-full max-w-3xl mx-auto">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Ramé Sivano - The Beginning (Official Music Video)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </section>

          <footer className="mt-12 sm:mt-20 text-center">
            <p className="text-xs text-gray-400">© 2024 Ramé Sivano. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}