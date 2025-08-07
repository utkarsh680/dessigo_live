"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
// import AnimatedButton from "./animated-button"
import { Button } from "./ui/button"
import AppleIcon from "../Brandlogo/apple-touch-icon.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.nav
        className="relative bg-gray-900/60 backdrop-blur-md  rounded-2xl shadow-lg overflow-hidden"
        // animate={{
        //   borderColor: [
        //     "rgba(59, 130, 246, 0.3)",
        //     "rgba(147, 51, 234, 0.3)",
        //     "rgba(236, 72, 153, 0.3)",
        //     "rgba(34, 197, 94, 0.3)",
        //     "rgba(59, 130, 246, 0.3)",
        //   ],
        // }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          // animate={{
          //   boxShadow: [
          //     "0 0 20px rgba(59, 130, 246, 0.2)",
          //     "0 0 20px rgba(147, 51, 234, 0.2)",
          //     "0 0 20px rgba(236, 72, 153, 0.2)",
          //     "0 0 20px rgba(34, 197, 94, 0.2)",
          //     "0 0 20px rgba(59, 130, 246, 0.2)",
          //   ],
          // }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={AppleIcon}
                  alt="Motion Records LLC"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/services" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
                <Link href="/about" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  About
                </Link>
                <Link href="/projects" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                Projects
                </Link>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {/* <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
                Sign In
              </Button> */}
              <Link href="/get-started">
                <Button size="sm" className="bg-white text-black hover:bg-gray-100 cursor-pointer scale-100 hover:scale-105 transition-transform duration-200">
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-md rounded-b-2xl">
            <div className="px-6 py-4 space-y-3">
              <Link href="/services" className="block text-gray-300 hover:text-blue-400">
                Services
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-blue-400">
                About
              </Link>
              <Link href="/projects" className="block text-gray-300 hover:text-blue-400">
                Projects
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400">
                Contact
              </Link>
              <div className="pt-3 border-t border-gray-700">
                <Link href="/get-started" className="block">
                   <Button size="sm" className="bg-white text-black hover:bg-gray-100 cursor-pointer scale-100 hover:scale-105 transition-transform duration-200">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  )
}
