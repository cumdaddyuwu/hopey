import { initializeShopify } from './shopify';

export const fetchReviews = async (productId: string) => {
  const client = initializeShopify();
  
  const query = `
    query ProductReviews($productId: ID!) {
      product(id: $productId) {
        metafields(first: 50, namespace: "reviews") {
          edges {
            node {
              id
              value
              key
            }
          }
        }
      }
    }
  `;

  try {
    const response = await client.query({
      data: {
        query,
        variables: { productId }
      }
    });
    return response.body.data.product.metafields.edges;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};

export const submitReview = async (productId: string, review: {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}) => {
  const client = initializeShopify();
  
  const mutation = `
    mutation CreateProductReview($input: MetafieldInput!) {
      metafieldCreate(metafield: $input) {
        metafield {
          id
          namespace
          key
          value
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  try {
    const response = await client.query({
      data: {
        query: mutation,
        variables: {
          input: {
            namespace: "reviews",
            key: `review_${Date.now()}`,
            value: JSON.stringify(review),
            type: "json",
            productId
          }
        }
      }
    });
    return response.body.data.metafieldCreate.metafield;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
};