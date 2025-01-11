'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Rules() {
  const generalRules = [
    "Be respectful for each other",
    "No hate speeches In CHAT/VC",
    "No NSFW/18+ Content",
    "Have Fun with each other",
    "No Advertisement/promoting",
    "No Racism",
    "No Spamming",
  ]

  const minecraftRules = [
    "Don't grief or steal in any way",
    "A war must be declared the person who declared must wait for the leader (leader of defending team) knows it and the leader needs 2 be online for the war only if its oke agree with war with out him",
    "No weird things",
    "Have Fun with each other",
    "No Advertisement",
    "No Racism",
    "No breaking iron doors or trapdoors",
    "No end so no elytra",
    "No breaking in other territory or placing",
    "No using ender pearls in fights",
    "No betraying",
    "No crystal pvp",
  ]

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
      <motion.h1 variants={itemVariants} className="text-4xl font-bold text-green-400 font-minecraft">Server Rules</motion.h1>
      
      <motion.div variants={itemVariants}>
        <Card className="bg-green-900/50 border-green-500/50 hover:border-green-400 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-green-400 font-minecraft">General Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              {generalRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Card className="bg-blue-900/50 border-blue-500/50 hover:border-blue-400 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-400 font-minecraft">Minecraft Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              {minecraftRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

