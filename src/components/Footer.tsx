import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { TermsModal } from './TermsModal';
import { PrivacyModal } from './PrivacyModal';

export function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <ShoppingBag className="h-8 w-8 text-[#007bff]" />
              <span className="ml-2 text-xl font-bold">UrbanCarry</span>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-[#007bff] transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsModalOpen(true)}
                className="hover:text-[#007bff] transition-colors"
              >
                Terms of Service
              </button>
              <a href="#" className="hover:text-[#007bff] transition-colors">FAQ</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} UrbanCarry. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <TermsModal 
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
}