import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow hover:shadow-md transition-shadow flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
        <p className="text-indigo-600 font-semibold mt-4">${product.price}</p>
      </div>
    </motion.div>
  )
}