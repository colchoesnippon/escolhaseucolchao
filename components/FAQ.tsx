
import React, { useState } from 'react';

const TRUST_ITEMS = [
  {
    title: '15 Anos de História',
    description: 'Tradição e excelência no mercado de colchões terapêuticos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Fabricação Própria',
    description: 'Fábrica em São José dos Pinhais (PR) e Loja Física em Ivaiporã (PR).',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    )
  },
  {
    title: 'Compra 100% Segura',
    description: 'Empresa séria com zero reclamações não resolvidas e suporte total.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  }
];

const FAQS = [
  {
    question: "O colchão magnético e com infravermelho tem contraindicação?",
    answer: "O uso é seguro para a grande maioria das pessoas e traz diversos benefícios para circulação e relaxamento. A única restrição é para portadores de MARCA-PASSO, que devem solicitar o modelo SEM as pastilhas magnéticas (mantendo apenas o infravermelho e vibroterapia, se desejado). Informe isso no momento da compra."
  },
  {
    question: "A vibroterapia gasta muita energia elétrica?",
    answer: "Não. O sistema é bivolt (110v/220v) e de baixíssimo consumo, similar a um rádio relógio ou carregador de celular. Você pode usar suas massagens diariamente sem preocupação com a conta de luz."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia estrutural de fábrica cobrindo defeitos de fabricação e deformações anormais da espuma, além de garantia para o kit elétrico (motor e controle). Somos uma empresa com 15 anos de mercado e prezamos pelo suporte vitalício ao cliente."
  },
  {
    question: "Vocês entregam para o meu estado?",
    answer: "Sim! Enviamos para todo o Brasil via transportadoras especializadas em móveis. Para os estados do Paraná (PR), Santa Catarina (SC) e Rio Grande do Sul (RS), o frete é GRÁTIS. Para demais regiões, realizamos a cotação com o melhor custo-benefício."
  },
  {
    question: "O colchão já vem com a base box?",
    answer: "No nosso configurador, você tem a opção de escolher 'Somente Colchão' (se já tiver uma base) ou adicionar a 'Base Box' ou 'Box Baú' (para espaço extra) da mesma cor e tecido do colchão, formando um conjunto perfeito."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* TRUST BADGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TRUST_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-nippon-blue shadow-sm mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nippon-text mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-500">
            Tudo o que você precisa saber sobre a Colchão Nippon.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-nippon-blue bg-blue-50/10' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-nippon-blue' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-nippon-blue' : 'text-gray-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center border-t border-gray-100 pt-10">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Colchão Nippon. Todos os direitos reservados.<br/>
            Fábrica: São José dos Pinhais - PR | Loja: Ivaiporã - PR
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
