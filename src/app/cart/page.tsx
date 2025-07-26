'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { Header } from "@/components/layout/Header"
import { useCart } from '@/features/cart'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function CartPage() {
  const { cartItems } = useCart()
  

  if (cartItems.length === 0) {
    return (
      <div className={`flex flex-col min-h-screen bg-[#051b2c] ${playfair.className}`}>
        <div className="fixed inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
        </div>
        
        <div className="relative flex flex-col flex-1">
          <Header />
          <main className="flex-1 flex items-center justify-center pb-16">
            <div className="text-center px-4">
              <h1 className="text-3xl text-white mb-6">Your Cart is Empty</h1>
              <a href="https://studiox.vip">
                <Button className="bg-[#ff6b3d] hover:bg-[#e55d2d] text-white">
                  Visit Studio X
                </Button>
              </a>
            </div>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col min-h-screen bg-[#051b2c] ${playfair.className}`}>
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#23b9d6] opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b3d] opacity-20 blur-[100px]" />
      </div>

      <div className="relative flex flex-col flex-1">
        <Header />

        <main className="flex-1 w-full">
          <div className="max-w-4xl mx-auto px-4 py-8 pb-16">
            <h1 className="text-3xl text-white mb-8">Your Cart</h1>

            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <Card key={item.id} className="bg-black/20 backdrop-blur-sm border-0 p-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md w-20 h-20 object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-lg truncate">{item.name}</h3>
                    </div>
                    <div className="text-white text-sm">
                      Qty: {item.quantity}
                    </div>
                  </div>
                </Card>
              ))}
            </div>


            <div className="text-center">
              <a href="https://studiox.vip">
                <Button variant="ghost" className="text-gray-400 hover:text-[#23b9d6]">
                  Visit Studio X
                </Button>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}