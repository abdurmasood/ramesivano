'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface DynamicBackgroundProps {
  children: React.ReactNode
}

export function DynamicBackground({ children }: DynamicBackgroundProps) {
  const pathname = usePathname()

  useEffect(() => {
    const body = document.body
    
    if (pathname === '/studio-x') {
      body.style.backgroundColor = '#000000'
    } else {
      body.style.backgroundColor = '#051b2c'
    }

    return () => {
      body.style.backgroundColor = '#051b2c'
    }
  }, [pathname])

  return (
    <body>
      {children}
    </body>
  )
}