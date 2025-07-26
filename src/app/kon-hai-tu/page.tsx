'use client'

import { useEffect } from 'react'
export default function KonHaiTuPage() {

  useEffect(() => {
    // Redirect to studiox.vip
    window.location.href = 'https://studiox.vip'
  }, [])

  return (
    <div className="min-h-screen bg-[#051b2c] flex items-center justify-center">
      <div className="text-center">
        <p className="text-white text-xl">Redirecting to Studio X...</p>
      </div>
    </div>
  )
}