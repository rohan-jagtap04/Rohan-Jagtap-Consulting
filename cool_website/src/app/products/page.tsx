'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

const allProducts: Product[] = [
	{
		id: 1,
		name: "Elegant Vase",
		category: "Home Decor",
		price: 29.99,
		image: "https://images.unsplash.com/photo-1600181958086-04eafc43f207",
	},
	{
		id: 2,
		name: "Leather Wallet",
		category: "Accessories",
		price: 45.0,
		image: "https://images.unsplash.com/photo-1560421681-7855fa9b4b1b",
	},
	{
		id: 3,
		name: "Cotton T-Shirt",
		category: "Clothing",
		price: 19.99,
		image: "https://images.unsplash.com/photo-1602810314515-6f441e39d12b",
	},
	{
		id: 4,
		name: "Desk Lamp",
		category: "Electronics",
		price: 65.0,
		image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
	},
	{
		id: 5,
		name: "Ceramic Mug",
		category: "Home Decor",
		price: 12.99,
		image: "https://images.unsplash.com/photo-1603729664792-cf32a5d6ad05",
	},
	// Add more products as needed
];

const categories = ['All', 'Home Decor', 'Accessories', 'Clothing', 'Electronics']

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger each product card by 0.1s
      staggerChildren: 0.1,
    },
  },
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Our Products
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border 
              ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
              }
              transition-colors`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Products Grid with staggered children */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </motion.div>
    </section>
  )
}