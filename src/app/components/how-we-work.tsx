import { Search, Lightbulb, Rocket } from "lucide-react"
import React from "react"
import AnimatedButton, { Step } from "./animated-box"

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your needs, exploring ideas and defining strategies for long-term success.",
    icon: <Search className="w-8 h-8" />,
    mockup: "discovery",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    number: "02",
    title: "Development & Test",
    description: "We craft tailored solutions for your goals and rigorously test them for top-notch reliability.",
    icon: <Lightbulb className="w-8 h-8" />,
    mockup: "development",
    gradient: "from-purple-500/20 to-purple-600/10",
  },
  {
    number: "03",
    title: "Launch & Maintain",
    description: "We deploy your solution seamlessly and ensure its continued performance with ongoing care.",
    icon: <Rocket className="w-8 h-8" />,
    mockup: "launch",
    gradient: "from-green-500/20 to-green-600/10",
  },
]

export default function HowWeWork() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A simple, effective approach to building your brand with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedButton key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
