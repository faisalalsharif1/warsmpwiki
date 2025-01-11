'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Home() {
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
      <motion.h1 variants={itemVariants} className="text-4xl font-bold text-green-400 font-minecraft">Welcome to War SMP Wiki</motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-gray-300">War SMP is a Minecraft server created by NoudFast, featuring teams/nations with wars and various events.</motion.p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="bg-green-900/50 border-green-500/50 hover:border-green-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-400 font-minecraft">Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><Button variant="link" asChild className="text-green-300 hover:text-green-100"><Link href="/seasons">Season Information</Link></Button></li>
                <li><Button variant="link" asChild className="text-green-300 hover:text-green-100"><Link href="/teams">Teams</Link></Button></li>
                <li><Button variant="link" asChild className="text-green-300 hover:text-green-100"><Link href="/rules">Server Rules</Link></Button></li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="bg-blue-900/50 border-blue-500/50 hover:border-blue-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-400 font-minecraft">Server Links</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><Button variant="link" asChild className="text-blue-300 hover:text-blue-100"><a href="https://discord.gg/3NCMt3Cunh" target="_blank" rel="noopener noreferrer">War SMP Discord</a></Button></li>
                <li><Button variant="link" asChild className="text-blue-300 hover:text-blue-100"><a href="https://warsmpwiki.faisalalsharif.me" target="_blank" rel="noopener noreferrer">War SMP Website</a></Button></li>
                <li><Button variant="link" asChild className="text-blue-300 hover:text-blue-100"><a href="https://www.youtube.com/@warsmp-i4k/" target="_blank" rel="noopener noreferrer">War SMP Youtube</a></Button></li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}

