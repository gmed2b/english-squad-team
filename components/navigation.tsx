"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* About Me Button - Left Side */}
          <Link href="/about" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              About Me
            </motion.button>
          </Link>

          {/* Mobile About Me Button */}
          <Link href="/about" className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              About Me
            </motion.button>
          </Link>

          {/* Logo - Right Side */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="relative h-12 md:h-14 w-auto cursor-pointer">
              <Image
                src="/logo_univ_2021.png"
                alt="University Logo"
                width={180}
                height={56}
                className="h-full w-auto object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
