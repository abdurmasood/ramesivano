'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Galaxy } from '@/components/studiox/galaxy';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function StudioX() {
  const [isFading, setIsFading] = useState(false);

  const handleJoin = () => {
    setIsFading(true);
    setTimeout(() => {
      window.location.href = 'https://studiox.vip';
    }, 1000); // Wait for fade animation to complete
  };
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Fade to black overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 pointer-events-none transition-opacity duration-1000 ${
          isFading ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Header with black background overlay */}
      <div className="relative z-20" style={{ backgroundColor: '#000000' }}>
        <Header />
      </div>
      
      <main>
        {/* Hero Section - Particle System */}
        <div className="h-[calc(100vh-4rem)] w-full relative">
          <Canvas
            camera={{
              position: [4, 2, 6],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
            style={{ background: '#000000' }}
          >
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={false}
              minDistance={5}
              maxDistance={50}
              target={[0, 0, 0]}
            />
            <Galaxy
              count={100000}
              size={0.01}
              radius={5}
              branches={4}
              spin={1}
              randomness={0.2}
              randomnessPower={3}
              insideColor="#ff6030"
              outsideColor="#1b3984"
            />
          </Canvas>
          
          {/* Studio X Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal text-white font-urbanist tracking-wider">
              Studio X
            </h1>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white" style={{ backgroundColor: '#000000' }}>
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
                onClick={handleJoin}
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
      <div style={{ backgroundColor: '#000000' }}>
        <Footer />
      </div>
    </div>
  );
}