import React, { useState } from 'react';
import { Shield, Truck, Heart, CheckCircle2, Package, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every bag undergoes rigorous quality checks to ensure premium craftsmanship and durability.",
    details: [
      "Premium materials sourced from trusted suppliers",
      "Multi-stage quality control process"
    ]
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy complimentary shipping on all orders within the continental United States.",
    details: [
      "Free standard shipping (3-5 business days)",
      "Express shipping available",
      "International shipping options"
    ]
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Our dedicated support team is available 24/7 to assist you with any questions or concerns.",
    details: [
      "24/7 customer support",
      "Personalized styling advice",
      "VIP concierge service"
    ]
  },
  {
    icon: Package,
    title: "Premium Packaging",
    description: "Each bag comes beautifully packaged with care and attention to detail.",
    details: [
      "Luxury gift packaging",
      "Protective packaging"
    ]
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Orders are processed and shipped within 24 hours of purchase.",
    details: [
      "Same-day processing",
      "Priority handling",
      "Weekend shipping available",
      "Order status updates"
    ]
  }
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  isExpanded: boolean;
  onClick: () => void;
}

function FeatureCard({ icon: Icon, title, description, details, isExpanded, onClick }: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-md transition-all duration-300 cursor-pointer
        ${isExpanded ? 'ring-2 ring-[#007bff] shadow-lg scale-105' : 'hover:shadow-lg hover:scale-102'}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 ${isExpanded ? 'text-[#007bff]' : 'text-gray-700'}`} />
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className={`space-y-3 transition-all duration-300 overflow-hidden
        ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-4 border-t">
          {details.map((detail, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-[#007bff]" />
              <span className="text-gray-700">{detail}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 text-sm text-[#007bff]">
        {isExpanded ? 'Click to collapse' : 'Click to learn more'}
      </div>
    </div>
  );
}

export function Features() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose UrbanCarry</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience quality and convenience with our premium commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isExpanded={expandedIndex === index}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}