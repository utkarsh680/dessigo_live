"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

const company = "dessigo";
const DO_INDEX = [company.length - 7, company.length - 1]; // For the "DO"

export default function Hero() {
  const [animationState, setAnimationState] = useState<
    "initial" | "joined" | "exploded"
  >("initial");
  const [animating, setAnimating] = useState(false);
  const [origin, setOrigin] = useState(""); // Client-only window origin
  const [randomRotations, setRandomRotations] = useState<number[]>([]); // Store random rotations for exploded state

  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);

  const runAnimation = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setAnimationState("initial");

    setTimeout(() => {
      setAnimationState("joined");
    }, 50);

    setTimeout(() => {
      setAnimationState("exploded");
    }, 1500);

    setTimeout(() => {
      if (!hasAutoScrolled) {
        smoothScrollTo(window.innerHeight, 800);
        setHasAutoScrolled(true);
      }
    }, 3000);

    setTimeout(() => {
      setAnimating(false);
    }, 1400);
  }, [animating, hasAutoScrolled]);

  useEffect(() => {
    setOrigin(window.location.origin);

    setRandomRotations(
      company
        .split("")
        .map((_, i) => (DO_INDEX.includes(i) ? 0 : (Math.random() - 0.5) * 20))
    );

    window.scrollTo(0, 0);

    if (!hasAutoScrolled) {
      runAnimation();
    }

    const handleUserScroll = () => {
      setHasAutoScrolled(true); // User ne manually scroll kar diya
    };

    window.addEventListener("scroll", handleUserScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleUserScroll);
    };
  }, [runAnimation, hasAutoScrolled]);

  function smoothScrollTo(targetY: number, duration: number) {
    const startY = window.scrollY || window.pageYOffset;
    const distance = targetY - startY;
    let startTime: number | null = null;

    function animationStep(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // smooth ease-in-out
      window.scrollTo(0, startY + distance * easeInOut);
      if (elapsed < duration) {
        requestAnimationFrame(animationStep);
      }
    }

    requestAnimationFrame(animationStep);
  }

  function handleClick() {
    if (animating) return;
    runAnimation();
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(15deg, #000000ff 40%, #ff660085 100%)`,
        animation: "bg-move 10s ease-in-out infinite alternate",
      }}
      role="banner"
      aria-label="Dessigo brand animation hero section"
    >
      <style>
        {`@keyframes bg-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }`}
      </style>

      <div className="sr-only">
        <h1>Dessigo - Premium Brand Experience</h1>
        <p>
          Experience the power of Dessigo with our innovative brand presentation
        </p>
      </div>

      <div
        className="relative z-10 flex font-bold cursor-pointer select-none"
        style={{
          userSelect: "none",
          fontSize: "clamp(3rem, 8vw, 10rem)", // <-- Yeh line add/karein replace previously fixed 10rem size
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Click to replay Dessigo brand animation"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {company.split("").map((letter, i) => {
          const isGapAfterDOFirstLetter = i === DO_INDEX[0];

          const variants = {
            initial: {
              opacity: 0,
              y: 40,
              scale: 0.8,
            },
            joined: {
              opacity: 1,
              y: 0,
              scale: 1,
              x: 0,
              rotate: 0,
            },
            exploded: {
              opacity: DO_INDEX.includes(i) ? 1 : 0,
              y: DO_INDEX.includes(i) ? -10 : 20,
              scale: DO_INDEX.includes(i) ? 1.2 : 0.8,
              x: 0,
              rotate: DO_INDEX.includes(i) ? 0 : randomRotations[i] || 0, // use stored random rotation here
            },
          };

          const getTransition = () => {
            if (animationState === "exploded") {
              return {
                duration: 0.6,
                delay: DO_INDEX.includes(i) ? 0 : i * 0.05,
                type: "spring" as const,
                stiffness: 200,
                damping: 20,
              };
            }
            return {
              delay: i * 0.18,
              type: "spring" as const,
              stiffness: 300,
            };
          };

          return (
            <motion.span
              key={i}
              variants={variants}
              initial="initial"
              animate={animationState}
              transition={getTransition()}
              style={{
                color: "#fff",
                transition: "color 0.2s",
                marginRight:
                  animationState === "exploded" &&
                  i >= DO_INDEX[0] &&
                  i <= DO_INDEX[1]
                    ? 1
                    : isGapAfterDOFirstLetter
                    ? 0
                    : 8,
                letterSpacing: 0,
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              {animationState === "exploded" && !DO_INDEX.includes(i)
                ? ""
                : letter}

              {animationState === "exploded" && i === DO_INDEX[1] && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.4,
                    type: "spring" as const,
                    stiffness: 400,
                  }}
                  style={{
                    color: "#ff6600",
                    marginLeft: 4,
                    fontSize: "0.6em",
                    position: "relative",
                    bottom: "-0.2em",
                    right: "0.1em",
                    display: "inline-block",
                    userSelect: "none",
                  }}
                  aria-hidden="true"
                >
                  &#8226;
                </motion.span>
              )}
            </motion.span>
          );
        })}
      </div>

      {/* Schema.org structured data for SEO render only after hydration */}
      {origin && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dessigo",
              description: "Premium brand experience with innovative design",
              url: origin,
            }),
          }}
        />
      )}
    </section>
  );
}
