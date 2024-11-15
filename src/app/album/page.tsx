import Image from 'next/image'
import { Header } from '@/components/Header'

export default function AlbumPage() {
  return (
    <div className="min-h-screen bg-[#051b2c] relative overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className="relative">
        <Header />
        <main className="h-[calc(100vh-4rem)]">
          {/* Album Container */}
          <div className="relative h-full">
            {/* Album Poster */}
            <div className="relative h-full w-full">
              <Image
                src="/album-poster-web.jpg"
                alt="Kon Hai Tu Album Cover"
                fill
                priority
                className="object-contain"
              />
              
              {/* Permanent bottom gradient for blending */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </main>
        
        {/* Black section after the poster */}
        <div className="bg-black h-32" />
      </div>
    </div>
  )
}
