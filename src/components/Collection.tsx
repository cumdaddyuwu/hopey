import React from 'react';
import { ProductCard } from './ProductCard';

const products = [
  {
    image: "https://i.imgur.com/YsegqsS.jpg",
    name: "Midnight",
    price: "$59.99",
    description: "Deep and mysterious like the night sky, this sophisticated black tote embodies timeless elegance and urban confidence."
  },
  {
    image: "https://i.imgur.com/YnGMkH9.png",
    name: "Amber",
    price: "$59.99",
    description: "Warm and inviting like golden honey, this rich-toned bag radiates classic charm and natural beauty.",
    imagePosition: "object-[50%_30%]"
  },
  {
    image: "https://i.imgur.com/EKikHQb.png",
    name: "Pearl",
    price: "$59.99",
    description: "Luminous and refined like its namesake, this pristine white bag brings pure, ethereal grace to any ensemble."
  },
  {
    image: "https://i.imgur.com/5yKS2bo.png",
    name: "Sage",
    price: "$59.99",
    description: "Serene and grounding like fresh herbs, this earthy-toned piece offers a calming presence with natural sophistication."
  }
];

export function Collection() {
  return (
    <section id="collection" className="py-24 bg-gray-50">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Timeless Elegance, Effortlessly Yours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}