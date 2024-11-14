'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

// Interface for video data
interface VideoData {
  id: string
  title: string
  description: string
}

// Array of videos - can be expanded as more videos are released
const videos: VideoData[] = [
  {
    id: '50WmEK3oS6g',
    title: 'The Beginning',
    description: 'Official Music Video'
  },
  // Add more videos here in the future
]

export default function VideosPage() {
  return (
    <div className={`min-h-screen bg-[#051b2c] relative overflow-hidden ${playfair.className}`}>
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className="relative">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
          <main className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
              Music Videos
            </h1>
            
            <div className="grid gap-8 md:grid-cols-2">
              {videos.map((video) => (
                <div key={video.id} className="space-y-4">
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={`Ramé Sivano - ${video.title}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">{video.title}</h2>
                    <p className="text-[#23b9d6]">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {videos.length === 0 && (
              <p className="text-white text-center text-xl">
                New videos coming soon! Stay tuned.
              </p>
            )}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}
