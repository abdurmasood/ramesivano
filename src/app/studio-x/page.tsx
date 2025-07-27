import Spline from '@splinetool/react-spline';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function StudioX() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      {/* Header with black background overlay */}
      <div className="relative z-20" style={{ backgroundColor: '#121212' }}>
        <Header />
      </div>
      
      <main>
        {/* Hero Section - Pure Spline Animation */}
        <div className="h-screen w-full">
          <Spline
            scene="https://prod.spline.design/gtiDBwJjr2HuWYwO/scene.splinecode"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        
        {/* Content Section */}
        <div className="px-4 py-16 text-white" style={{ backgroundColor: '#121212' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-center mb-8">
              Studio X represents the intersection of technology and artistry. Here, every sound 
              is crafted with precision, every beat engineered to perfection.
            </p>
            <p className="text-base leading-relaxed text-center opacity-80">
              This digital space embodies the creative process - from the initial spark of 
              inspiration to the final polished track. The particles you see above are not 
              just visual elements; they represent the building blocks of sound itself.
            </p>
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