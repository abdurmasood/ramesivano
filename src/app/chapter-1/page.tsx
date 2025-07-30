'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageTransition, FadeOnly } from '@/components/animations'
import { Poppins, Satisfy } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
})

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
})

export default function LorePage() {
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
              {/* Chapter 1 */}
              <FadeOnly delay={0.8}>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#23b9d6] mb-4">
                    Origins
                  </h2>
                <p className="text-sm sm:text-base font-extralight">
                  &ldquo;Kon Hai Tu?&rdquo; translating to the words &ldquo;Who Are You?&rdquo; is a question most people subject themselves to at a certain point during their life. 
                  In a world where individuality is punished and conformity rewarded, the question becomes a plea for self-discovery. To think that a somewhat trivial question can compel 
                  individuals to examine their existence, personal truths, and overarching purpose within reality. Navigating this interplay of internal reflection and external influences, 
                  few are able to find an answer.
                </p>
                </div>
              </FadeOnly>

              {/* Chapter 2 */}
              <FadeOnly delay={1.0}>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#ff6b3d] mb-4">
                    Concept
                  </h2>
                <p className="text-sm sm:text-base font-extralight">
                  The story starts with an individual, unsure about their identity. Looking into a broken mirror, they see a reflections that are a version of them in an alternate reality.
                  Someone they could have been. These reflections are 
                </p>
                <p className="text-sm sm:text-base font-extralight">
                  --
                </p>
                </div>
              </FadeOnly>

              {/* Chapter 3 */}
              <FadeOnly delay={1.2}>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#23b9d6] mb-4">
                    Thoughts
                  </h2>
                <p className="text-sm sm:text-base font-extralight">
                  I am moved to see that a project that started as an aim to answer a modest question in the context of a single individual has taken a life of its own. 
                </p>
                <p className="text-sm sm:text-base font-extralight">
                  --
                </p>
                </div>
              </FadeOnly>
            </div>

            {/* Call to Action */}
            <FadeOnly delay={1.4}>
              <div className="text-center pt-6 sm:pt-8">
                <p className={`text-base sm:text-lg text-gray-400 italic font-extralight ${satisfy.className}`}>
                  &ldquo;In the end, we are all searching for the same thing—
                  <br className="hidden sm:block" />
                  <span className="block sm:inline">a moment of recognition, a glimpse of belonging.&rdquo;</span>
                </p>
                <p className={`text-sm text-gray-500 mt-4 ${satisfy.className}`}>— Ramé Sivano</p>
              </div>
            </FadeOnly>
          </div>
        </main>
        
        <FadeOnly delay={1.6}>
          <Footer />
        </FadeOnly>
      </div>
    </PageTransition>
  )
}
