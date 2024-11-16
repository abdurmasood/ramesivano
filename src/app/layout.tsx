import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
  title: "Ramé Sivano",
  description: "Ramé Sivano Official Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
        <Toaster />
      </body>
    </html>
  )
}
