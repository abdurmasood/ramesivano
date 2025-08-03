'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Galaxy } from '@/components/studiox/galaxy';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition, FadeOnly } from "@/components/animations";
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
    <PageTransition className="min-h-screen bg-black overflow-y-auto">
      {/* Fade to black overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 pointer-events-none transition-opacity duration-1000 ${
          isFading ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Header with black background overlay */}
      <FadeOnly delay={0.4}>
        <div className="relative z-20 bg-black">
          <Header />
        </div>
      </FadeOnly>
      
      <main>
        {/* Hero Section - Particle System */}
        <FadeOnly delay={0.6}>
          <div className="h-[calc(100vh-4rem)] w-full relative overflow-hidden">
            <Canvas
            camera={{
              position: [4, 2, 6],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
            className="bg-black"
            style={{ pointerEvents: 'none' }}
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
            
            {/* Dark overlay to dim galaxy */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            
            {/* Studio X Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal text-white font-urbanist tracking-wider">
                Studio X
              </h1>
            </div>
          </div>
        </FadeOnly>
        
        {/* Content Section */}
        <FadeOnly delay={0.8}>
          <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white bg-black">
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mb-6 sm:mb-8">
                At Studio X, our focus is on telling stories. Asia has been an untapped market for stories for decades.
                Our goal is to make people feel a part of a community where they feel valued and heard.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-center opacity-80 mb-8">
                Currenlty our community is invite only. If you're interested in joining, please reach out to us.
              </p>
              
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={handleJoin}
                  className="border-white/20 text-black bg-white hover:bg-gray-100"
                >
                  Access
                  <SparklesIcon className="-me-1 opacity-60" size={16} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </FadeOnly>
      </main>
      
      {/* Footer with black background */}
      <FadeOnly delay={1.0}>
        <div className="bg-black">
          <Footer />
        </div>
      </FadeOnly>
    </PageTransition>
  );
}