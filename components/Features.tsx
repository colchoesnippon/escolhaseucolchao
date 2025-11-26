import React from 'react';

interface FeaturesProps {
  onOpenModal: (type: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-nippon-bg py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-12 md:mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-nippon-text mb-4 leading-tight">
            Tecnologia que <br/>você sente.
          </h2>
          <p className="text-lg text-gray-500">
            Cada camada do Colchão Nippon foi projetada cientificamente para otimizar sua recuperação física e mental.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* CARD 1: Vibroterapia (Dark/Tech Theme) */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-black text-white h-[400px] md:h-[500px] lg:col-span-2 shadow-2xl transition-transform hover:scale-[1.01] duration-500">
            {/* Background Gradient/Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-green-900/40 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1974&auto=format&fit=crop" 
              alt="Ondas sonoras"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-[2s]"
            />
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
              <div>
                <span className="text-green-400 font-medium tracking-wider text-xs uppercase mb-2 block">Relaxamento Ativo</span>
                <h3 className="text-3xl md:text-4xl font-semibold mb-2">Vibroterapia Inteligente.</h3>
                <p className="text-gray-400 max-w-md">
                  Massagem bioelétrica que detecta pontos de tensão. Controle total pelo seu smartphone na versão Premium.
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8">
                {/* Mock UI Elements resembling an App */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5 w-full max-w-sm">
                   <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-300">Modo Relax</span>
                      <div className="flex gap-1">
                        <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] text-green-500 uppercase">Ativo</span>
                      </div>
                   </div>
                   <div className="h-12 flex items-end gap-1 justify-between opacity-80">
                      {[40, 60, 35, 80, 55, 90, 45, 60, 30].map((h, i) => (
                        <div key={i} className="w-2 bg-green-500 rounded-t-sm" style={{ height: `${h}%`, opacity: 0.5 + (i * 0.05) }}></div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Plus Button */}
            <button 
              onClick={() => onOpenModal('feature_vibro')}
              className="absolute top-8 right-8 w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-white/20"
              aria-label="Saiba mais sobre Vibroterapia"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>

          {/* CARD 2: Energia Quântica (Light/Blue Theme) */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-white text-gray-900 h-[400px] md:h-[500px] shadow-xl border border-gray-100 transition-transform hover:scale-[1.01] duration-500">
             <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-white z-0"></div>
             {/* Abstract Waves */}
             <div className="absolute top-0 right-0 w-full h-2/3 opacity-40">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-blue-200 animate-pulse-slow">
                  <path transform="translate(100 100)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-4.2C93.4,10.8,81.8,25.9,70.6,38.8C59.4,51.7,48.6,62.4,36.1,70.3C23.6,78.2,9.3,83.3,-4.1,90.4C-17.5,97.5,-30,106.6,-41.2,102.7C-52.4,98.8,-62.3,81.9,-70.7,66.8C-79.1,51.7,-86,38.4,-88.3,24.4C-90.6,10.4,-88.3,-4.3,-82.1,-17.1C-75.9,-29.9,-65.8,-40.8,-54.3,-49.1C-42.8,-57.4,-29.9,-63.1,-17.3,-66.1C-4.7,-69.1,7.6,-69.4,20.5,-68.8" />
                </svg>
             </div>

             <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                <span className="text-blue-500 font-medium tracking-wider text-xs uppercase mb-2 block">Saúde Celular</span>
                <h3 className="text-3xl font-semibold mb-4 leading-tight">Energia <br/>Bioquântica.</h3>
                <p className="text-gray-500 mb-auto">
                  A união de íons e infravermelho longo que restaura seu equilíbrio bioenergético.
                </p>
                
                <div className="mt-8">
                  <div className="flex -space-x-4">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm">
                         {i === 1 ? 'Li+' : i === 2 ? 'O-' : 'Fe+'}
                       </div>
                     ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-medium">Partículas Ativas</p>
                </div>
             </div>

             <button 
              onClick={() => onOpenModal('feature_quantum')}
              className="absolute bottom-8 right-8 w-10 h-10 bg-gray-100 hover:bg-nippon-blue text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-20"
              aria-label="Saiba mais sobre Energia Quântica"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>

          {/* CARD 3: Estrutura (Wide with Image) */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-gray-100 h-[350px] md:col-span-2 lg:col-span-3 shadow-lg hover:shadow-xl transition-all duration-500">
             <div className="absolute inset-0">
               <img 
                 src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=2070&auto=format&fit=crop" 
                 alt="Estrutura de camadas do colchão" 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-transparent"></div>
             </div>

             <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center max-w-xl text-white">
                <span className="text-orange-400 font-medium tracking-wider text-xs uppercase mb-2">Engenharia do Sono</span>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">Densidade Progressiva Inteligente.</h3>
                <p className="text-gray-200 text-lg">
                  Suporte ortopédico firme onde sua coluna precisa, e conforto macio onde seu corpo toca. A estrutura Rabatan permite que o colchão "respire".
                </p>
             </div>

             <button 
              onClick={() => onOpenModal('feature_structure')}
              className="absolute top-8 right-8 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-white/30"
              aria-label="Saiba mais sobre Estrutura"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;