import React from 'react';
import { Modal } from './Modal';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
        <div className="space-y-6">
          <section>
            <p className="text-gray-600 mb-4">Effective Date: December 3, 2024</p>
            <p className="mb-4">At UrbanCarry, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines the types of information we collect, how we use it, and how we protect your privacy.</p>

            <h3 className="text-xl font-semibold mb-3">1. Information We Collect</h3>
            <p className="mb-4">We may collect the following types of personal information when you visit our website or make a purchase:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Personal Identification Information: Name, email address, shipping address, phone number, and payment information.</li>
              <li>Non-Personal Identification Information: IP address, browser type, device information, and browsing behavior.</li>
              <li>Cookies and Tracking Technologies: We use cookies and other tracking technologies to enhance your experience and collect information about how you use our website.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. How We Use Your Information</h3>
            <p className="mb-2">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>To process and fulfill your orders.</li>
              <li>To improve our website, products, and services based on user feedback and behavior.</li>
              <li>To send promotional emails, newsletters, and other marketing communications (you can opt out at any time).</li>
              <li>To respond to inquiries and provide customer support.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Sharing Your Information</h3>
            <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website, processing payments, and fulfilling orders. These third parties are required to maintain the confidentiality of your data.</p>

            <h3 className="text-xl font-semibold mb-3">4. Data Security</h3>
            <p className="mb-4">We use a variety of security measures to protect your personal information, including encryption, firewalls, and secure servers. However, no method of data transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

            <h3 className="text-xl font-semibold mb-3">5. Your Rights</h3>
            <p className="mb-2">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Access: You can request a copy of the personal data we hold about you.</li>
              <li>Correction: You can request corrections to any inaccurate or incomplete data.</li>
              <li>Deletion: You can request that we delete your personal information, subject to legal obligations.</li>
              <li>Opt-out: You can unsubscribe from marketing communications at any time.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">6. Contact Us</h3>
            <p className="mb-4">If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:</p>
            <ul className="list-none mb-4 ml-4">
              <li>Email: urbancarry.beauty@yahoo.com</li>
              <li>Phone: 607-348-5847</li>
            </ul>
          </section>
        </div>
      </div>
    </Modal>
  );
}