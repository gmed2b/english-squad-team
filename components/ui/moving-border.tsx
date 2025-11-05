"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component className={cn("relative p-px overflow-hidden", containerClassName)} {...otherProps}>
      <motion.div
        className={cn("absolute inset-0 rounded-full", borderClassName)}
        style={{
          background: "linear-gradient(90deg, #a855f7, #ec4899, #3b82f6, #a855f7)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={cn("relative bg-background rounded-full z-10", className)}>{children}</div>
    </Component>
  );
}
