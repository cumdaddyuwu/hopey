export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  location: string;
}

export const initialReviews: Review[] = [
  {
    name: "Sarah Mitchell",
    date: "March 15, 2024",
    rating: 5,
    text: "The Midnight bag is absolutely stunning! The quality is exceptional, and it perfectly complements both casual and formal outfits. The leather is butter-soft and the stitching is impeccable.",
    location: "New York, NY"
  },
  {
    name: "Emma Thompson",
    date: "March 12, 2024",
    rating: 4,
    text: "I purchased the Pearl bag and I'm in love! The craftsmanship is impeccable. Only giving 4 stars because I wish it had one more interior pocket, but otherwise perfect.",
    location: "Los Angeles, CA"
  },
  {
    name: "Jessica Chen",
    date: "March 10, 2024",
    rating: 5,
    text: "The Amber bag exceeded my expectations. The color is rich and beautiful, and the size is perfect for everyday use. I've received so many compliments!",
    location: "Chicago, IL"
  },
  {
    name: "Michael Rodriguez",
    date: "March 8, 2024",
    rating: 5,
    text: "Bought the Midnight bag for my wife's birthday. She absolutely loves it! The attention to detail is remarkable, and the customer service was exceptional.",
    location: "Miami, FL"
  },
  {
    name: "Rachel Kim",
    date: "March 5, 2024",
    rating: 4,
    text: "The Sage bag is beautiful and practical. The only reason for 4 stars is that the shoulder strap took a few days to break in, but now it's perfect.",
    location: "Seattle, WA"
  },
  {
    name: "Alexandra Peters",
    date: "March 3, 2024",
    rating: 5,
    text: "This is my third UrbanCarry bag and they never disappoint. The quality is consistent, and the designs are timeless. The Pearl color goes with everything!",
    location: "Boston, MA"
  },
  {
    name: "David Wilson",
    date: "February 28, 2024",
    rating: 5,
    text: "Purchased the Amber bag for my daughter's graduation. The packaging was beautiful, and the bag itself is exactly what she wanted. Worth every penny!",
    location: "Austin, TX"
  },
  {
    name: "Sophie Anderson",
    date: "February 25, 2024",
    rating: 4,
    text: "Love my Midnight bag! The leather quality is superb and it's the perfect size for work. Would love to see more color options in this style.",
    location: "Portland, OR"
  }
];