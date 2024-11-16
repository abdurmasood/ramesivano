'use client'

import Image from 'next/image'
import { Header } from '@/components/Header'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function AlbumPage() {
  return (
    <div className="min-h-screen bg-[#051b2c] relative overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className={`relative ${playfair.className}`}>
        <Header />
        <main className="h-[calc(100vh-4rem)]">
          {/* Album Container */}
          <div className="relative h-full">
            {/* Mobile Poster (hidden on md and larger screens) */}
            <div className="relative h-full w-full md:hidden">
              <Image
                src="/album-poster-mobile.jpg"
                alt="Kon Hai Tu Album Cover"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Desktop Poster (hidden on smaller screens) */}
            <div className="relative h-full w-full hidden md:block">
              <Image
                src="/album-poster-web.jpg"
                alt="Kon Hai Tu Album Cover"
                fill
                priority
                className="object-contain"
              />
            </div>
              
            {/* Permanent bottom gradient for blending */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent" />
          </div>
        </main>
        
        {/* Black section after the poster with footer */}
        <div className="bg-black">
          <div className="h-12" />
          <p className="text-xs text-gray-400 text-center pb-16">© 2024 Ramé Sivano. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
