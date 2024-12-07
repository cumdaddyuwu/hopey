import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { SHOPIFY_CONFIG } from '../config/shopify';

export function Checkout() {
  const { total, clearCart, items } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
    clearCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#007bff]"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#007bff]"
            required
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Shipping Address</h3>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#007bff]"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#007bff]"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#007bff]"
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payment Details</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#007bff]"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#007bff]"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#007bff]"
              required
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-lg font-semibold">Total to Pay:</span>
          <span className="text-2xl font-bold text-gray-900">${total}</span>
        </div>

        <button
          type="submit"
          className="w-full bg-[#dc3545] text-white py-3 rounded-lg hover:bg-[#c82333] transition-colors"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}