"use client";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
  CheckmarkCircle01Icon,
  UndoIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createRef, useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CatchupCard,
  type CatchupCardData,
  type CatchupCardRef,
  type SwipeDirection,
} from "@/components/ui/catchup-card";
import { cn } from "@/lib/utils";

type CatchupCardStackProps = {
  cards: CatchupCardData[];
  onSwipe?: (id: string, direction: SwipeDirection) => void;
  onEmpty?: () => void;
  className?: string;
};

export function CatchupCardStack({
  cards,
  onSwipe,
  onEmpty,
  className,
}: CatchupCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
  const [swipedCards, setSwipedCards] = useState<
    { id: string; direction: SwipeDirection }[]
  >([]);

  const cardRefs = useMemo(
    () => cards.map(() => createRef<CatchupCardRef>()),
    [cards]
  );

  const canUndo = swipedCards.length > 0;
  const remainingCount = currentIndex + 1;
  const isComplete = currentIndex < 0;

  const handleSwipe = useCallback(
    (index: number, direction: SwipeDirection) => {
      const card = cards[index];
      if (card) {
        setSwipedCards((prev) => [...prev, { id: card.id, direction }]);
        onSwipe?.(card.id, direction);
      }
    },
    [cards, onSwipe]
  );

  const handleCardLeftScreen = useCallback(
    (_index: number) => {
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;
        if (newIndex < 0) {
          onEmpty?.();
        }
        return newIndex;
      });
    },
    [onEmpty]
  );

  const handleUndo = useCallback(async () => {
    if (!canUndo) {
      return;
    }

    const lastSwipedIndex = currentIndex + 1;
    if (lastSwipedIndex < cards.length) {
      const cardRef = cardRefs[lastSwipedIndex];
      await cardRef?.current?.restoreCard();
      setCurrentIndex(lastSwipedIndex);
      setSwipedCards((prev) => prev.slice(0, -1));
    }
  }, [canUndo, currentIndex, cards.length, cardRefs]);

  const handleSwipeButton = useCallback(
    async (direction: SwipeDirection) => {
      if (currentIndex >= 0) {
        const cardRef = cardRefs[currentIndex];
        await cardRef?.current?.swipe(direction);
      }
    },
    [currentIndex, cardRefs]
  );

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-6",
        className
      )}
    >
      {/* Card Stack Container */}
      <div className="relative h-[500px] w-[340px] md:h-[560px] md:w-[400px]">
        {isComplete ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl border border-[#4C566A] bg-[#3B4252] p-8 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-[#A3BE8C]/20">
              <HugeiconsIcon
                className="size-10 text-[#A3BE8C]"
                icon={CheckmarkCircle01Icon}
              />
            </div>
            <h2 className="font-semibold text-2xl text-[#ECEFF4]">
              すべてキャッチアップ完了！
            </h2>
            <p className="text-[#D8DEE9]">未読の記事はありません</p>
          </div>
        ) : (
          <>
            {/* Render cards in reverse order so the first card is on top */}
            {cards.map((card, index) => {
              // Only render current card and a few behind it for stack effect
              if (index > currentIndex || index < currentIndex - 2) {
                return null;
              }

              const stackPosition = currentIndex - index;

              return (
                <div
                  className="absolute inset-0 transition-transform duration-300"
                  key={card.id}
                  style={{
                    transform: `scale(${1 - stackPosition * 0.05}) translateY(${stackPosition * 10}px)`,
                    zIndex: cards.length - stackPosition,
                  }}
                >
                  <CatchupCard
                    data={card}
                    onCardLeftScreen={(_direction) => {
                      handleCardLeftScreen(index);
                    }}
                    onSwipe={(direction) => handleSwipe(index, direction)}
                    ref={cardRefs[index]}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-4">
        {/* Remaining Count */}
        <div className="text-[#D8DEE9] text-sm">
          {isComplete ? (
            <span>0 / {cards.length} 件</span>
          ) : (
            <span>
              残り {remainingCount} / {cards.length} 件
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Skip Button */}
          <Button
            className="size-14 rounded-full border-2 border-[#BF616A] bg-transparent text-[#BF616A] hover:bg-[#BF616A]/20"
            disabled={isComplete}
            onClick={() => handleSwipeButton("left")}
            size="icon-lg"
            variant="ghost"
          >
            <HugeiconsIcon className="size-6" icon={Cancel01Icon} />
            <span className="sr-only">スキップ</span>
          </Button>

          {/* Undo Button */}
          <Button
            className="size-12 rounded-full border-2 border-[#EBCB8B] bg-transparent text-[#EBCB8B] hover:bg-[#EBCB8B]/20 disabled:border-[#4C566A] disabled:text-[#4C566A]"
            disabled={!canUndo}
            onClick={handleUndo}
            size="icon"
            variant="ghost"
          >
            <HugeiconsIcon className="size-5" icon={UndoIcon} />
            <span className="sr-only">元に戻す</span>
          </Button>

          {/* Read Button */}
          <Button
            className="size-14 rounded-full border-2 border-[#A3BE8C] bg-transparent text-[#A3BE8C] hover:bg-[#A3BE8C]/20"
            disabled={isComplete}
            onClick={() => handleSwipeButton("right")}
            size="icon-lg"
            variant="ghost"
          >
            <HugeiconsIcon className="size-6" icon={CheckmarkCircle01Icon} />
            <span className="sr-only">読んだ</span>
          </Button>
        </div>

        {/* Swipe Hints */}
        <div className="flex items-center gap-8 text-[#4C566A] text-xs">
          <div className="flex items-center gap-1">
            <HugeiconsIcon className="size-3" icon={ArrowLeft01Icon} />
            <span>スキップ</span>
          </div>
          <div className="flex items-center gap-1">
            <span>読んだ</span>
            <HugeiconsIcon className="size-3" icon={ArrowRight01Icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
