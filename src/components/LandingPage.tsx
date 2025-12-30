import React, { useEffect, useState } from 'react';
import birdImage from '../assets/Vector.png';

interface BirdProps {
  x: number;
  y: number;
}

interface CloudProps {
  size: 'large' | 'medium';
  x: number;
  y: number;
  opacity: number;
}

interface Position {
  x: number;
  y: number;
}

const LandingPage: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#dfe9f3] relative overflow-hidden">
      {/* Curved Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left curve */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#c5d9ed] rounded-full opacity-60"></div>
        {/* Top right curve */}
        <div className="absolute -top-20 right-20 w-64 h-64 bg-[#b8d0e8] rounded-full opacity-50"></div>
        {/* Bottom large curves */}
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[#b8d0e8] rounded-full opacity-70"></div>
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-[#c5d9ed] rounded-full opacity-60"></div>
        <div className="absolute -bottom-48 right-1/4 w-[700px] h-[700px] bg-[#b8d0e8] rounded-full opacity-50"></div>
        <div className="absolute -bottom-20 -right-32 w-[500px] h-[500px] bg-[#c5d9ed] rounded-full opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header - Inside content area */}
        <header className="px-6 pt-6 pb-4">
          <nav className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">coup.</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">How it Works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Use Case</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">FAQ</a>
            </div>
            
            <button className="bg-[#0A84FF] hover:bg-[#0070E0] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg">
              Contact Sales
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 pb-20">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-md animate-fadeIn">
              <span className="flex items-center justify-center w-6 h-6 bg-[#0A84FF] rounded-full">
                <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </span>
              <span className="text-[#0A84FF] font-semibold text-sm">#1 iMessage Automation Tool</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slideUp">
              <span className="text-[#0A84FF]">iMessage</span>{' '}
              <span className="text-gray-900">Automation</span>
              <br />
              <span className="text-gray-900">for Teams and AI</span>
              <br />
              <span className="text-gray-900">Workflows.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slideUp" style={{animationDelay: '0.1s'}}>
              Coup lets you, your team, or AI workflows send iMessages directly from
              your phone number, running securely on your Mac or Mac Mini.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slideUp" style={{animationDelay: '0.2s'}}>
              <button className="bg-[#0A84FF] hover:bg-[#0070E0] text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:scale-105">
                Get Started
              </button>
              <button className="bg-white/95 backdrop-blur-sm hover:bg-white text-gray-900 px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl flex items-center gap-2 border border-gray-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                Download the Mac app
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <p className="text-gray-600 text-sm font-medium">Scroll to learn more</p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </main>

        {/* Static Birds */}
        <Bird x={10} y={30} />
        <Bird x={25} y={50} />
        <Bird x={75} y={35} />
        <Bird x={65} y={65} />
        <Bird x={90} y={55} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out backwards;
        }
      `}</style>
    </div>
  );
};

const Bird: React.FC<BirdProps> = ({ x, y }) => {
  return (
    <div 
      className="absolute pointer-events-none z-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <img 
        src={birdImage} 
        alt="Flying bird" 
        className="w-12 h-12 md:w-16 md:h-16 object-contain"
      />
    </div>
  );
};

export default LandingPage;