'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ChevronDown } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'
import { Header } from "@/components/Header"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Component() {
  return (
    <div className={`min-h-screen bg-[#051b2c] relative overflow-hidden ${playfair.className}`}>
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className="relative">
        <Header />
        
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
                src="https://www.youtube.com/embed/50WmEK3oS6g?si=4Bk52PHMIXiwe77F"
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