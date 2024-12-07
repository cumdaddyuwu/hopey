import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { LeaveReview } from './LeaveReview';
import { initialReviews, type Review } from '../data/reviews';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'text-[#dc3545] fill-[#dc3545]' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const savedReviews = localStorage.getItem('urbancarry-reviews');
    return savedReviews ? [...JSON.parse(savedReviews), ...initialReviews] : initialReviews;
  });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleNewReview = (review: Omit<Review, 'date'>) => {
    const newReview = {
      ...review,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('urbancarry-reviews', JSON.stringify(updatedReviews.filter(r => !initialReviews.includes(r))));
    setShowReviewForm(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Real reviews from our valued customers</p>
          </div>
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-[#dc3545] text-white px-6 py-2 rounded-lg hover:bg-[#c82333] transition-colors"
          >
            {showReviewForm ? 'Close' : 'Write a Review'}
          </button>
        </div>

        {showReviewForm && (
          <div className="mb-12">
            <LeaveReview onSubmit={handleNewReview} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#dc3545] opacity-10" />
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>{review.location}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}