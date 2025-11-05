"use client";

import { CometCard } from "@/components/ui/comet-card";
import { Student } from "@/types/Student";
import Image from "next/image";
import Link from "next/link";

interface SquadCardProps {
  student: Student;
}

export default function SquadCard({ student }: SquadCardProps) {
  const { id, name, age, role, photo, biggestAchievement } = student;
  const imageUrl = photo || "/pp.png";

  // Truncate achievement if too long
  const truncateText = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <Link href={`/squad/${id}`}>
      <CometCard>
        <div
          className="relative flex w-full cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-card/80 backdrop-blur-sm p-2 md:p-4 overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-3/4 w-full">
              <Image
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-2xl bg-black object-cover contrast-90 saturate-90"
                alt={name}
                src={imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 15px 0px",
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

              {/* Age badge */}
              {typeof age !== "undefined" && (
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                  <span className="text-sm font-bold text-white">{age}</span>
                </div>
              )}

              {/* Achievement quote */}
              {biggestAchievement && (
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
                  <p className="text-xs text-white/90 italic line-clamp-2">
                    &ldquo;{truncateText(biggestAchievement)}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card footer */}
          <div className="mt-3 flex shrink-0 flex-col p-4 font-sans text-white gap-1">
            <div className="text-lg md:text-xl font-bold text-white drop-shadow-lg">{name}</div>
            <div className="text-sm md:text-base text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 font-semibold">
              {role}
            </div>
          </div>
        </div>
      </CometCard>
    </Link>
  );
}
