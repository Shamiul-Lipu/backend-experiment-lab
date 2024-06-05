const products = [
  {
    id: "1",
    name: "Wireless Mouse",
    image: "https://example.com/images/wireless-mouse.jpg",
    description: "A high-precision wireless mouse with ergonomic design.",
    price: 29.99,
    quantity: 150,
    onStock: true,
    categoryId: "1",
  },
  {
    id: "2",
    name: "Gaming Keyboard",
    image: "https://example.com/images/gaming-keyboard.jpg",
    description: "Mechanical gaming keyboard with RGB backlight.",
    price: 79.99,
    quantity: 75,
    onStock: true,
    categoryId: "1",
  },
  {
    id: "3",
    name: "Running Shoes",
    image: "https://example.com/images/running-shoes.jpg",
    description: "Lightweight running shoes with excellent grip.",
    price: 49.99,
    quantity: 200,
    onStock: true,
    categoryId: "2",
  },
  {
    id: "4",
    name: "Smartphone",
    image: "https://example.com/images/smartphone.jpg",
    description: "Latest model smartphone with advanced features.",
    price: 999.99,
    quantity: 50,
    onStock: true,
    categoryId: "1",
  },
  {
    id: "5",
    name: "Bluetooth Headphones",
    image: "https://example.com/images/bluetooth-headphones.jpg",
    description:
      "Noise-cancelling Bluetooth headphones with long battery life.",
    price: 199.99,
    quantity: 120,
    onStock: true,
    categoryId: "1",
  },
  {
    id: "6",
    name: "Cookware Set",
    image: "https://example.com/images/cookware-set.jpg",
    description: "10-piece non-stick cookware set for all your cooking needs.",
    price: 129.99,
    quantity: 60,
    onStock: true,
    categoryId: "3",
  },
  {
    id: "7",
    name: "Fitness Tracker",
    image: "https://example.com/images/fitness-tracker.jpg",
    description:
      "Track your daily activity and fitness levels with this sleek tracker.",
    price: 59.99,
    quantity: 90,
    onStock: true,
    categoryId: "1",
  },
  {
    id: "8",
    name: "Electric Toothbrush",
    image: "https://example.com/images/electric-toothbrush.jpg",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes.",
    price: 39.99,
    quantity: 180,
    onStock: true,
    categoryId: "4",
  },
  {
    id: "9",
    name: "Water Bottle",
    image: "https://example.com/images/water-bottle.jpg",
    description:
      "Insulated stainless steel water bottle, keeps drinks hot or cold.",
    price: 24.99,
    quantity: 250,
    onStock: true,
    categoryId: "5",
  },
  {
    id: "10",
    name: "Smartwatch",
    image: "https://example.com/images/smartwatch.jpg",
    description: "Feature-rich smartwatch with heart rate monitor and GPS.",
    price: 149.99,
    quantity: 80,
    onStock: true,
    categoryId: "1",
  },
];

const categories = [
  {
    id: "1",
    name: "Electronics",
  },
  {
    id: "2",
    name: "Footwear",
  },
  {
    id: "3",
    name: "Home & Kitchen",
  },
  {
    id: "4",
    name: "Health & Personal Care",
  },
  {
    id: "5",
    name: "Sports & Outdoors",
  },
];

const reviews = [
  {
    id: "1",
    review: "Great mouse, very responsive and comfortable to use.",
    rating: 5,
    date: "2024-05-10",
    productId: "1",
  },
  {
    id: "2",
    review:
      "The keyboard is fantastic for gaming. The RGB lighting is a nice touch.",
    rating: 4.5,
    date: "2024-05-11",
    productId: "2",
  },
  {
    id: "3",
    review:
      "These running shoes are very comfortable and provide good support.",
    rating: 4,
    date: "2024-05-12",
    productId: "3",
  },
  {
    id: "4",
    review:
      "The smartphone has amazing features but the battery life could be better.",
    rating: 4,
    date: "2024-05-13",
    productId: "4",
  },
  {
    id: "5",
    review:
      "Excellent headphones with clear sound quality and noise cancellation.",
    rating: 4.5,
    date: "2024-05-14",
    productId: "5",
  },
  {
    id: "6",
    review:
      "The cookware set is great for everyday cooking. The non-stick feature works well.",
    rating: 4,
    date: "2024-05-15",
    productId: "6",
  },
  {
    id: "7",
    review:
      "The fitness tracker is easy to use and very accurate in tracking steps.",
    rating: 4.5,
    date: "2024-05-16",
    productId: "7",
  },
  {
    id: "8",
    review: "The electric toothbrush cleans well and has a long battery life.",
    rating: 4,
    date: "2024-05-17",
    productId: "2",
  },
  {
    id: "9",
    review: "This water bottle is durable and keeps my drinks cold for hours.",
    rating: 5,
    date: "2024-05-18",
    productId: "2",
  },
  {
    id: "10",
    review:
      "The smartwatch is very functional and easy to use. Love the heart rate monitor.",
    rating: 4.5,
    date: "2024-05-19",
    productId: "1",
  },
];

export const db = {
  products,
  categories,
  reviews,
};
