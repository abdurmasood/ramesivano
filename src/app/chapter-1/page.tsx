'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageTransition, FadeOnly } from '@/components/animations'
import { Poppins, Satisfy } from 'next/font/google'
import { Lock, Unlock, ChevronDown } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
})

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
})

const songs = [
  { 
    id: 1, 
    title: 'Stay With Me', 
    released: true,
    personalityType: 'The Executive',
  },
  { id: 2, title: 'Na Ja', released: false },
  { id: 3, title: 'Fitoor', released: false },
  { id: 4, title: 'Intazaar', released: false },
  { id: 5, title: 'Khamoshiyan', released: false },
  { id: 6, title: 'A.M. [interlude]', released: false },
  { id: 7, title: 'Kon Hai Tu?', released: false },
  { id: 8, title: 'Faasle', released: false },
  { id: 9, title: 'Heaven Calls', released: false }
]

export default function LorePage() {
  const [expandedSong, setExpandedSong] = useState<number | null>(null)

  const toggleSong = (songId: number, isReleased: boolean) => {
    if (!isReleased) return
    setExpandedSong(expandedSong === songId ? null : songId)
  }

  return (
    <PageTransition className="min-h-screen bg-[#051b2c] relative overflow-hidden">
      {/* Ambient light effects */}
      <FadeOnly delay={0.2} className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </FadeOnly>

      <div className={`relative ${poppins.className}`}>
        <FadeOnly delay={0.4}>
          <Header />
        </FadeOnly>
        <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Title */}
            <FadeOnly delay={0.6}>
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2">
                  Chapter 1
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-400 italic">
                  Kon Hai Tu?
                </p>
              </div>
            </FadeOnly>

            {/* Story Content */}
            <div className="grid md:grid-cols-1 gap-8 sm:gap-12 text-gray-300 leading-relaxed">
              <FadeOnly delay={0.8}>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#23b9d6] mb-4">
                    Abstract
                  </h2>
                <p className="text-sm sm:text-base font-extralight">
                  &ldquo;Kon Hai Tu?&rdquo; loosly translating to &ldquo;Who Are You?&rdquo; is a question most people subject themselves to at some point during their life. 
                  In a world where individuality is punished and conformity rewarded, the question becomes a plea for self-discovery. It is fascinating that a somewhat trivial question 
                  can compel individuals to examine their existence, personal truths, and overarching purpose within reality. Navigating this interplay of internal reflection 
                  and external influences, few are able to find an answer.
                </p>
                </div>
              </FadeOnly>

              <FadeOnly delay={1.0}>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#ff6b3d] mb-4">
                    Concept
                  </h2>
                <p className="text-sm sm:text-base font-extralight">
                  The story begins with an individual, unsure of who they are anymore. Looking into a broken mirror, they see reflections that appear to be versions of themselves 
                  from alternate realities, each shard representing a different personality shaped by choices they made in that universe. &ldquo;Kon Hai Tu?&rdquo; is about understanding 
                  the personality they have become as a result of their choices in this one — a search for identity.
                </p>
                </div>
              </FadeOnly>

              {/* Personalities Button */}
              <FadeOnly delay={1.2}>
                <div className="text-center pt-2 sm:pt-3">
                  <a 
                    href="https://konhaitu.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-light text-gray-400 hover:text-[#23b9d6] border-b border-gray-600/30 hover:border-[#23b9d6]/50 transition-all duration-300"
                  >
                    <span>Personalities</span>
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                  </a>
                </div>
              </FadeOnly>

              <FadeOnly delay={1.4}>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#23b9d6] mb-4">
                    Thoughts
                  </h2>
                <p className="text-sm sm:text-base font-extralight">
                    I am moved to see how a project that started as an aim to answer a modest question in the context of a single individual has taken a life of its own. I am humbled to have
                    been a part of this journey, with some increadible people and look forward to the next chapter. Till then:
                </p>
                </div>
              </FadeOnly>
            </div>

            {/* Call to Action */}
            <FadeOnly delay={1.5}>
              <div className="text-center pt-6 sm:pt-8">
                <p className={`text-base sm:text-lg text-gray-400 italic font-extralight ${satisfy.className}`}>
                  &ldquo;We&rsquo;re all searching for the same thing
                  <br className="hidden sm:block" />
                  <span className="block sm:inline">a moment of recognition, a glimpse of belonging.&rdquo;</span>
                </p>
                <p className={`text-sm text-gray-500 mt-4 ${satisfy.className}`}>— Ramé Sivano</p>
              </div>
            </FadeOnly>

            {/* Songs Status Section */}
            <FadeOnly delay={1.6}>
              <div className="pt-8 sm:pt-10">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-4 text-center">
                  Tracklist
                </h3>
                <div className="max-w-2xl mx-auto space-y-2">
                  {songs.map((song, index) => (
                    <FadeOnly key={song.id} delay={1.8 + index * 0.05}>
                      <div 
                        className={`group relative rounded border transition-all duration-300 ${
                          song.released 
                            ? 'bg-white/5 border-[#23b9d6]/30 hover:bg-[#23b9d6]/10 cursor-pointer' 
                            : 'bg-black/10 border-gray-700/30'
                        }`}
                        onClick={() => toggleSong(song.id, song.released)}
                      >
                        <div className="px-4 py-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-gray-600 w-4 text-center">
                                {song.id}
                              </span>
                              <p className={`text-sm font-medium ${
                                song.released ? 'text-white' : 'text-gray-500'
                              }`}>
                                {song.title}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              {song.released && song.personalityType && (
                                <div className={`transition-transform duration-200 ${
                                  expandedSong === song.id ? 'rotate-180' : ''
                                }`}>
                                  <ChevronDown className="w-3 h-3 text-[#23b9d6]" />
                                </div>
                              )}
                              <div className={`flex-shrink-0 transition-colors duration-300 ${
                                song.released ? 'text-[#23b9d6]' : 'text-gray-600'
                              }`}>
                                {song.released ? (
                                  <Unlock className="w-3 h-3" />
                                ) : (
                                  <Lock className="w-3 h-3" />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Expandable personality type section */}
                        {song.released && song.personalityType && expandedSong === song.id && (
                          <div className="border-t border-[#23b9d6]/20 px-4 py-3 bg-[#23b9d6]/5">
                            <p className="text-gray-500 text-xs font-light">
                              Personality: <span className="text-gray-400">{song.personalityType}</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </FadeOnly>
                  ))}
                </div>
              </div>
            </FadeOnly>
          </div>
        </main>
        
        <FadeOnly delay={2.5}>
          <Footer />
        </FadeOnly>
      </div>
    </PageTransition>
  )
}
