"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
// import AnimatedButton from "./animated-button"
import AppleIcon from "../Brandlogo/apple-touch-icon.png"
import { Button } from "./ui/button"

export default function AnimatedFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <footer className="relative bg-black border-t border-gray-800/50">
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
           className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Stay Ahead of the Curve</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get exclusive insights, brand strategies, and growth tips delivered to your inbox weekly.
            </p>
          </div>

          <form
            
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto"
          >
            <div className="flex gap-4 justify-center items-center">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="bg-white text-black hover:bg-gray-100 bg-white text-black hover:bg-gray-100 cursor-pointer scale-100 hover:scale-105 transition-transform duration-200"
                
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            {isSubscribed && (
              <p className="text-green-400 text-center mt-4 animate-fade-in">Thanks for subscribing! 🎉</p>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <div
            
            className="space-y-8 text-center lg:text-left"
          >
            <div className="group flex justify-center lg:justify-start">
              <Image
                src={AppleIcon}
                alt="Dessigo Logo"
                width={300}
                height={100}
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Empowering creative professionals and entrepreneurs to build powerful brands that drive real traction and
              sustainable growth in today&apos;s competitive market.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <div
                  key={label}
                 
                >
                  <Link href={href} className="group relative" aria-label={label}>
                    <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-800 group-hover:border-gray-700 transition-colors">
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {/* Quick Links */}
            <div
            >
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-4">
                {[
                  "Web Development",
                  "App Development",
                  "SEO & Analytics",
                  "UI/UX Design",
                  "Cloud & DevOps",
                  "CRM / ERP Solutions",
                  "Maintenance & Support",
                  "Branding & Identity Design",
                  "AI/ML Development"

                ].map((link) => (
                  <li
                    key={link}
                   
                  >
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center sm:justify-start group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-200 mr-0 group-hover:mr-2" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div
             
            >
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>hello@motionrecords.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/inquiry">
                  <Button
                    className="bg-white text-black hover:bg-gray-100 cursor-pointer scale-100 hover:scale-105 transition-transform duration-200"
                    
                  >
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
         
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Motion Records LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
