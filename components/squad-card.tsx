"use client";

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import Link from "next/link";
import { useState } from "react";

interface SquadCardProps {
  id: string;
  name: string;
  age?: number;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

export default function SquadCard({ id, name, age, role, image }: SquadCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Use absolute URL for better image loading
  const imageUrl = image || "/pp.png";

  return (
    <Link href={`/squad/${id}`}>
      <div
        className="group cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-purple-500/50 transition-all duration-300">
          {/* Pixelated Canvas */}
          <div className="aspect-square">
            <PixelatedCanvas
              src={imageUrl}
              width={400}
              height={400}
              cellSize={3}
              dotScale={0.9}
              shape="square"
              backgroundColor="#000000"
              dropoutStrength={0.3}
              interactive
              distortionStrength={4}
              distortionRadius={100}
              distortionMode="swirl"
              followSpeed={0.2}
              jitterStrength={5}
              jitterSpeed={4}
              sampleAverage
              tintColor="#a855f7"
              tintStrength={isHovered ? 0.2 : 0.1}
              className="w-full h-full"
              objectFit="cover"
              key={imageUrl}
            />
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none" />

          {/* Card content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-1">{name}</h3>
                  <p className="text-sm md:text-base text-white/90 font-medium">{role}</p>
                </div>

                {typeof age !== "undefined" && (
                  <div className="ml-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                    <span className="text-sm font-semibold text-white">{age} yrs</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-linear-to-t from-purple-500/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </Link>
  );
}
