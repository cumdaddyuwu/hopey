import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface LeaveReviewProps {
  onSubmit: (review: {
    name: string;
    location: string;
    rating: number;
    text: string;
  }) => void;
}

export function LeaveReview({ onSubmit }: LeaveReviewProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    text: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    onSubmit({
      ...formData,
      rating
    });
    setRating(0);
    setFormData({
      name: '',
      location: '',
      text: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Share Your Experience</h3>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => setRating(index)}
              onMouseEnter={() => setHoverRating(index)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none transition-transform hover:scale-110"
            >
              <Star
                className={`w-8 h-8 ${
                  index <= (hoverRating || rating)
                    ? 'text-[#dc3545] fill-[#dc3545]'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#dc3545] focus:border-transparent transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#dc3545] focus:border-transparent transition-colors"
            placeholder="City, State"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="review" className="block text-gray-700 mb-2">
          Your Review
        </label>
        <textarea
          id="review"
          required
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#dc3545] focus:border-transparent transition-colors"
          placeholder="Share your experience with our products..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#dc3545] text-white py-3 rounded-lg hover:bg-[#c82333] transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Submit Review
      </button>
    </form>
  );
}