import React from 'react';
import { IMAGES, BOOKING_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ tagline }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Hotel Devtara Facade" 
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-devtara-green/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-devtara-gold text-lg md:text-xl uppercase tracking-[0.2em] mb-4 font-bold animate-fade-in-up">
          Welcome to
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 text-shadow animate-fade-in-up delay-100">
          Hotel Devtara
        </h1>
        <p className="text-xl md:text-2xl text-devtara-softPink font-serif italic mb-10 animate-fade-in-up delay-200">
          {tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a 
            href={BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-devtara-gold hover:bg-amber-500 text-white font-bold rounded-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            Book Your Stay <ArrowRight size={20} />
          </a>
          <a 
            href="#rooms" 
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-devtara-green text-white font-bold rounded-sm uppercase tracking-wider transition-all"
          >
            View Rooms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;