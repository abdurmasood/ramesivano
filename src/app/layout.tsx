import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { DynamicBackground } from "@/components/layout/DynamicBackground"

const urbanist = Urbanist({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-urbanist"
});


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
    <html lang="en" className={urbanist.variable}>
      <DynamicBackground>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </DynamicBackground>
    </html>
  )
}
