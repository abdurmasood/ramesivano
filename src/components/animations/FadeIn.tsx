'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

const getDirectionOffset = (direction: 'up' | 'down' | 'left' | 'right') => {
  switch (direction) {
    case 'up':
      return { x: 0, y: 60 }
    case 'down':
      return { x: 0, y: -60 }
    case 'left':
      return { x: 60, y: 0 }
    case 'right':
      return { x: -60, y: 0 }
    default:
      return { x: 0, y: 60 }
  }
}

export function FadeIn({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up' 
}: FadeInProps) {
  const offset = getDirectionOffset(direction)
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...offset
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.215, 0.61, 0.355, 1] // Melancholic, contemplative easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}