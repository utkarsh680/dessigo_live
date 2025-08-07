"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "../lib/utils";

const technologies = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "TypeScript",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "Go",
  "Rust",
  "Scala",
  "Perl",
  "Dart",
  "SQL",
  "Bash/Shell",
  "MATLAB",
  "Objective-C",
  "React",
  "Angular",
  "Vue.js",
  "Svelte",
  "Solid.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "jQuery",
  "Node.js (Express.js, NestJS)",
  "Django (Python)",
  "Flask (Python)",
  "Ruby on Rails (Ruby)",
  "Spring Boot (Java)",
  "Laravel (PHP)",
  "ASP.NET Core (C#)",
  "Symfony (PHP)",
  "Play (Scala/Java)",
  "Phoenix (Elixir)",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "SQLite",
  "Microsoft SQL Server",
  "Oracle Database",
  "Cassandra",
  "Elasticsearch",
  "Firebase",
  "Amazon DynamoDB",
  "MariaDB",
  "CouchDB",
  "Neo4j",
  "Amazon Web Services (AWS)",
  "Microsoft Azure",
  "Google Cloud Platform (GCP)",
  "DigitalOcean",
  "Heroku",
  "Netlify",
  "Vercel",
  "Firebase Hosting",
  "Bluehost",
  "HostGator",
  "GoDaddy",
  "SiteGround",
  "Hostinger",
];

function VerticalWord({ word }: { word: string }) {
  return (
    <div
      className="flex flex-col items-center select-none cursor-default"
      style={{ lineHeight: 1 }}
    >
      {word.split("").map((letter, idx) => (
        <div
          key={idx}
          className="text-xs font-mono uppercase text-gray-400"
          style={{ letterSpacing: "0.1em" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </div>
      ))}
    </div>
  );
}

function HorizontalMarquee({ items }: { items: string[] }) {
  return (
    <div className="md:hidden w-full bg-black overflow-hidden border-t border-white/20 py-2 mt-6">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ gap: "2rem" }}
      >
        {[...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="text-xs font-mono uppercase text-gray-400 inline-block px-4"
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* CSS animation for vertical marquee */}
      <style>{`
        @keyframes marqueeUpSlow {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      <div className="flex min-h-screen bg-black flex-col md:flex-row">
        {/* Vertical marquee (desktop and up) */}
        <div
          className="hidden md:flex w-20 bg-black overflow-hidden relative flex-col items-center pt-[100px]"
          style={{ height: "90vh" }}
          aria-label="Scrolling Technologies"
        >
          <div
            className="flex flex-col items-center space-y-8"
            style={{
              animation: "marqueeUpSlow 90s linear infinite",
              transformOrigin: "top center",
            }}
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <VerticalWord key={`${tech}-${idx}`} word={tech} />
            ))}
          </div>
        </div>

        {/* Main Hero Section */}
        <section className="flex-1 relative flex flex-col items-center pt-24 pb-16 overflow-hidden mt-20">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
              style={{ filter: "brightness(0.85) contrast(1.15)" }}
            >
              <source src="/it-hero-background-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span>dessigo - Innovative IT Solutions Provider</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  <span className="block text-white mb-2">CUSTOM SOFTWARE</span>
                  <span className="block text-white mb-2">AND IT SERVICES FOR</span>
                  <span
                    className={cn("block mb-2 text-orange-400 bg-clip-text")}
                    style={{ textShadow: "0 0 40px rgba(186, 94, 2, 0.5)" }}
                  >
                    TECH COMPANIES
                  </span>
                  <span className="block text-gray-300">OF ALL SCALES</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  We harness the latest technologies to build scalable, secure, and innovative software solutions.
                  From cloud integration to custom app development and cybersecurity.
                </p>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start">
                <Link href="/contact">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100 cursor-pointer scale-100 hover:scale-105 transition-transform duration-200"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Horizontal marquee visible only on mobile, flow below hero content */}
              <HorizontalMarquee items={technologies} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
