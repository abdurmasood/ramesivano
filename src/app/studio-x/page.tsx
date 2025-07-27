'use client';

import Spline from '@splinetool/react-spline';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StudioX() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      {/* Header with black background overlay */}
      <div className="relative z-20" style={{ backgroundColor: '#121212' }}>
        <Header />
      </div>
      
      <main>
        {/* Hero Section - Pure Spline Animation */}
        <div className="h-[calc(100vh-4rem)] w-full">
          <Spline
            scene="https://prod.spline.design/gtiDBwJjr2HuWYwO/scene.splinecode"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        
        {/* Content Section */}
        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white" style={{ backgroundColor: '#121212' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mb-6 sm:mb-8">
              Studio X represents the intersection of technology and artistry. Here, every sound 
              is crafted with precision, every beat engineered to perfection.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-center opacity-80 mb-8">
              This digital space embodies the creative process - from the initial spark of 
              inspiration to the final polished track. The particles you see above are not 
              just visual elements; they represent the building blocks of sound itself.
            </p>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => window.open('https://studiox.vip', '_blank')}
                className="border-white/20 text-black bg-white hover:bg-gray-100"
              >
                Join
                <SparklesIcon className="-me-1 opacity-60" size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer with black background */}
      <div style={{ backgroundColor: '#121212' }}>
        <Footer />
      </div>
    </div>
  );
}