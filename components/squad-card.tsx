"use client";

import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";

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
  const imageUrl = image || "/pp.png";

  return (
    <Link href={`/squad/${id}`}>
      <CometCard rotateDepth={15} translateDepth={15}>
        <div
          className="relative flex w-full cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-card/80 backdrop-blur-sm p-2 md:p-4 overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full">
              <img
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-2xl bg-black object-cover contrast-90 saturate-90"
                alt={name}
                src={imageUrl}
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
            </div>
          </div>

          {/* Card footer */}
          <div className="mt-3 flex flex-shrink-0 flex-col p-4 font-sans text-white gap-1">
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
