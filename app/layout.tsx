import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'War SMP Wiki 2025',
  description: 'Official wiki for the War SMP Minecraft server - 2025 Edition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 to-blue-900">
          <div className="absolute inset-0 bg-[url('/minecraft-background.jpg')] bg-cover bg-center opacity-10 z-0 animate-pan-background"></div>
          <div className="relative z-10">
            <Header />
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
              <Sidebar />
              <main className="flex-grow lg:ml-4 mt-4 lg:mt-0">
                <div className="bg-black/40 backdrop-blur-md rounded-lg shadow-lg p-6 border border-green-500/20 animate-fade-in">
                  {children}
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

