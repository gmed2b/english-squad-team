"use client";

import Navigation from "@/components/navigation";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { motion } from "motion/react";

export default function AboutPage() {
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

          {/* Long-form Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-linear-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-base md:text-lg">
                I&apos;m Mehdi Ghoulam, a French full-stack developer and Master 2 Informatique student with a strong
                product mindset and a passion for building robust, user-centric applications end to end. I thrive at the
                intersection of clean architecture, developer experience, and impactful delivery, moving comfortably
                across front-end interfaces and back-end services.
              </p>

              <p className="text-base md:text-lg">
                On the front end, I specialize in TypeScript, React, and React Native, with a focus on component design,
                state management, and performance optimization. On the back end, I work with PHP and Laravel to build
                reliable APIs, and I design relational schemas with PostgreSQL that balance scalability and clarity.
                I&apos;m comfortable shaping API contracts, writing integration tests, and instrumenting apps for
                observability. I care deeply about code readability, maintainability, and incremental delivery.
              </p>

              <div className="my-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">💪 Technical Expertise</h3>
                <div className="flex flex-wrap gap-3 mb-6">
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
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-sm text-foreground font-semibold"
                    >
                      {strength}
                    </motion.span>
                  ))}
                </div>
                <p className="text-base md:text-lg">
                  While I excel in these areas, I&apos;m actively expanding my Python skills for data tooling and
                  backend scripting—comfortable reading production code but still building toward production-grade
                  services.
                </p>
              </div>

              <div className="my-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">🏆 Biggest Achievement</h3>
                <p className="text-base md:text-lg">
                  As co-founder of{" "}
                  <a
                    href="https://mindlet.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-semibold"
                  >
                    Mindlet 🐙
                  </a>
                  , I contributed across the entire stack—from crafting intuitive UI/UX flows and delivering smooth
                  mobile experiences to designing APIs, implementing secure authentication, and modeling database
                  schemas. Shipping a real product to real users taught me pragmatic trade-offs, release discipline, and
                  how to turn user feedback into rapid, meaningful iterations. This experience solidified my
                  understanding of full-stack product thinking and the importance of balancing speed with quality.
                </p>
              </div>

              <div className="my-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">🚀 Future Goals</h3>
                <p className="text-base md:text-lg mb-4">
                  Looking ahead, I&apos;m focused on completing my Master 2 in Computer Science while deepening my
                  expertise in platform reliability through testing, CI/CD pipelines, and monitoring. I&apos;m eager to
                  explore cloud-native patterns—particularly Docker, containerization, and managed PostgreSQL
                  solutions—to build more scalable and resilient systems.
                </p>
                <p className="text-base md:text-lg">
                  Additionally, I&apos;m committed to improving mobile performance and accessibility, ensuring that the
                  applications I build are not only fast but also inclusive. Strengthening my Python skills remains a
                  key priority, as I see immense value in leveraging it for data tooling and backend automation. My
                  ultimate goal is to become a well-rounded engineer who can contribute meaningfully across the entire
                  technology stack.
                </p>
              </div>

              <div className="my-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">💡 Philosophy</h3>
                <p className="text-base md:text-lg">
                  What motivates me most is turning product goals into maintainable, elegant code. I believe in clean
                  architecture, clear API boundaries, and measured releases backed by comprehensive testing and
                  instrumentation. I value collaboration, thorough code reviews, and documentation that empowers teams
                  to move faster with confidence. My approach is always to ship incrementally, learn continuously, and
                  maintain a strong focus on the end user&apos;s experience.
                </p>
              </div>

              <div className="my-8 p-6 bg-card border border-border rounded-xl">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">📬 Let&apos;s Connect</h3>
                <p className="text-base md:text-lg mb-4">
                  I&apos;m excited to contribute to teams where I can bring full-stack impact from day one, continue
                  learning, and help ship features that users love. Whether it&apos;s building new features, optimizing
                  existing systems, or collaborating on architectural decisions, I&apos;m ready to make a meaningful
                  contribution.
                </p>
                <div className="mt-6">
                  <p className="text-foreground font-semibold text-lg mb-2">Mehdi Ghoulam</p>
                  <p className="text-sm text-muted-foreground">Mulhouse, France</p>
                  <p className="text-sm text-muted-foreground mb-4">Full-Stack Developer</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://gelk.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      🌐 gelk.fr
                    </a>
                    <a
                      href="https://mindlet.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      🐙 mindlet.app
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg italic text-muted-foreground/80 pt-4">
                &quot;When it works, don&apos;t touch it!&quot;—but I still write tests before I celebrate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
