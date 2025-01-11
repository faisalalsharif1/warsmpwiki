import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="bg-gradient-to-r from-green-800 to-blue-800 text-white py-4 mt-8"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="font-minecraft">&copy; 2025 War SMP Wiki. All rights reserved.</p>
        <p className="font-minecraft">Created by NoudFast | Wiki developed by virusyy23</p>
      </div>
    </motion.footer>
  )
}

export default Footer

