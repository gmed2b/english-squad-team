"use client";

import { dataEngineers, fullStackDevelopers } from "@/data/students";
import { motion } from "motion/react";
import SquadCard from "./squad-card";

export default function SquadGrid() {
  return (
    <section id="students-section" className="py-20 md:py-32 px-6 md:px-12 bg-linear-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter"
          >
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-600 to-blue-600">
              Students
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Exceptional individuals united by creativity, innovation, and a shared commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Full Stack Developers Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
                Full Stack Developers
              </span>
            </h3>
            <p className="text-muted-foreground text-lg">M2DWM - Master 2 Développement Web et Mobile</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 bento-container">
            {fullStackDevelopers.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SquadCard student={student} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Engineers Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
                Data Engineers
              </span>
            </h3>
            <p className="text-muted-foreground text-lg">M2DENG - Master 2 Data Engineering</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 bento-container">
            {dataEngineers.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SquadCard student={student} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
