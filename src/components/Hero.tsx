import React from 'react';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Timeless Elegance,
            <span className="text-rose-600"> Effortlessly Yours</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our collection of premium handbags designed to complement your style with sophistication and grace.
          </p>
        </div>
      </div>
    </section>
  );
}