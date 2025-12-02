import React from 'react';
import { IMAGES } from '../constants';
import { Sparkles } from 'lucide-react';

interface AboutProps {
  description: string;
}

const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <section id="about" className="py-20 bg-devtara-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-devtara-pink/20 z-0 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-devtara-gold/20 z-0 rounded-full blur-xl"></div>
            <img 
              src={IMAGES.about} 
              alt="Hotel Interior" 
              className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-10 -left-10 z-20 hidden md:block">
               <div className="bg-devtara-green text-white p-6 rounded-lg shadow-xl max-w-xs">
                 <p className="font-serif italic text-lg">"Where luxury meets serenity."</p>
               </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-devtara-pink">
              <Sparkles size={20} />
              <span className="uppercase tracking-widest font-bold text-sm">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-devtara-green font-bold leading-tight">
              A Jewel in the Heart of the City
            </h2>
            <div className="w-20 h-1 bg-devtara-gold"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Designed with a unique palette of regal reds, warm golds, and inviting creams, Hotel Devtara is not just a place to sleep, but an experience to cherish. Whether you are traveling for business or leisure, our commitment to excellence ensures your stay is nothing short of perfection.
            </p>
            
            <div className="pt-4 flex gap-8 text-devtara-green">
                <div>
                    <h3 className="text-3xl font-bold font-serif">50+</h3>
                    <p className="text-sm uppercase tracking-wide text-gray-500">Rooms</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold font-serif">24/7</h3>
                    <p className="text-sm uppercase tracking-wide text-gray-500">Service</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold font-serif">4.8</h3>
                    <p className="text-sm uppercase tracking-wide text-gray-500">Rating</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;