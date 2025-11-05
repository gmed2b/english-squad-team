"use client";

import Navigation from "@/components/navigation";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { motion } from "motion/react";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 md:py-20 px-6 md:px-12 pt-32 md:pt-36">
        <div className="max-w-6xl mx-auto">
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
                  src="/pp.png"
                  width={500}
                  height={500}
                  cellSize={4}
                  dotScale={0.85}
                  shape="square"
                  backgroundColor="#000000"
                  dropoutStrength={0.2}
                  interactive
                  distortionStrength={5}
                  distortionRadius={120}
                  distortionMode="swirl"
                  followSpeed={0.15}
                  jitterStrength={6}
                  jitterSpeed={3}
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
                <span className="text-3xl">🇫🇷</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">French</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight leading-tight">Mehdi Ghoulam</h1>

              <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 font-bold mb-6">
                Full-Stack Developer & Master 2 Student
              </p>

              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                Building robust, user-centric applications with a strong product mindset. Co-founder of{" "}
                <a
                  href="https://mindlet.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Mindlet 🐙
                </a>
              </p>

              <div className="space-y-6">
                {/* Personal Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Age</h4>
                    <p className="text-2xl font-bold text-foreground">23</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Born</h4>
                    <p className="text-sm font-semibold text-foreground">Mulhouse, France</p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://gelk.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-sm text-foreground font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
                  >
                    🌐 gelk.fr
                  </a>
                  <a
                    href="https://mindlet.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-sm text-foreground font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
                  >
                    🐙 mindlet.app
                  </a>
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
            <div className="flex gap-6 md:gap-8 overflow-x-auto">
              {["profile", "strengths", "future plans", "fun fact", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-medium capitalize border-b-2 transition-colors whitespace-nowrap ${
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
            {activeTab === "profile" && (
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-linear-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>👨‍💻</span> About Me
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                    <p>
                      I'm Mehdi Ghoulam, a French full-stack developer and Master 2 Informatique student with a strong
                      product mindset and a passion for building robust, user-centric applications end to end. I thrive
                      at the intersection of clean architecture, developer experience, and impactful delivery, moving
                      comfortably across front-end interfaces and back-end services.
                    </p>
                    <p>
                      On the front end, I specialize in TypeScript, React, and React Native, with a focus on component
                      design, state management, and performance. On the back end, I work with PHP and Laravel to build
                      reliable APIs, and I design relational schemas with PostgreSQL that balance scalability and
                      clarity.
                    </p>
                    <p>
                      I'm comfortable shaping API contracts, writing integration tests, and instrumenting apps for
                      observability. I care deeply about code readability, maintainability, and incremental delivery.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === "strengths" && (
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>💪</span> Coding Strengths
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "TypeScript",
                      "React",
                      "React Native",
                      "PHP",
                      "Laravel",
                      "RESTful APIs",
                      "PostgreSQL",
                      "Full-stack Product Thinking",
                    ].map((strength, index) => (
                      <motion.span
                        key={strength}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-4 py-2 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-sm text-foreground font-semibold hover:scale-105 transition-transform"
                      >
                        {strength}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>🎯</span> Areas for Growth
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm text-muted-foreground font-medium">
                      Python (learning path in progress)
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-linear-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>🏆</span> Biggest Achievement
                  </h3>
                  <p className="text-foreground leading-relaxed text-base md:text-lg font-medium">
                    Co-founder of{" "}
                    <a
                      href="https://mindlet.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Mindlet 🐙
                    </a>
                    , where I contributed across the stack—from UI/UX flows and mobile experience to API design,
                    authentication, and database modeling. Shipping a real product to real users taught me pragmatic
                    trade-offs, release discipline, and how to turn feedback into rapid iterations.
                  </p>
                </motion.div>
              </div>
            )}

            {activeTab === "future plans" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-linear-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span>🚀</span> Future Plans
                </h3>
                <ul className="space-y-3 text-foreground leading-relaxed text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Complete my Master 2 in Computer Science</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Deepen platform reliability (testing, CI/CD, monitoring)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Explore cloud-native patterns (Docker, containers, and managed Postgres)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Improve mobile performance and accessibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Level up Python for data tooling and backend scripting</span>
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === "fun fact" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-linear-to-br from-pink-500/5 to-purple-500/5 border border-pink-500/20 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span>🎉</span> Fun Fact
                </h3>
                <p className="text-foreground leading-relaxed text-base md:text-lg font-medium">
                  "When it works, don't touch it!"—but I still write tests before I celebrate.
                </p>
              </motion.div>
            )}

            {activeTab === "contact" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-linear-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span>📬</span> Get In Touch
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p>
                    My name is Mehdi Ghoulam, a Master 2 Informatique student and full-stack developer passionate about
                    building reliable, user-focused software. I work primarily with TypeScript, React/React Native on
                    the front end and PHP/Laravel with PostgreSQL on the back end.
                  </p>
                  <p>
                    What motivates me most is turning product goals into maintainable code—clean architecture, clear API
                    boundaries, and measured releases with testing and instrumentation. I value collaboration, code
                    reviews, and documentation that helps teams move faster with confidence.
                  </p>
                  <p>
                    I'm excited to contribute to a team where I can bring full-stack impact from day one, continue
                    learning (especially strengthening my Python for tooling and backend tasks), and help ship features
                    that users love.
                  </p>
                  <div className="mt-8 p-6 bg-card border border-border rounded-xl">
                    <p className="text-foreground font-semibold mb-2">Mehdi Ghoulam</p>
                    <p className="text-sm text-muted-foreground">Mulhouse, France</p>
                    <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <a
                        href="https://gelk.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-sm"
                      >
                        gelk.fr
                      </a>
                      <a
                        href="https://mindlet.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-sm"
                      >
                        mindlet.app
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
