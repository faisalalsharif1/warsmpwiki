import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-gradient-to-r from-green-800 to-blue-800 text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-minecraft">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            War SMP Wiki 2025
          </motion.span>
        </Link>
      </div>
    </motion.header>
  )
}

export default Header

