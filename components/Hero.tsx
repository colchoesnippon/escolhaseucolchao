
import React from 'react';

const Hero: React.FC = () => {
  const scrollToConfig = () => {
    const element = document.getElementById('configurator');
    if (element) {
      // Offset for fixed header
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center bg-white overflow-hidden pt-24 pb-20 md:pt-32">
      
      {/* Background Gradient Blob for ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/60 rounded-full blur-[120px] -z-0 pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Social Proof / Avatar Stack */}
        <div className="animate-fade-in-up mb-8 flex flex-col items-center gap-3">
          <div className="flex -space-x-3">
            {[
              "1535713875002-d1d0cf377fde",
              "1580489944761-15a19d654956",
              "1534528741775-53994a69daeb",
              "1507003211169-0a1dd7228f2d",
              "1500648767791-00dcc994a43e"
            ].map((seed, i) => (
              <img 
                key={i}
                src={`https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=64&h=64&q=80`}
                alt="Cliente Satisfeito"
                className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-gray-100">
             <div className="flex text-yellow-400 text-xs">★★★★★</div>
             <span>+ de 1.000 clientes satisfeitos</span>
          </div>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-nippon-text leading-[1.1] tracking-tight mb-6 animate-fade-in-up delay-100 max-w-5xl mx-auto">
          O Melhor Colchão Magnético <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nippon-blue to-nippon-blue-dark">
            com Massageador do Brasil.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mb-8 leading-relaxed animate-fade-in-up delay-200 px-2">
          Tecnologia japonesa, vibroterapia avançada e o conforto que sua coluna merece. 
          Fabricação própria e qualidade comprovada por quem entende de saúde do sono.
        </p>

        {/* Trust & Benefits Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 animate-fade-in-up delay-200 max-w-4xl">
          {/* Frete */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
            <div className="p-1 bg-green-100 rounded-full text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-gray-900 uppercase tracking-wide">Frete Grátis</span>
              <span className="block text-[10px] text-gray-500 font-medium">PR, SC e RS</span>
            </div>
          </div>

          {/* 12x Sem Juros */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
            <div className="p-1 bg-blue-100 rounded-full text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-gray-900 uppercase tracking-wide">12x Sem Juros</span>
              <span className="block text-[10px] text-gray-500 font-medium">Cartão de Crédito</span>
            </div>
          </div>

          {/* Pagamento na Entrega */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
            <div className="p-1 bg-orange-100 rounded-full text-orange-600">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-gray-900 uppercase tracking-wide">Pague na Entrega</span>
              <span className="block text-[10px] text-gray-500 font-medium">Consulte cidades</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 w-full sm:w-auto">
          <button 
            onClick={scrollToConfig}
            className="px-8 py-4 bg-nippon-blue hover:bg-nippon-blue-dark text-white text-lg font-bold rounded-full transition-all shadow-xl hover:shadow-blue-200 hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <span className="relative">Configurar Agora</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button 
            onClick={() => window.open('https://wa.me/554334720040', '_blank')}
            className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-lg font-medium rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.495 1.114.16 1.638-.79 1.244-1.742 2.167-1.742 2.167s.925-.097 2.167-.893c.523-.336 1.19-.273 1.638.16A8.956 8.956 0 0012 20.25z" />
            </svg>
            Falar no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
