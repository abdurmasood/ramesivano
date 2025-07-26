'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
})

export default function LorePage() {
  return (
    <div className="min-h-screen bg-[#051b2c] relative overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className={`relative ${poppins.className}`}>
        <Header />
        <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                The Lore
              </h1>
              <div className="w-24 h-1 bg-[#23b9d6] mx-auto"></div>
            </div>

            {/* Story Content */}
            <div className="grid md:grid-cols-1 gap-12 text-gray-300 leading-relaxed">
              {/* Chapter 1 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#23b9d6] mb-4">
                  Origins
                </h2>
                <p className="text-lg">
                  In the shadows of urban landscapes, where neon lights flicker against concrete walls, 
                  a sound was born. Ramé Sivano emerged from the collision of two worlds—the ancient 
                  melodies that echo through generations and the electric pulse of modern expression.
                </p>
                <p className="text-lg">
                  Growing up between cultures, between languages, between the old and the new, 
                  Ramé found solace in the spaces others couldn't see. Music became the bridge, 
                  the translator of unspoken emotions and untold stories.
                </p>
              </div>

              {/* Chapter 2 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#ff6b3d] mb-4">
                  The Quest
                </h2>
                <p className="text-lg">
                  "Kon Hai Tu" began as a question whispered in the dark—who are you? 
                  But it became something more: a journey through identity, through belonging, 
                  through the maze of modern existence where everyone is searching for something real.
                </p>
                <p className="text-lg">
                  Each track in this collection is a fragment of that search, a piece of the puzzle 
                  that forms when authenticity meets artistry. The album doesn't provide answers—it 
                  invites you to ask better questions.
                </p>
              </div>

              {/* Chapter 3 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#23b9d6] mb-4">
                  The Sound
                </h2>
                <p className="text-lg">
                  This is music for the spaces between—between sleep and waking, between 
                  languages, between heartbeats. It's the soundtrack to late-night conversations 
                  with yourself, to moments when the city breathes and you finally remember 
                  how to breathe with it.
                </p>
                <p className="text-lg">
                  Ramé Sivano's sound defies easy categorization, drawing from electronic 
                  soundscapes, indie sensibilities, and global influences to create something 
                  entirely new. Something entirely human.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <p className="text-xl text-gray-400 italic">
                "In the end, we are all searching for the same thing—
                <br />
                a moment of recognition, a glimpse of home."
              </p>
              <p className="text-sm text-gray-500 mt-4">— Ramé Sivano</p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
