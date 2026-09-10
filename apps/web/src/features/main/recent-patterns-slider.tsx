"use client";

import { RECENT_PATTERNS } from "./constants";
import {EmblaViewportRefType} from "embla-carousel-react";
import {SliderItems} from "@/features/main/slider-item";
import Link from "next/link";

interface RecentPatternsSliderProps {
    emblaRef: EmblaViewportRefType,
}

export function RecentPatternsSlider({emblaRef}: RecentPatternsSliderProps) {

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {RECENT_PATTERNS.map((pattern) => (
            <Link href="/list" key={pattern.id}>
                <SliderItems items={pattern}/>
            </Link>
        ))}
      </div>
    </div>
  );
}
