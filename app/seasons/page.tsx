'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Seasons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className="text-4xl font-bold text-green-400 font-minecraft">Seasons</motion.h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="bg-green-900/50 border-green-500/50 hover:border-green-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-400 font-minecraft">Season 1</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p><strong>Finished:</strong> January 9</p>
              <p><strong>Summary:</strong> Season 1 ended poorly as hackers took over and destroyed the server. The hacker known as kencarson hacked the players.</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="bg-blue-900/50 border-blue-500/50 hover:border-blue-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-400 font-minecraft">Season 2</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p><strong>Estimated Release:</strong> January 11-12</p>
              <p><strong>New Features:</strong> The server will include plugins and anti-cheat measures to combat hackers.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}

