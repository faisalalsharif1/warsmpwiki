'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Teams() {
  const teams = [
    { name: "Brotherhood of Archangel's/The Archangels", owner: "eucalyptus_tree" },
    { name: "United Democracy of Eleutheria", owner: "tcfish210" },
    { name: "Flamekeepers of Infernia", owner: "noud5474" },
    { name: "City Gang", owner: "robearthman" },
    { name: "The Smiling Jesters :)", owner: "princeflames" },
    { name: "Mushies", owner: "unknown" },
    { name: "Diddy Nation", owner: "leonthegyatter" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
      <motion.h1 variants={itemVariants} className="text-4xl font-bold text-green-400 font-minecraft">Teams</motion.h1>
      
      <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants}>
        {teams.map((team, index) => (
          <motion.div key={team.name} variants={itemVariants}>
            <Card className={`${index % 2 === 0 ? 'bg-green-900/50 border-green-500/50' : 'bg-blue-900/50 border-blue-500/50'} hover:border-opacity-100 transition-colors`}>
              <CardHeader>
                <CardTitle className={`text-xl font-semibold ${index % 2 === 0 ? 'text-green-400' : 'text-blue-400'} font-minecraft`}>{team.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p><strong>Owner:</strong> {team.owner}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

