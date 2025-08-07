"use client"

import { useEffect } from "react"
import BackgroundPaths from "../components/background-paths"
import AnimatedBackground from "../components/animated-background"
import BackgroundStripes from "../components/background-stripes"
import Navbar from "../components/navbar"
import ServicesPage from "../components/services-page"
import AnimatedFooter from "../components/animated-footer"


export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
 
        <ServicesPage />
        <AnimatedFooter />
      </div>
    </div>
  )
}
