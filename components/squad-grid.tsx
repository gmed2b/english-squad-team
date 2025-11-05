"use client";

import { students } from "@/data/students";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 bento-container">
          {students.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SquadCard
                id={student.id}
                name={student.name}
                age={student.age}
                role={student.role}
                bio={student.bio}
                image={student.photo}
                skills={student.strengths}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
