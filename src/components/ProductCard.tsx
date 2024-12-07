import React, { useState } from 'react';
import { Modal } from './Modal';
import { useCart } from '../context/CartContext';
import { Cart } from './Cart';
import { Checkout } from './Checkout';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  imagePosition?: string;
}

export function ProductCard({ image, name, price, description, imagePosition = "object-[50%_40%]" }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [isPressed, setIsPressed] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: name.toLowerCase(),
      name,
      price,
      image
    });
    setShowCheckout(true);
  };

  const calculateTotal = () => {
    const priceValue = parseFloat(price.replace('$', ''));
    return (priceValue * quantity).toFixed(2);
  };

  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsPressed(true);
    // Trigger haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow transform scale-120 flex flex-col h-full">
        <div className="aspect-square overflow-hidden relative">
          <div className="absolute inset-0 bg-black/5 z-10"></div>
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ${imagePosition} brightness-105 contrast-[1.02] saturate-[1.05]`}
          />
        </div>
        <div className="p-4 sm:p-8 flex flex-col flex-grow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{name}</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5 flex-grow">{description}</p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-auto">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">{price}</span>
            <button 
              onClick={() => setIsModalOpen(true)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={`w-full sm:w-auto min-h-[44px] px-8 py-3 rounded-full text-lg font-medium text-white
                bg-[#dc3545] hover:bg-[#c82333] active:bg-[#bd2130]
                transform transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-[#dc3545] focus:ring-offset-2
                touch-manipulation select-none
                ${isPressed ? 'scale-105 shadow-lg' : 'scale-100 shadow-md'}
                sm:hover:scale-105 sm:active:scale-100`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => {
        setIsModalOpen(false);
        setShowCheckout(false);
        setQuantity(1);
      }}>
        <div className="p-4 sm:p-6 md:p-8 w-full max-w-2xl mx-auto">
          {!showCheckout ? (
            <div className="space-y-6">
              <div className="aspect-w-16 aspect-h-9 sm:aspect-h-10 md:aspect-h-12 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">{name}</h3>
              <p className="text-base sm:text-lg text-gray-600">{description}</p>
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold">Product Details:</h4>
                <ul className="list-disc list-inside text-base sm:text-lg text-gray-600 space-y-2">
                  <li>Premium quality materials</li>
                  <li>Spacious interior compartment</li>
                  <li>Adjustable shoulder strap</li>
                  <li>Interior zip pocket</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <div className="w-full sm:w-auto">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity:
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 text-lg min-w-[44px] min-h-[44px]"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x text-lg min-w-[44px]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100 text-lg min-w-[44px] min-h-[44px]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-center sm:text-right flex-grow">
                  <div className="text-sm text-gray-600">Total:</div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">${calculateTotal()}</div>
                </div>
              </div>
              <button 
                onClick={handleAddToCart}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className={`w-full min-h-[44px] py-3 rounded-full text-lg font-medium text-white
                  bg-[#dc3545] hover:bg-[#c82333] active:bg-[#bd2130]
                  transform transition-all duration-200 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-[#dc3545] focus:ring-offset-2
                  touch-manipulation select-none
                  ${isPressed ? 'scale-105 shadow-lg' : 'scale-100 shadow-md'}
                  sm:hover:scale-105 sm:active:scale-100`}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <Cart />
              <Checkout />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}