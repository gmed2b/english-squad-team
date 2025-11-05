"use client";

import { MovingBorder } from "@/components/ui/moving-border";
import { Sparkles } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  const scrollToStudents = () => {
    const studentsSection = document.getElementById("students-section");
    if (studentsSection) {
      studentsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Background image with blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fac-bg.jpg"
          alt="faculty background"
          fill
          className="object-cover hero-bg-blur"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay z-10" />
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-black/20 to-black/60 z-10" />
      </div>

      {/* Spotlight effect */}
      <Spotlight className="z-10 top-0 left-1/2 -translate-x-1/2" fill="white" />

      {/* Sparkles */}
      <Sparkles className="z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide uppercase">
              Univeristà di Corsica Pasquale Paoli
            </span>
          </div>
        </motion.div>

        {/* Main Heading - Big and Bold */}
        <div className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tighter"
          >
            <span className="block text-white drop-shadow-2xl">The best</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
              Computer Science Class
            </span>
          </motion.h1>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 max-w-4xl tracking-tight">
              Meets{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">
                  M2 DFS & DENG
                </span>
                <motion.span
                  className="absolute inset-0 bg-yellow-400/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Description
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light pt-4"
          >
            Students shaping tomorrow — multidisciplinary, curious, and connected.
            <br className="hidden md:block" />
            Explore their work below.
          </motion.p>
           */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8 md:pt-12"
          >
            <MovingBorder
              duration={3000}
              className="px-8 py-4 text-base md:text-lg font-semibold  hover:scale-105 transition-transform cursor-pointer"
              containerClassName="rounded-full"
              onClick={scrollToStudents}
            >
              Explore Students
            </MovingBorder>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToStudents}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/60 font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-0.5 h-8 bg-linear-to-b from-white/60 to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
