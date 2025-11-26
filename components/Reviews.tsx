import React, { useRef } from 'react';

const REVIEWS = [
  {
    id: 1,
    name: 'Ricardo Almeida',
    city: 'Curitiba, PR',
    text: 'Impressionado com a qualidade. A vibroterapia ajuda muito depois de um dia tenso. O acabamento é impecável.',
    image: 'https://images.unsplash.com/photo-1505693416388-b0346efee539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 2,
    name: 'Ana Paula Souza',
    city: 'São Paulo, SP',
    text: 'A entrega foi super rápida e o atendimento no WhatsApp excelente. O colchão Queen ficou perfeito na minha cama box.',
    image: 'https://images.unsplash.com/photo-1505693314120-0d4438699d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 3,
    name: 'Carlos Mendez',
    city: 'Porto Alegre, RS',
    text: 'Sofria de dores nas costas há anos. A firmeza desse colchão combinada com o infravermelho mudou minhas noites.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 4,
    name: 'Fernanda Lima',
    city: 'Florianópolis, SC',
    text: 'Comprei o King com Vibro Premium. O controle pelo celular é muito chique e prático. Vale cada centavo.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 5,
    name: 'Marcos Vinícius',
    city: 'Belo Horizonte, MG',
    text: 'Melhor investimento que fiz para minha saúde este ano. O suporte é firme mas não é duro demais. Recomendo.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 6,
    name: 'Juliana Costa',
    city: 'Rio de Janeiro, RJ',
    text: 'Estava com receio de comprar online, mas me surpreendi. O colchão é lindo e muito confortável.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 7,
    name: 'Roberto Campos',
    city: 'Londrina, PR',
    text: 'Produto de altíssimo nível. O sistema de massagem é silencioso mesmo, minha esposa nem percebe quando ligo.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 8,
    name: 'Patrícia Duarte',
    city: 'Joinville, SC',
    text: 'Chegou antes do prazo e os entregadores foram super atenciosos. Já recomendei para minha família toda.',
    image: 'https://images.unsplash.com/photo-1616594039964-40891a909d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stars: 5
  }
];

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Largura aproximada do card + gap
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="bg-white py-20 md:py-32 border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="flex text-yellow-400 text-xl">
               {'★★★★★'}
             </div>
             <span className="text-gray-500 font-medium">4.9 de 5.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-nippon-text mb-6">
            Quem tem, ama.
          </h2>
          <p className="text-xl text-gray-500">
            Junte-se a mais de 1.000 clientes satisfeitos em todo o Brasil que transformaram suas noites de sono.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
             <span className="text-sm font-semibold text-gray-700">Verificado pelo Google Reviews</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 hover:scale-105 hidden md:flex"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Slider */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="snap-center flex-shrink-0 w-[85vw] md:w-[350px] lg:w-[400px] flex flex-col h-full bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={review.image} 
                    alt={`Foto de cliente - ${review.name}`} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                     <p className="font-bold text-base shadow-black drop-shadow-md">{review.name}</p>
                     <p className="text-xs opacity-90 drop-shadow-md font-medium">{review.city}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                   <div>
                     <div className="flex text-yellow-400 text-sm mb-3">
                        {'★★★★★'.slice(0, review.stars)}
                     </div>
                     <p className="text-gray-700 leading-relaxed text-sm italic">
                       "{review.text}"
                     </p>
                   </div>
                   
                   <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-[10px] text-green-700 font-bold uppercase tracking-wider">Compra Verificada</span>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 hover:scale-105 hidden md:flex"
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="flex justify-center md:hidden -mt-6 opacity-40">
           <div className="h-1 w-16 bg-gray-300 rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;