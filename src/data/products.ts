
export interface Product {
  id: string;
  name: string;
  category: 'gloves' | 'apparel';
  price: number;
  description: string;
  image: string;
  colors: string[];
  sizes?: string[];
  weights?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "glove-pro-1",
    name: "Impacto Pro Elite",
    category: "gloves",
    price: 89.99,
    description: "Professional boxing gloves with superior padding and wrist support. Perfect for competitive boxers.",
    image: "https://images.unsplash.com/photo-1612958668224-03e339d6444c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    colors: ["Red", "Black", "Gold"],
    weights: ["10oz", "12oz", "14oz", "16oz"],
    featured: true
  },
  {
    id: "glove-train-1",
    name: "Impact Training Gloves",
    category: "gloves",
    price: 59.99,
    description: "Versatile training gloves ideal for heavy bag work and sparring. Enhanced knuckle protection.",
    image: "https://images.unsplash.com/photo-1581185233147-a69660dc4fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    colors: ["Red", "White", "Blue"],
    weights: ["12oz", "14oz", "16oz"]
  },
  {
    id: "glove-speed-1",
    name: "Speed Fighter",
    category: "gloves",
    price: 74.99,
    description: "Lightweight competition gloves designed for speed and precision. Official competition approved.",
    image: "https://images.unsplash.com/photo-1585342565162-3704ff9b221d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    colors: ["Red", "Gold", "White"],
    weights: ["8oz", "10oz", "12oz"]
  },
  {
    id: "glove-youth-1",
    name: "Junior Champion",
    category: "gloves",
    price: 49.99,
    description: "Youth boxing gloves with proper protection for young athletes. Perfect first pair for beginners.",
    image: "https://images.unsplash.com/photo-1616248771460-8f9654eb4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    colors: ["Red", "Blue", "Black"],
    weights: ["6oz", "8oz", "10oz"]
  },
  {
    id: "apparel-shirt-1",
    name: "Performance Training Shirt",
    category: "apparel",
    price: 34.99,
    description: "Moisture-wicking athletic shirt with breathable fabric. Perfect for training sessions.",
    image: "https://images.unsplash.com/photo-1602042068997-d01d827ab2f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    colors: ["Red", "Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "apparel-shorts-1",
    name: "Pro Boxing Shorts",
    category: "apparel",
    price: 44.99,
    description: "Professional boxing shorts with comfortable elastic waistband and side slits for mobility.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    colors: ["Red/Gold", "Black/Red", "White/Red"],
    sizes: ["S", "M", "L", "XL"],
    featured: true
  },
  {
    id: "apparel-hoodie-1",
    name: "Fighter's Hoodie",
    category: "apparel",
    price: 64.99,
    description: "Premium cotton-blend hoodie for warmups and post-training comfort. Embroidered logo.",
    image: "https://images.unsplash.com/photo-1628626126093-97c2c5f79cdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    colors: ["Red", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "apparel-robe-1",
    name: "Champion's Robe",
    category: "apparel",
    price: 89.99,
    description: "Deluxe boxing robe with satin finish, perfect for ring entrances and post-fight coverage.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    colors: ["Red/Gold", "Black/Gold", "White/Red"],
    sizes: ["S", "M", "L", "XL"]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured === true);
};

export const getProductsByCategory = (category: 'gloves' | 'apparel'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
