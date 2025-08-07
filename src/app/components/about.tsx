"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,

  Target,
  Award,
  Globe,

  Heart,
  Lightbulb,
  Shield,
  Zap,

  Mail,
  Phone,
} from "lucide-react";

export default function AboutPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    {
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "yellow",
      gradient: "from-yellow-500/20 to-yellow-600/10",
    },
    {
      title: "Client Success",
      description:
        "Your success is our mission. We're committed to delivering solutions that drive real business value.",
      icon: <Target className="w-8 h-8" />,
      color: "green",
      gradient: "from-green-500/20 to-green-600/10",
    },
    {
      title: "Quality Excellence",
      description:
        "Every project undergoes rigorous testing and quality assurance to ensure flawless performance.",
      icon: <Award className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-500/20 to-blue-600/10",
    },
    {
      title: "Transparency",
      description:
        "Open communication and honest reporting throughout every stage of your project.",
      icon: <Shield className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500/20 to-purple-600/10",
    },
    {
      title: "Agile Delivery",
      description:
        "Fast, iterative development cycles that adapt to your changing needs and market demands.",
      icon: <Zap className="w-8 h-8" />,
      color: "orange",
      gradient: "from-orange-500/20 to-orange-600/10",
    },
    {
      title: "Long-term Partnership",
      description:
        "We build lasting relationships, providing ongoing support and growth opportunities.",
      icon: <Heart className="w-8 h-8" />,
      color: "pink",
      gradient: "from-pink-500/20 to-pink-600/10",
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

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-blue-400">TechSolutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              We&apos;re a passionate team of technologists, designers, and
              strategists dedicated to transforming businesses through
              innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                <span className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section - Fixed with proper margins */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Our journey began during the challenging lockdown period of
                2020, when three ambitious students decided to turn adversity
                into opportunity. While the world was adapting to remote work
                and digital transformation, we recognized the immense potential
                in the IT sector and made a bold decision to start our own
                company while still pursuing our studies.
              </p>
              <p className="text-lg leading-relaxed">
                What started as late-night coding sessions and virtual
                brainstorming meetings between classes quickly evolved into
                something much bigger. We began by working on mini projects -
                small web applications, mobile apps, and digital solutions that
                helped local businesses navigate the digital shift during the
                pandemic.
              </p>
              <p className="text-lg leading-relaxed">
                As we progressed in our academic journey, so did our company. We
                successfully completed multiple master projects, each one more
                complex and impactful than the last. From e-commerce platforms
                to enterprise management systems, every project taught us
                valuable lessons and strengthened our bond as co-founders.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we&apos;ve grown from three determined students to a
                full-service IT company, but we&apos;ve never lost that startup
                spirit and hunger for innovation that drove us during those
                lockdown days. Our success is built on the foundation of
                friendship, shared vision, and the belief that great technology
                can solve real business problems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our
              commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const colorClasses = getColorClasses(value.color);
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                  className={`relative bg-gray-900/50 border ${colorClasses.border} ${colorClasses.hover} rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 group overflow-hidden`}
                  style={{
                    boxShadow:
                      hoveredValue === index
                        ? `0 25px 50px -12px ${colorClasses.glow}`
                        : "none",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className={`${colorClasses.icon} mb-6`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Fixed to center 3 members */}
      {/* <Testimonials /> */}

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your digital goals. Our
              team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                <span className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                <span className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule a Call
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20"
            >
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in the
                digital age. We believe that great technology should be
                accessible, scalable, and transformative.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20"
            >
              <Globe className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading technology partner for businesses worldwide,
                recognized for our innovation, reliability, and commitment to
                client success. We envision a future where technology seamlessly
                enhances human potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
