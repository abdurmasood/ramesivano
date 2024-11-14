'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'
import { useRef } from 'react'
import { Header } from '@/components/Header'
import { Footer } from "@/components/Footer"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Component() {
  const subscribeRef = useRef<HTMLDivElement>(null)

  const scrollToSubscribe = () => {
    subscribeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen bg-[#051b2c] relative overflow-hidden ${playfair.className}`}>
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className="relative">
        <Header />

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Tour Dates</h1>
          </div>

          {/* Coming Soon Section */}
          <Card className="bg-black/20 backdrop-blur-sm border-0 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#23b9d6]/20 to-[#ff6b3d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-12 text-center relative z-10">
              <Calendar className="w-16 h-16 text-[#23b9d6] mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-xl text-gray-300 mb-8">Stay tuned for upcoming tour dates</p>
              <Button 
                className="bg-[#23b9d6] hover:bg-[#1fa3bd] text-white px-8 py-3 rounded-md text-lg"
                onClick={scrollToSubscribe}
              >
                Get Notified
              </Button>
            </div>
          </Card>

          {/* Newsletter Signup */}
          <div ref={subscribeRef} className="mt-20 text-center scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-4">Join the Journey</h3>
            <p className="text-gray-400 mb-6">Sign up to receive tour updates and exclusive content.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#23b9d6]"
                required
              />
              <Button className="bg-[#ff6b3d] hover:bg-[#e55d2d] text-white px-6 py-2 rounded-md">
                Subscribe
              </Button>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}