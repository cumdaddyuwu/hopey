import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Modal } from './Modal';
import { Cart } from './Cart';
import { Checkout } from './Checkout';

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">UrbanCarry</span>
            </div>
            <div className="hidden sm:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#007bff] transition-colors">Home</a>
              <a href="#collection" className="text-gray-700 hover:text-[#007bff] transition-colors">Collection</a>
              <a href="#features" className="text-gray-700 hover:text-[#007bff] transition-colors">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-[#007bff] transition-colors">Contact</a>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#007bff] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <Modal isOpen={isCartOpen} onClose={() => {
        setIsCartOpen(false);
        setShowCheckout(false);
      }}>
        <div className="p-6">
          {!showCheckout ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Shopping Cart</h2>
                {items.length > 0 && (
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="bg-[#007bff] text-white px-6 py-2 rounded-full hover:bg-[#0056b3] transition-colors"
                  >
                    Checkout
                  </button>
                )}
              </div>
              <Cart />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Checkout</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Back to Cart
                </button>
              </div>
              <Checkout />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}