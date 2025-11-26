import React from 'react';
import { ModalContent } from '../types';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ModalContent;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-semibold text-nippon-text">{content.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {content.description}
          </p>
          
          <ul className="space-y-3">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-nippon-blue flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-nippon-blue text-white font-medium rounded-full hover:bg-nippon-blue-dark transition-all"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;