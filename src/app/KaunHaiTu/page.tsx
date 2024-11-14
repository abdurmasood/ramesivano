'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

const products = [
  { id: 1, name: "Chapter 1 Vinyl", price: 29.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 2, name: "Tour T-Shirt", price: 24.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 3, name: "Signed Poster", price: 19.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 4, name: "Logo Hoodie", price: 49.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 5, name: "Enamel Pin Set", price: 14.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 6, name: "Album Lyric Book", price: 34.99, image: "/placeholder.svg?height=400&width=400" },
]

export default function Component() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1)
  }

  return (
    <div className={`min-h-screen bg-[#051b2c] relative overflow-hidden ${playfair.className}`}>
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className="relative">
        <Header />

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <Card key={product.id} className="bg-black/20 backdrop-blur-sm border-0 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#23b9d6]/20 to-[#ff6b3d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-4 relative z-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-[#23b9d6] font-bold mb-4">${product.price.toFixed(2)}</p>
                  <Button 
                    className="w-full bg-[#ff6b3d] hover:bg-[#e55d2d] text-white"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}