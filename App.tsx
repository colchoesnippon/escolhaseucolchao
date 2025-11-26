
import React, { useState, useMemo } from 'react';
import { 
  ConfigState, Size, Height, Technology, Comfort, BaseType, Color, OptionItem 
} from './types';
import { 
  BASE_PRICES, SIZE_OPTIONS, HEIGHT_OPTIONS, TECH_OPTIONS, COMFORT_OPTIONS, BASE_OPTIONS, COLOR_OPTIONS, MODAL_CONTENT 
} from './constants';
import InfoModal from './components/InfoModal';
import StickyImage from './components/StickyImage';
import Summary from './components/Summary';
import Reviews from './components/Reviews';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Hero from './components/Hero';

const App: React.FC = () => {
  // --- State ---
  const [config, setConfig] = useState<ConfigState>({
    size: Size.CASAL,
    height: Height.H25,
    technologies: [],
    comfort: Comfort.MEDIUM,
    baseType: BaseType.MATTRESS_ONLY,
    color: Color.BEIGE,
  });

  const [modalOpen, setModalOpen] = useState<{ type: string | null }>({ type: null });

  // --- Helpers ---
  // Calculates the effective price of an item based on the current configuration (Size)
  const getItemPrice = (item: OptionItem<any>): number => {
    if (item.priceBySize) {
      return item.priceBySize[config.size] || 0;
    }
    return item.priceModifier || 0;
  };

  // Auto-scroll logic
  const scrollToNextStep = (nextSectionId: string) => {
    // Small timeout to allow state update and visual feedback before scrolling
    setTimeout(() => {
      const element = document.getElementById(nextSectionId);
      if (element) {
        const headerOffset = 100; // Height of navbar + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  // Image Logic moved here to share with Summary
  const imageUrl = useMemo(() => {
    // Using picsum seeds to simulate consistent but different images per color
    let seed = 'mattress';
    switch (config.color) {
      case Color.BEIGE: seed = 'beige-interior'; break;
      case Color.GREY: seed = 'grey-bedroom'; break;
      case Color.BROWN: seed = 'brown-furniture'; break;
      case Color.BLACK: seed = 'dark-luxury'; break;
    }
    
    // Add randomness for base type just to change the image slightly
    if (config.baseType === BaseType.BAU) seed += '-storage';
    
    return `https://picsum.photos/seed/${seed}/1000/1000`;
  }, [config.color, config.baseType]);

  // --- Handlers ---
  const handleTechToggle = (tech: Technology) => {
    setConfig(prev => {
      const exists = prev.technologies.includes(tech);
      let newTechs = [...prev.technologies];

      if (exists) {
        newTechs = newTechs.filter(t => t !== tech);
      } else {
        newTechs.push(tech);
        
        // Mutual exclusion for Vibro options
        if (tech === Technology.VIBRO) {
          newTechs = newTechs.filter(t => t !== Technology.VIBRO_PREMIUM);
        } else if (tech === Technology.VIBRO_PREMIUM) {
          newTechs = newTechs.filter(t => t !== Technology.VIBRO);
        }
      }
      
      return { ...prev, technologies: newTechs };
    });
    // No auto-scroll for multi-select options
  };

  const handleWhatsApp = () => {
    const message = `Olá Colchão Nippon! 👋%0A%0AGostaria de fechar o pedido desta configuração:%0A%0A` +
      `🛏 *Tamanho:* ${config.size}%0A` +
      `📏 *Altura:* ${config.height}%0A` +
      `✨ *Tecnologias:* ${config.technologies.length > 0 ? config.technologies.join(', ') : 'Nenhuma'}%0A` +
      `☁ *Conforto:* ${config.comfort}%0A` +
      `📦 *Base:* ${config.baseType}%0A` +
      `🎨 *Cor:* ${config.color}%0A%0A` +
      `💰 *Valor Total:* R$ ${totalPrice.toLocaleString('pt-BR')}`;

    window.open(`https://wa.me/554334720040?text=${message}`, '_blank');
  };

  // --- Calculations ---
  const totalPrice = useMemo(() => {
    let total = BASE_PRICES[config.size];
    
    // Height Add-on
    const heightOption = HEIGHT_OPTIONS.find(h => h.value === config.height);
    if (heightOption) total += getItemPrice(heightOption);

    // Tech Add-ons
    config.technologies.forEach(t => {
      const techOpt = TECH_OPTIONS.find(opt => opt.value === t);
      if (techOpt) total += getItemPrice(techOpt);
    });

    // Base Add-on
    const baseOpt = BASE_OPTIONS.find(b => b.value === config.baseType);
    if (baseOpt) total += getItemPrice(baseOpt);

    return total;
  }, [config]);

  // --- Reusable Renderers ---
  const renderSectionHeader = (title: string, helpKey?: string) => (
    <div className="flex items-center justify-between mb-4 mt-12">
      <h3 className="text-2xl font-semibold text-nippon-text tracking-tight">
        {title} <span className="text-gray-400 font-normal text-lg"></span>
      </h3>
      {helpKey && (
        <button 
          onClick={() => setModalOpen({ type: helpKey })}
          className="flex items-center text-nippon-blue hover:text-nippon-blue-dark transition-colors text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Saiba mais
        </button>
      )}
    </div>
  );

  const renderCard = <T extends string>(
    item: OptionItem<T>, 
    isSelected: boolean, 
    onClick: () => void,
    isMulti = false,
    customPriceLabel?: string
  ) => {
    const price = getItemPrice(item);
    
    return (
      <button
        key={String(item.value)}
        onClick={onClick}
        className={`
          relative flex flex-row items-center w-full p-4 rounded-2xl border transition-all duration-200 text-left gap-4
          ${isSelected 
            ? 'border-nippon-blue ring-2 ring-nippon-blue bg-white/50' 
            : 'border-gray-300 hover:border-gray-400 bg-white'
          }
        `}
      >
        {/* Left Thumbnail */}
        {item.thumbnail && (
          <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
            <img 
              src={item.thumbnail} 
              alt={item.label} 
              className="w-full h-full object-cover mix-blend-multiply opacity-90" 
            />
          </div>
        )}

        {/* Content Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-gray-900 text-lg mr-2">{item.label}</span>
            
            {/* Price Tag with Green Highlight */}
            {customPriceLabel ? (
              <span className="text-xs font-bold text-white bg-green-600 px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
                {customPriceLabel}
              </span>
            ) : price > 0 ? (
              <span className="text-xs font-bold text-white bg-green-600 px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
                + R$ {price.toLocaleString('pt-BR')}
              </span>
            ) : (
              <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                Incluso
              </span>
            )}
          </div>
          
          {item.description && (
            <p className="text-sm text-gray-500 leading-snug line-clamp-2">
              {item.description}
            </p>
          )}
        </div>

        {item.isPopular && (
          <span className="absolute -top-3 right-4 bg-orange-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm">
            Mais Vendido
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-nippon-bg selection:bg-nippon-blue selection:text-white">
      {/* Navbar Simple */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 h-14 flex items-center justify-between px-4 md:px-8">
        <div className="font-bold text-lg tracking-tight">Colchão Nippon</div>
        <div className="text-sm text-gray-500 hidden md:block">Configurador Premium</div>
      </nav>

      {/* Main Content Wrapper */}
      <main className="max-w-[1600px] mx-auto pt-14 md:pt-0">
        
        {/* HERO SECTION */}
        <Hero />

        {/* 
           Configurator Section (Split View)
           This wrapper holds the Sticky Left and Scrolling Right.
        */}
        <div id="configurator" className="flex flex-col md:flex-row relative">
          
          {/* LEFT COLUMN: Sticky Image */}
          <section className="w-full md:w-[55%] lg:w-[60%]">
             <StickyImage color={config.color} baseType={config.baseType} imageUrl={imageUrl} />
          </section>

          {/* RIGHT COLUMN: Options */}
          <section className="w-full md:w-[45%] lg:w-[40%] p-6 md:p-12 md:pt-24 lg:px-16 flex flex-col">
            
            {/* Header */}
            <div className="mb-10 animate-fade-in">
              <span className="text-orange-600 font-semibold text-xs tracking-wider uppercase mb-2 block">Personalize seu sono</span>
              <h1 className="text-4xl md:text-5xl font-bold text-nippon-text leading-tight mb-4">
                Monte o seu <br/>Nippon perfeito.
              </h1>
              <p className="text-gray-500 text-lg">
                Escolha cada detalhe, do tamanho à tecnologia, e transforme suas noites.
              </p>
            </div>

            {/* SELECTION: SIZE */}
            <div id="section-size" className="mb-10">
              {renderSectionHeader("Tamanho")}
              <div className="flex flex-col gap-3">
                {SIZE_OPTIONS.map(opt => renderCard(
                  opt, 
                  config.size === opt.value, 
                  () => {
                    setConfig(prev => ({...prev, size: opt.value}));
                    scrollToNextStep('section-height');
                  },
                  false,
                  `R$ ${BASE_PRICES[opt.value].toLocaleString('pt-BR')}`
                ))}
              </div>
            </div>

            {/* SELECTION: HEIGHT */}
            <div id="section-height" className="mb-10">
              {renderSectionHeader("Altura")}
              <div className="flex flex-col gap-3">
                {HEIGHT_OPTIONS.map(opt => renderCard(
                  opt, 
                  config.height === opt.value, 
                  () => {
                    setConfig(prev => ({...prev, height: opt.value}));
                    scrollToNextStep('section-tech');
                  }
                ))}
              </div>
            </div>

            {/* SELECTION: TECH */}
            <div id="section-tech" className="mb-10">
              {renderSectionHeader("Tecnologias", "tech")}
              <div className="flex flex-col gap-3">
                {TECH_OPTIONS.map(opt => renderCard(
                  opt, 
                  config.technologies.includes(opt.value), 
                  () => handleTechToggle(opt.value),
                  true
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2 px-1">
                * Selecione múltiplas opções para um tratamento completo. Continue rolando para Conforto.
              </p>
            </div>

            {/* SELECTION: COMFORT */}
            <div id="section-comfort" className="mb-10">
              {renderSectionHeader("Nível de Conforto", "comfort")}
              <div className="flex flex-col gap-3">
                 {/* Replaced Grid with Vertical Card List to match other sections with images */}
                 {COMFORT_OPTIONS.map(opt => renderCard(
                   opt,
                   config.comfort === opt.value,
                   () => {
                     setConfig(prev => ({...prev, comfort: opt.value}));
                     scrollToNextStep('section-base');
                   }
                 ))}
              </div>
            </div>

            {/* SELECTION: BASE TYPE */}
            <div id="section-base" className="mb-10">
              {renderSectionHeader("Base")}
              <div className="flex flex-col gap-3">
                {BASE_OPTIONS.map(opt => renderCard(
                  opt, 
                  config.baseType === opt.value, 
                  () => {
                    setConfig(prev => ({...prev, baseType: opt.value}));
                    scrollToNextStep('section-color');
                  }
                ))}
              </div>
            </div>

            {/* SELECTION: COLORS */}
            <div id="section-color" className="mb-12">
              {renderSectionHeader("Acabamento")}
              <div className="flex gap-4">
                {COLOR_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setConfig(prev => ({...prev, color: opt.value}));
                      scrollToNextStep('section-summary');
                    }}
                    className={`
                      relative w-12 h-12 rounded-full shadow-sm transition-transform hover:scale-110 focus:outline-none
                      ${config.color === opt.value ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : ''}
                    `}
                    style={{ backgroundColor: opt.hex }}
                    aria-label={opt.value}
                  >
                    {config.color === opt.value && (
                       <span className="absolute inset-0 flex items-center justify-center">
                         {/* Checkmark for darker colors */}
                         <svg className={`w-5 h-5 ${['#E2D7C7', '#9CA3AF'].includes(opt.hex) ? 'text-gray-800' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                         </svg>
                       </span>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-3 text-sm font-medium text-gray-600">{config.color}</div>
            </div>

            {/* SUMMARY & CHECKOUT BLOCK */}
            <div id="section-summary">
              <Summary 
                 config={config} 
                 totalPrice={totalPrice} 
                 imageUrl={imageUrl} 
                 onBuy={handleWhatsApp} 
              />
            </div>

            {/* Padding for bottom safety */}
            <div className="h-16"></div>

          </section>
        </div>
        
        {/* REVIEWS SECTION */}
        <Reviews />

        {/* HOW IT WORKS SECTION */}
        <HowItWorks />

        {/* FEATURES SECTION */}
        <Features onOpenModal={(type) => setModalOpen({ type })} />

        {/* FAQ SECTION */}
        <FAQ />

      </main>

      {/* Modals */}
      <InfoModal 
        isOpen={modalOpen.type !== null}
        onClose={() => setModalOpen({ type: null })}
        content={MODAL_CONTENT[modalOpen.type || 'tech'] || MODAL_CONTENT.tech}
      />
    </div>
  );
};

export default App;
