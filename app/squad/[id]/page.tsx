"use client";

import Navigation from "@/components/navigation";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { students } from "@/data/students";
import { motion } from "motion/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function MemberDetail() {
  const params = useParams<{ id: string }>();
  const member = students.find((m) => m.id === params.id);
  const [activeTab, setActiveTab] = useState("overview");

  if (!member) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-muted-foreground">Member not found</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 md:py-20 px-6 md:px-12 pt-32 md:pt-36">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to squad
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
            {/* Image Column */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-card shadow-2xl">
                <PixelatedCanvas
                  src={member.photo}
                  width={500}
                  height={500}
                  cellSize={3}
                  shape="square"
                  backgroundColor="#000000"
                  dropoutStrength={0.2}
                  interactive
                  sampleAverage
                  tintColor="#a855f7"
                  tintStrength={0.15}
                  className="w-full h-full"
                  objectFit="cover"
                />
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div
              className="lg:col-span-3 flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-3xl">{member.flag}</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {member.nationality}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight leading-tight">{member.name}</h1>

              <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 font-bold mb-6">
                {member.role}
              </p>

              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">{member.bio}</p>

              <div className="space-y-6">
                {/* Personal Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Age</h4>
                    <p className="text-2xl font-bold text-foreground">{member.age}</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Born</h4>
                    <p className="text-sm font-semibold text-foreground">{member.placeOfBirth}</p>
                  </div>
                </div>

                {/* Strengths */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    💪 Strengths
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.strengths.map((strength, index) => (
                      <motion.span
                        key={strength}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        className="px-4 py-2 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-sm text-foreground font-semibold hover:scale-105 transition-transform"
                      >
                        {strength}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-b border-border mb-8"
          >
            <div className="flex gap-6 md:gap-8">
              {["overview", "achievements", "fun facts"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-medium capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {activeTab === "overview" && (
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>🎯</span> Areas for Growth
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {member.weaknesses.map((weakness, index) => (
                      <motion.span
                        key={weakness}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm text-muted-foreground font-medium"
                      >
                        {weakness}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-linear-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>📖</span> About {member.name.split(" ")[0]}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{member.bio}</p>
                </motion.div>
              </div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-linear-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span>🏆</span> Biggest Achievement
                </h3>
                <p className="text-foreground leading-relaxed text-base md:text-lg font-medium">
                  {member.biggestAchievement}
                </p>
              </motion.div>
            )}

            {activeTab === "fun facts" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-linear-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span>🎉</span> Fun Fact
                </h3>
                <p className="text-foreground leading-relaxed text-base md:text-lg font-medium">{member.funFact}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
