import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 text-red-100 py-12 border-t border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src={IMAGES.logo} 
              alt="Hotel Devtara" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-serif font-bold text-white">Hotel Devtara</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-devtara-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-devtara-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-devtara-gold transition-colors">Sitemap</a>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-red-400">
            © {new Date().getFullYear()} Hotel Devtara. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;