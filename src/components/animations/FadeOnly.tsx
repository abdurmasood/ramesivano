'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeOnlyProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeOnly({ 
  children, 
  delay = 0, 
  className = ''
}: FadeOnlyProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0
      }}
      animate={{ 
        opacity: 1
      }}
      transition={{
        duration: 1.0,
        delay,
        ease: [0.215, 0.61, 0.355, 1] // Melancholic, contemplative easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}