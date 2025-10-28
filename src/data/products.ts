export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Earbuds Pro",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    category: "audio",
    rating: 5,
    inStock: true,
  },
  {
    id: "2",
    name: "Fast Charging Cable USB-C",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80",
    category: "cables",
    rating: 4,
    inStock: true,
  },
  {
    id: "3",
    name: "Luxury Leather Phone Case",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
    category: "cases",
    rating: 5,
    inStock: true,
  },
  {
    id: "4",
    name: "Ultra Slim Power Bank 20000mAh",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    category: "power",
    rating: 5,
    inStock: true,
  },
  {
    id: "5",
    name: "Noise Cancelling Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
    category: "audio",
    rating: 5,
    inStock: true,
  },
  {
    id: "6",
    name: "Magnetic Wireless Charger",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&q=80",
    category: "cables",
    rating: 4,
    inStock: false,
  },
  {
    id: "7",
    name: "Transparent Shockproof Case",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&q=80",
    category: "cases",
    rating: 4,
    inStock: true,
  },
  {
    id: "8",
    name: "Mini Bluetooth Speaker",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    category: "accessories",
    rating: 5,
    inStock: true,
  },
];
