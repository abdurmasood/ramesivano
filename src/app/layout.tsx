import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"

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
      <body className="bg-[#051b2c]">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
