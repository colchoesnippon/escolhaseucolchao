import React from 'react';

const STEPS = [
  {
    id: 1,
    title: "1. Sua Configuração",
    description: "Você seleciona o tamanho, altura e as tecnologias ideais para sua necessidade aqui no site.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    )
  },
  {
    id: 2,
    title: "2. Atendimento",
    description: "Clicando em comprar, nosso time recebe seu pedido, confirma valores e tira dúvidas via WhatsApp.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "3. Fabricação",
    description: "Seu colchão entra em produção. Cuidamos de cada costura e detalhe tecnológico artesanalmente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "4. Logística",
    description: "Produto pronto e embalado. Nossa transportadora parceira coleta e inicia a viagem até você.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    )
  },
  {
    id: 5,
    title: "5. Sonho Realizado",
    description: "Você recebe o Colchão Nippon em casa e transforma sua saúde e qualidade de vida.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#111] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-nippon-blue font-semibold tracking-wider text-sm uppercase">Experiência Nippon</span>
          <h2 className="text-3xl md:text-5xl font-bold">Do clique ao sonho.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Entenda como levamos o conforto personalizado da nossa fábrica até o seu quarto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-800 -z-0"></div>

          {STEPS.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-[#222] border-2 border-gray-700 text-white flex items-center justify-center mb-6 shadow-xl transition-all duration-300 group-hover:border-nippon-blue group-hover:bg-nippon-blue group-hover:scale-110">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;