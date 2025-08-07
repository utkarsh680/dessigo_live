"use client"

import { Users } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react";

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: "/api/placeholder/300/300",
      bio: "15+ years in enterprise software development with expertise in cloud architecture and AI solutions.",
      color: "blue",
    },
    {
      name: "Michael Chen",
      role: "Lead Full-Stack Developer",
      image: "/api/placeholder/300/300",
      bio: "Specializes in React, Node.js, and scalable backend systems. Passionate about clean code and user experience.",
      color: "green",
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Design Director",
      image: "/api/placeholder/300/300",
      bio: "Award-winning designer with 12+ years creating intuitive digital experiences for Fortune 500 companies.",
      color: "purple",
    },
  ];
 const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: "text-blue-400",
        border: "border-blue-500/30",
        bg: "bg-blue-500/10",
        hover: "hover:border-blue-400/50",
        glow: "shadow-blue-500/20",
      },
      green: {
        icon: "text-green-400",
        border: "border-green-500/30",
        bg: "bg-green-500/10",
        hover: "hover:border-green-400/50",
        glow: "shadow-green-500/20",
      },
      purple: {
        icon: "text-purple-400",
        border: "border-purple-500/30",
        bg: "bg-purple-500/10",
        hover: "hover:border-purple-400/50",
        glow: "shadow-purple-500/20",
      },
      orange: {
        icon: "text-orange-400",
        border: "border-orange-500/30",
        bg: "bg-orange-500/10",
        hover: "hover:border-orange-400/50",
        glow: "shadow-orange-500/20",
      },
      yellow: {
        icon: "text-yellow-400",
        border: "border-yellow-500/30",
        bg: "bg-yellow-500/10",
        hover: "hover:border-yellow-400/50",
        glow: "shadow-yellow-500/20",
      },
      pink: {
        icon: "text-pink-400",
        border: "border-pink-500/30",
        bg: "bg-pink-500/10",
        hover: "hover:border-pink-400/50",
        glow: "shadow-pink-500/20",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

export default function Testimonials() {
   const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The talented individuals behind every successful project
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              {teamMembers.map((member, index) => {
                const colorClasses = getColorClasses(member.color);
                return (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    onHoverStart={() => setHoveredMember(index)}
                    onHoverEnd={() => setHoveredMember(null)}
                    className={`relative bg-gray-900/50 border ${colorClasses.border} ${colorClasses.hover} rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 group overflow-hidden text-center`}
                    style={{
                      boxShadow:
                        hoveredMember === index
                          ? `0 25px 50px -12px ${colorClasses.glow}`
                          : "none",
                    }}
                  >
                    <div className="relative z-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p
                        className={`text-sm ${colorClasses.icon} mb-3 font-medium`}
                      >
                        {member.role}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  )
}
