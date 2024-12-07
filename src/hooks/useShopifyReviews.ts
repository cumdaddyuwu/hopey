import { useState, useEffect } from 'react';
import { fetchReviews, submitReview } from '../utils/shopifyReviews';

export function useShopifyReviews(productId: string) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const reviewData = await fetchReviews(productId);
        setReviews(reviewData.map((edge: any) => JSON.parse(edge.node.value)));
        setLoading(false);
      } catch (err) {
        setError('Failed to load reviews');
        setLoading(false);
      }
    };

    loadReviews();
  }, [productId]);

  const addReview = async (review: any) => {
    try {
      await submitReview(productId, review);
      setReviews([review, ...reviews]);
      return true;
    } catch (err) {
      setError('Failed to submit review');
      return false;
    }
  };

  return { reviews, loading, error, addReview };
}