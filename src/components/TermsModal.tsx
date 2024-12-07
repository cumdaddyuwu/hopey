import React from 'react';
import { Modal } from './Modal';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-4">Refund Policy</h3>
            <p className="text-gray-600 mb-2">Effective Date: December 3, 2024</p>
            <p className="mb-4">At UrbanCarry, we take pride in the quality of our products and strive to ensure your satisfaction. However, due to the nature of our business, all sales are final. By completing a purchase, you agree to the following terms:</p>
            
            <h4 className="font-semibold mt-4 mb-2">1. No Refunds or Exchanges</h4>
            <p className="mb-4">We do not accept returns, exchanges, or issue refunds for any reason, including but not limited to:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Change of mind</li>
              <li>Incorrect selection</li>
              <li>Dissatisfaction with the product</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">2. Exceptions for Damaged or Defective Products</h4>
            <p className="mb-2">If your item arrives damaged or defective, we will gladly assist with a replacement or store credit, subject to the following conditions:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>You must notify us within 7 days of receiving your order.</li>
              <li>Provide proof of damage (e.g., photos) and your order confirmation.</li>
              <li>Send an email to skibusiness@myyahoo.com with the subject "Damaged/Defective Item."</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">3. Non-Refundable Items</h4>
            <p className="mb-4">All items are non-refundable. This includes regular-priced items, sale or clearance items, gift cards, and promotional products.</p>

            <h4 className="font-semibold mt-4 mb-2">4. Contact Us</h4>
            <p className="mb-2">For any concerns or inquiries, please contact our customer support team at:</p>
            <ul className="list-none mb-4 ml-4">
              <li>Email: skibusiness@myyahoo.com</li>
              <li>Phone: 607-348-5847</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Acknowledgment</h4>
            <p>By making a purchase, you acknowledge and agree to this refund policy.</p>
          </section>
        </div>
      </div>
    </Modal>
  );
}