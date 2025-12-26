"use client";

import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import type { RefObject } from "react";
import { useImperativeHandle, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type SwipeDirection = "left" | "right" | "up" | "down";

export type CatchupCardData = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  date: string;
  tags?: string[];
};

export type CatchupCardRef = {
  swipe: (direction: SwipeDirection) => Promise<void>;
  restoreCard: () => Promise<void>;
};

type CatchupCardProps = {
  data: CatchupCardData;
  onSwipe?: (direction: SwipeDirection) => void;
  onCardLeftScreen?: (direction: SwipeDirection) => void;
  ref?: RefObject<CatchupCardRef | null>;
};

export function CatchupCard({
  data,
  onSwipe,
  onCardLeftScreen,
  ref,
}: CatchupCardProps) {
  const tinderCardRef = useRef<{
    swipe: (dir: SwipeDirection) => Promise<void>;
    restoreCard: () => Promise<void>;
  }>(null);
  const [swipeDirection, setSwipeDirection] = useState<SwipeDirection | null>(
    null
  );

  useImperativeHandle(ref, () => ({
    swipe: async (direction: SwipeDirection) => {
      await tinderCardRef.current?.swipe(direction);
    },
    restoreCard: async () => {
      await tinderCardRef.current?.restoreCard();
    },
  }));

  const handleSwipeRequirementFulfilled = (direction: SwipeDirection) => {
    setSwipeDirection(direction);
  };

  const handleSwipeRequirementUnfulfilled = () => {
    setSwipeDirection(null);
  };

  const handleSwipe = (direction: SwipeDirection) => {
    setSwipeDirection(null);
    onSwipe?.(direction);
  };

  const handleCardLeftScreen = (direction: SwipeDirection) => {
    onCardLeftScreen?.(direction);
  };

  return (
    <TinderCard
      className="absolute"
      flickOnSwipe
      onCardLeftScreen={handleCardLeftScreen}
      onSwipe={handleSwipe}
      onSwipeRequirementFulfilled={handleSwipeRequirementFulfilled}
      onSwipeRequirementUnfulfilled={handleSwipeRequirementUnfulfilled}
      preventSwipe={["up", "down"]}
      ref={tinderCardRef}
      swipeRequirementType="position"
      swipeThreshold={100}
    >
      <div
        className={cn(
          "relative flex h-[500px] w-[340px] flex-col overflow-hidden rounded-2xl border border-[#4C566A] bg-[#3B4252] shadow-xl transition-shadow duration-300 md:h-[560px] md:w-[400px]",
          "touch-none select-none"
        )}
      >
        {/* Swipe Indicator Overlays */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-4 transition-opacity duration-200",
            swipeDirection === "right"
              ? "border-[#A3BE8C] bg-[#A3BE8C]/20 opacity-100"
              : "opacity-0"
          )}
        >
          <span className="rotate-[-20deg] rounded-lg border-4 border-[#A3BE8C] px-4 py-2 font-bold text-3xl text-[#A3BE8C]">
            読んだ
          </span>
        </div>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-4 transition-opacity duration-200",
            swipeDirection === "left"
              ? "border-[#BF616A] bg-[#BF616A]/20 opacity-100"
              : "opacity-0"
          )}
        >
          <span className="rotate-[20deg] rounded-lg border-4 border-[#BF616A] px-4 py-2 font-bold text-3xl text-[#BF616A]">
            スキップ
          </span>
        </div>

        {/* Image */}
        <div className="relative h-48 w-full shrink-0 md:h-56">
          <Image
            alt={data.imageAlt ?? data.title}
            className="object-cover"
            draggable={false}
            fill
            sizes="(max-width: 768px) 340px, 400px"
            src={data.imageUrl}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-5">
          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {data.tags.map((tag) => (
                <Badge
                  className="border-[#4C566A] bg-[#434C5E] text-[#D8DEE9]"
                  key={tag}
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Date */}
          <div className="flex items-center gap-1.5 text-[#D8DEE9] text-sm">
            <HugeiconsIcon className="size-3.5" icon={Calendar03Icon} />
            <span>{data.date}</span>
          </div>

          {/* Title */}
          <h3 className="line-clamp-2 font-semibold text-[#ECEFF4] text-xl leading-tight">
            {data.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-3 flex-1 text-[#D8DEE9] text-sm leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Swipe Hint */}
        <div className="flex items-center justify-between border-[#4C566A] border-t px-5 py-3">
          <div className="flex items-center gap-2 text-[#BF616A] text-sm">
            <span>←</span>
            <span>スキップ</span>
          </div>
          <div className="flex items-center gap-2 text-[#A3BE8C] text-sm">
            <span>読んだ</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </TinderCard>
  );
}
