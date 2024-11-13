'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Play, Video, Instagram, Twitter, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function ArtistLinkTree() {
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleSection = (section: string) => {
    if (section === "About") {
      setIsAboutOpen(true)
    } else {
      setActiveSection(activeSection === section ? null : section)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden backdrop-blur-[100px]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
            }}
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 100 + 50,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <header className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6"
          >
            <div className="relative w-full h-full">
              {/* White circle background with smoother gradient edge */}
              <div 
                className="absolute inset-0 rounded-full overflow-hidden z-10" 
                style={{ 
                  background: 'radial-gradient(circle at center, white 60%, rgba(255,255,255,0.9) 80%, transparent 100%)',
                  padding: '2px' // Add slight padding for smoother edge
                }}
              >
                {/* Profile Image with improved styling */}
                <img
                  src="/profile.jpeg"
                  alt="Ramé Sivano"
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    position: 'relative',
                    zIndex: 11,
                    filter: 'brightness(1.02)',
                  }}
                />
              </div>
              
              {/* Enhanced outer glowing circle */}
              <motion.div
                className="absolute inset-[-8px] rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(34, 211, 238, 0.4))',
                  filter: 'blur(8px)',
                  zIndex: 5
                }}
              />
              
              {/* Enhanced inner glowing circle */}
              <motion.div
                className="absolute inset-[-4px] rounded-full"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                style={{
                  background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.6))',
                  filter: 'blur(3px)',
                  zIndex: 6
                }}
              />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ramé Sivano
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            "The Begininng"
          </motion.p>
        </header>

        <nav className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {[
            { 
              icon: Play, 
              text: "Listen on Spotify", 
              color: "from-green-500 to-green-700",
              href: "https://open.spotify.com/artist/5nkyoqkxYOlgg6lbofcBZB?si=arP6_zhbTKCbGq1LNvqJ9g"
            },
            { 
              icon: Music, 
              text: "Listen on Apple Music", 
              color: "from-pink-500 to-pink-700",
              href: "https://music.apple.com/us/artist/ram%C3%A9-sivano/1694371021"
            },
            { 
              icon: Video, 
              text: "Watch on YouTube", 
              color: "from-red-500 to-red-700",
              href: "https://www.youtube.com/channel/UCgha49SDKezqu_RUe_u6qaQ"
            }
          ].map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <Button
                variant="outline"
                className={`w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-gray-100 hover:text-gray-200 border-none shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}
                onClick={() => item.href && window.open(item.href, '_blank')}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.text}
              </Button>
            </motion.div>
          ))}
        </nav>

        <motion.section 
          className="mb-8 sm:mb-12 bg-gray-900 bg-opacity-50 p-4 sm:p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Latest Release</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/50WmEK3oS6g"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-lg text-gray-300">&quot;A Different Kind of Love&quot; - New Single Out Now</p>
        </motion.section>

        <motion.div
          className="space-y-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[
            { title: "About", content: "Learn more about my journey in music.", icon: User, color: "indigo" }
          ].map((item) => (
            <motion.div 
              key={item.title} 
              className={`bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden shadow-lg border border-${item.color}-500`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => toggleSection(item.title)}
                className={`w-full p-4 text-left font-semibold text-gray-200 hover:bg-${item.color}-900 hover:bg-opacity-30 transition-colors duration-200 flex items-center justify-between`}
              >
                <span className="flex items-center">
                  <item.icon className={`mr-3 h-6 w-6 text-${item.color}-400`} />
                  {item.title}
                </span>
                <motion.span
                  animate={{ rotate: activeSection === item.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {activeSection === item.title && item.title === "Tour Dates" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 bg-${item.color}-900 bg-opacity-20 text-gray-300`}
                  >
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {item.content}
                    </motion.p>
                    <motion.ul className="mt-2 space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                      <li className="flex justify-between items-center">
                        <span>New York, NY</span>
                        <span className="text-blue-400">June 15, 2023</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Los Angeles, CA</span>
                        <span className="text-blue-400">June 22, 2023</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Chicago, IL</span>
                        <span className="text-blue-400">June 29, 2023</span>
                      </li>
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <footer className="mt-8 sm:mt-12 flex justify-center space-x-4 sm:space-x-6">
          {[
            { icon: Instagram, href: "https://www.instagram.com/ramesivano/", label: "Instagram" },
            { icon: Twitter, href: "https://x.com/ramesivano?s=11", label: "Twitter" }
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"  // Added to open links in new tab
              rel="noopener noreferrer"  // Added for security best practices
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              aria-label={item.label}
            >
              <item.icon className="h-8 w-8" />
            </motion.a>
          ))}
        </footer>
      </motion.div>

      {/* About Modal */}
      <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <DialogContent className="bg-gray-900 text-gray-300 border border-indigo-500 p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              About the Artist
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-gray-400">
              Learn more about Ramé's journey in music
            </DialogDescription>
          </DialogHeader>
          <motion.div 
            className="mt-4 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-4">
            Hailing from the capital of Pakistan, Ramé began his journey into the arts at the age of 10. He spent his early years solidifying a firm footing in the independent music scene in Pakistan by touring across the country as a cover artist. Approach 2016, Ramé took a break from touring and moved to the United Kingdom, focusing more on his lyrical expression. 
            </p>
            <p className="mb-4">
            Ramé frequently cites his inspirations as Atif Aslam, Arijit Singh and Xulfi (from Call The Band) growing up. After travelling halfway across the globe, he spent a significant period of time crafting his own voice, studying artists like Post Malone, The Weeknd, Joji, Ed Sheeran, Michael Jackson and merging their collective sound with his roots.            </p>
            <p>
            Today Ramé taps deeper in himself to connect with his audience. His artistic vision is boundless, constantly challenging himself musically and lyrically to explore his limits. Ramé’s discography is a testament to his commitment to growth as an artist. He believes in being true to his vision and due to his raw expression, others are finding it easy to believe in him too.            </p>
          </motion.div>
          <Button onClick={() => setIsAboutOpen(false)} className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}