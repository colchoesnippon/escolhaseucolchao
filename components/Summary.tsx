
import React from 'react';
import { ConfigState } from '../types';
import { SIZE_OPTIONS } from '../constants';

interface SummaryProps {
  config: ConfigState;
  totalPrice: number;
  imageUrl: string;
  onBuy: () => void;
}

const Summary: React.FC<SummaryProps> = ({ config, totalPrice, imageUrl, onBuy }) => {
  const installmentPrice = totalPrice / 12;
  const pixPrice = totalPrice * 0.93; // 7% discount
  
  // Find current size details
  const sizeOption = SIZE_OPTIONS.find(o => o.value === config.size);

  return (
    <div className="mt-20 pt-10 border-t border-gray-200 animate-fade-in w-full max-w-full overflow-hidden">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-nippon-text mb-2 break-words">
          Seu novo Colchão Nippon {config.size}.
        </h2>
        <p className="text-gray-500 text-2xl md:text-3xl font-medium">Do seu jeito.</p>
      </div>

      {/* Summary Card */}
      <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm w-full">
        
        {/* Product Identity - Vertical Layout enforced for column width safety */}
        <div className="flex flex-col gap-8 items-start mb-10 border-b border-gray-200 pb-10 w-full">
          
          {/* Enhanced Image Container - Full Width */}
          <div className="w-full aspect-[4/3] bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 group relative">
             <img 
               src={imageUrl} 
               alt="Resumo do Colchão" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
             />
             {/* Floating badge for Color */}
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-gray-100">
                <span 
                  className="w-3 h-3 rounded-full shadow-inner border border-gray-200" 
                  style={{ backgroundColor: config.color === 'Bege' ? '#E2D7C7' : config.color === 'Cinza' ? '#9CA3AF' : config.color === 'Marrom' ? '#5D4037' : '#1F2937'}}
                ></span>
                <span className="text-xs font-semibold text-gray-800">{config.color}</span>
             </div>
          </div>

          <div className="w-full">
             <h3 className="font-semibold text-gray-900 text-2xl leading-tight mb-6">
               Especificações
             </h3>
             
             <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3 w-full">
                
                {/* Tamanho */}
                <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                  <span className="text-gray-500 text-sm md:text-base">Tamanho</span>
                  <div className="text-right">
                    <span className="font-medium text-gray-900 block text-sm md:text-base">{config.size}</span>
                    {sizeOption?.description && (
                      <span className="text-gray-400 text-xs">{sizeOption.description}</span>
                    )}
                  </div>
                </div>

                {/* Altura */}
                <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                  <span className="text-gray-500 text-sm md:text-base">Altura</span>
                  <span className="font-medium text-gray-900 text-sm md:text-base">{config.height}</span>
                </div>

                {/* Conforto */}
                <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                  <span className="text-gray-500 text-sm md:text-base">Conforto</span>
                  <span className="font-medium text-gray-900 text-sm md:text-base">{config.comfort}</span>
                </div>

                {/* Base */}
                <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                  <span className="text-gray-500 text-sm md:text-base">Base</span>
                  <span className="font-medium text-gray-900 text-sm md:text-base">{config.baseType}</span>
                </div>
                
                {/* Tecnologias */}
                <div className="pt-3 border-t border-gray-50">
                  <span className="block text-sm text-gray-500 mb-3">Tecnologias Inclusas:</span>
                  {config.technologies.length > 0 ? (
                    <div className="flex flex-col gap-2">
                        {config.technologies.map(t => (
                            <div key={t} className="flex items-center gap-2 text-sm text-blue-800 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="leading-tight">{t}</span>
                            </div>
                        ))}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400 italic bg-gray-50 px-3 py-2 rounded-lg block text-center">Nenhuma tecnologia extra</span>
                  )}
                </div>

             </div>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="space-y-6">
           <div>
              <div className="flex flex-col mb-1">
                 <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-1">Valor Total</span>
                 <span className="text-4xl font-bold text-gray-900 tracking-tight">
                   R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                 </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-4 text-sm md:text-base">
                 <span className="font-medium bg-gray-100 px-2 py-1 rounded-md">12x de R$ {installmentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                 <span>sem juros no cartão</span>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-xl border border-blue-100 w-full">
                 <p className="text-nippon-blue-dark font-bold text-lg md:text-xl">
                   R$ {pixPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} à vista
                 </p>
                 <p className="text-nippon-blue text-sm flex items-center gap-1 font-medium mt-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   7% de desconto no Pix
                 </p>
              </div>
           </div>

           {/* Shipping Info */}
           <div className="bg-white rounded-2xl p-5 border border-gray-200 text-sm space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                 <div className="mt-0.5 bg-green-50 p-1.5 rounded-lg text-green-600 flex-shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                   </svg>
                 </div>
                 <div>
                    <span className="font-bold text-gray-900 block mb-0.5">Frete Grátis (PR, SC e RS)</span>
                    <span className="text-gray-500 leading-snug block text-xs">Enviamos para todo Brasil (demais regiões sob cotação).</span>
                 </div>
              </div>
              
              <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                 <div className="mt-0.5 bg-orange-50 p-1.5 rounded-lg text-orange-600 flex-shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <div>
                    <span className="font-bold text-gray-900 block mb-0.5">Pagamento na Entrega</span>
                    <span className="text-gray-500 leading-snug block text-xs">Disponível para algumas cidades do Sul. Consulte.</span>
                 </div>
              </div>
           </div>

           <button 
             onClick={onBuy}
             className="w-full bg-nippon-blue hover:bg-nippon-blue-dark text-white font-bold py-4 rounded-2xl text-lg md:text-xl shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
           >
             <span className="relative z-10">Finalizar no WhatsApp</span>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
           </button>
           <p className="text-center text-xs text-gray-400">
             Atendimento humano e personalizado.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
