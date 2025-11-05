"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SparklesProps {
  className?: string;
}

export function Sparkles({ className }: SparklesProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {[...Array(50)].map((_, i) => {
        const style = {
          left: `${(i * 7919) % 100}%`,
          top: `${(i * 3571) % 100}%`,
          animationDelay: `${(i * 0.1) % 3}s`,
        };

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={style}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: (i * 0.1) % 3,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
