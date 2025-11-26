import React from 'react';
import { Color, BaseType } from '../types';

interface StickyImageProps {
  color: Color;
  baseType: BaseType;
  imageUrl: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ color, imageUrl }) => {
  return (
    <div className="sticky top-0 h-[50vh] md:h-screen w-full flex items-center justify-center bg-white md:bg-transparent z-10 md:z-auto transition-colors duration-500">
      <div className="relative w-full h-full max-h-[500px] md:max-h-[80%] max-w-[90%] flex items-center justify-center p-6 md:p-12">
         {/* Main Product Image */}
         <img 
            src={imageUrl} 
            alt="Colchão Nippon Configurado" 
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl ring-1 ring-black/5 transition-all duration-700 ease-in-out transform"
            style={{ 
              objectPosition: 'center',
            }}
         />
         
         {/* Simulated UI Label overlay */}
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
            <span 
              className="w-3 h-3 rounded-full shadow-inner" 
              style={{ backgroundColor: color === Color.BEIGE ? '#E2D7C7' : color === Color.GREY ? '#9CA3AF' : color === Color.BROWN ? '#5D4037' : '#1F2937'}}
            ></span>
            <span className="text-sm font-medium text-gray-900">{color}</span>
         </div>
      </div>
    </div>
  );
};

export default StickyImage;