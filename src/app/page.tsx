'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageTransition, FadeOnly } from "@/components/animations"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
})

export default function Component() {
  const router = useRouter()

  const handleFindOut = () => {
    router.push('/chapter-1')
  }

  const handleStudioX = () => {
    router.push('/studio-x')
  }

  return (
    <PageTransition className="min-h-screen bg-[#051b2c] relative overflow-hidden">
      
      {/* Ambient light effects */}
      <FadeOnly delay={0.2} className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </FadeOnly>

      <div className="relative">
        <FadeOnly delay={0.4}>
          <Header />
        </FadeOnly>
        
        {/* Mobile Layout - Video First */}
        <div className="md:hidden">
          <div className="relative max-w-6xl mx-auto px-4 py-4">
            {/* Latest Release - Hero on Mobile */}
            <FadeOnly delay={0.6}>
              <section className="mb-6">
                <h3 className={`text-2xl font-light text-white mb-4 text-center ${poppins.className}`}>Latest Release</h3>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/50WmEK3oS6g?si=4Bk52PHMIXiwe77F"
                  title="Ramé Sivano - The Beginning (Official Music Video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
              </section>
            </FadeOnly>

            {/* Music Streaming Links - Mobile Optimized */}
            <FadeOnly delay={0.8}>
              <div className="text-center mb-6">
              <p className={`text-gray-400 text-sm mb-4 ${poppins.className}`}>Listen on</p>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://open.spotify.com/artist/5nkyoqkxYOlgg6lbofcBZB?si=5AU30QQtRRCznFOS5bQf_g" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-[#1DB954]/20 text-gray-400 hover:text-[#1DB954] transition-all duration-200"
                  aria-label="Listen on Spotify"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  <span className={`font-medium ${poppins.className}`}>Spotify</span>
                </a>
                
                <a 
                  href="https://music.apple.com/artist/ram%C3%A9-sivano/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-all duration-200"
                  aria-label="Listen on Apple Music"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className={`font-medium ${poppins.className}`}>Apple Music</span>
                </a>
                
                <a 
                  href="https://www.youtube.com/channel/UCgha49SDKezqu_RUe_u6qaQ" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-[#FF0000]/20 text-gray-400 hover:text-[#FF0000] transition-all duration-200"
                  aria-label="Subscribe on YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className={`font-medium ${poppins.className}`}>YouTube</span>
                </a>
              </div>
              </div>
            </FadeOnly>

            {/* Chapter Title & Action Buttons - Compact */}
            <FadeOnly delay={1.0}>
              <div className="text-center py-0">
                <p className={`text-lg text-[#23b9d6] font-light mb-4 ${poppins.className}`}>
                  Chapter 1: Kon Hai Tu?
                </p>
                <div className="flex flex-col gap-2 px-8">
                  <Button 
                    className={`bg-[#23b9d6] hover:bg-[#1fa3bd] text-white ${poppins.className}`}
                    onClick={handleFindOut}
                  >
                    Learn More
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`border-[#ff6b3d] text-[#ff6b3d] hover:bg-[#ff6b3d] hover:text-white ${poppins.className}`}
                    onClick={handleStudioX}
                  >
                    Studio X
                  </Button>
                </div>
              </div>
            </FadeOnly>
          </div>
          
          <FadeOnly delay={1.2}>
            <Footer />
          </FadeOnly>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden md:block">
          <div className="relative max-w-6xl mx-auto px-4 py-12 sm:py-20">
            <main className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <FadeOnly delay={0.6}>
                <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                  <h2 className={`text-4xl sm:text-5xl font-light leading-tight text-white ${poppins.className}`}>
                    Ramé Sivano
                  </h2>
                <p className={`text-xl sm:text-2xl text-[#23b9d6] font-light ${poppins.className}`}>
                  Chapter 1: Kon Hai Tu?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    className={`bg-[#23b9d6] hover:bg-[#1fa3bd] text-white w-full sm:w-auto ${poppins.className}`}
                    onClick={handleFindOut}
                  >
                    Learn More
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`border-[#ff6b3d] text-[#ff6b3d] hover:bg-[#ff6b3d] hover:text-white w-full sm:w-auto ${poppins.className}`}
                    onClick={handleStudioX}
                  >
                    Studio X
                  </Button>
                </div>
                
                {/* Music Streaming Links */}
                <div className="pt-6 text-center lg:text-left">
                  <p className={`text-gray-400 text-sm mb-4 ${poppins.className}`}>Listen on</p>
                  <div className="flex items-center gap-6 justify-center lg:justify-start">
                    <a 
                      href="https://open.spotify.com/artist/5nkyoqkxYOlgg6lbofcBZB?si=5AU30QQtRRCznFOS5bQf_g" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-[#1DB954] transition-colors duration-200 group"
                      aria-label="Listen on Spotify"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        <span className={`text-sm group-hover:text-[#1DB954] transition-colors ${poppins.className}`}>Spotify</span>
                      </div>
                    </a>
                    
                    <a 
                      href="https://music.apple.com/artist/ram%C3%A9-sivano/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors duration-200 group"
                      aria-label="Listen on Apple Music"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span className={`text-sm group-hover:text-white transition-colors ${poppins.className}`}>Apple Music</span>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.youtube.com/channel/UCgha49SDKezqu_RUe_u6qaQ" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-[#FF0000] transition-colors duration-200 group"
                      aria-label="Subscribe on YouTube"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span className={`text-sm group-hover:text-[#FF0000] transition-colors ${poppins.className}`}>YouTube</span>
                      </div>
                    </a>
                  </div>
                </div>
                </div>
              </FadeOnly>

              <FadeOnly delay={0.8}>
                <Card className="bg-black/20 backdrop-blur-sm border-0 overflow-hidden relative group mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#23b9d6]/20 to-[#ff6b3d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-13%20at%2012.35.05_007fabdd.jpg-oonnWn9Y8Qb9BxxtMyjq5Hqm2lWqie.jpeg"
                  alt="Atmospheric portrait of Ramé Sivano in blue and orange lighting"
                  width={800}
                  height={600}
                  className="w-full aspect-auto sm:h-[600px] object-contain sm:object-cover"
                />
                <Button 
                  className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3"
                  aria-label="Play featured track"
                >
                  <Play className="w-6 h-6" />
                </Button>
                </Card>
              </FadeOnly>
            </main>

            <FadeOnly delay={1.0}>
              <section className="mt-12 sm:mt-20">
                <h3 className={`text-2xl sm:text-3xl font-light text-white mb-6 sm:mb-8 text-center lg:text-left ${poppins.className}`}>Latest Release</h3>
              <div className="aspect-video w-full max-w-3xl mx-auto">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/50WmEK3oS6g?si=4Bk52PHMIXiwe77F"
                  title="Ramé Sivano - The Beginning (Official Music Video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
              </section>
            </FadeOnly>
          </div>

          <FadeOnly delay={1.2}>
            <Footer />
          </FadeOnly>
        </div>
      </div>
    </PageTransition>
  )
}