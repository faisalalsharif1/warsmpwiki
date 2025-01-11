'use client'

import Link from 'next/link'
import { Home, Calendar, Users, Book, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Calendar, label: 'Seasons', href: '/seasons' },
    { icon: Users, label: 'Teams', href: '/teams' },
    { icon: Book, label: 'Rules', href: '/rules' },
  ]

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 bg-green-800 p-2 rounded-full shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`${
              isMobile ? 'fixed inset-y-0 left-0' : 'sticky top-4'
            } w-64 bg-black/60 backdrop-blur-lg rounded-lg shadow-lg p-4 h-[calc(100vh-2rem)] overflow-y-auto z-40`}
          >
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className="flex items-center space-x-2 text-green-400 hover:text-green-200 transition-colors p-2 rounded-md hover:bg-green-900/30"
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      <item.icon size={20} />
                      <span className="font-minecraft">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar

